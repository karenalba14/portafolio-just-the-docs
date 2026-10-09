'use strict';
(() => {
  const canvas=document.getElementById('game'),ctx=canvas.getContext('2d');
  const {box,text,overlay,beep,announce}=Arcade;
  const mode=document.getElementById('mode'),pauseButton=document.getElementById('pause');
  const floor=445,keys=new Set(),projectiles=[],effects=[];
  let state='ready',paused=false,last=0,clock=0,timer=60,round=1,wins=[0,0],banner='',countdown=0,aiClock=0;
  function fighter(id,x){return {id,x,y:floor,vx:0,vy:0,hp:100,energy:70,face:id===0?1:-1,h:id===0?91:131,w:38,attack:null,cool:0,stun:0,slow:0,block:false,walk:0};}
  let players=[fighter(0,275),fighter(1,685)];
  function startRound(){
    players=[fighter(0,275),fighter(1,685)];timer=60;projectiles.length=0;effects.length=0;keys.clear();
    countdown=2.4;state='countdown';paused=false;pauseButton.textContent='Pausar';aiClock=.2;
    announce(`Round ${round}. Prepárate.`);
  }
  function startMatch(){wins=[0,0];round=1;startRound();}
  function togglePause(){if(!['fight','countdown'].includes(state))return;paused=!paused;keys.clear();pauseButton.textContent=paused?'Continuar':'Pausar';announce(paused?'Pelea pausada.':'Pelea reanudada.');}
  pauseButton.addEventListener('click',togglePause);
  document.getElementById('restart').addEventListener('click',startMatch);
  mode.addEventListener('change',()=>{startMatch();canvas.focus({preventScroll:true});});
  document.addEventListener('visibilitychange',()=>{if(document.hidden&&!paused&&['fight','countdown'].includes(state))togglePause();});
  window.addEventListener('blur',()=>{keys.clear();if(!paused&&['fight','countdown'].includes(state))togglePause();});
  const controls=new Set(['KeyA','KeyD','KeyW','KeyS','KeyF','KeyG','KeyH','ArrowLeft','ArrowRight','ArrowUp','ArrowDown','KeyJ','KeyK','KeyL','Enter','KeyP']);
  window.addEventListener('keydown',e=>{
    if(/^(BUTTON|SELECT|INPUT|TEXTAREA)$/.test(e.target.tagName)||!controls.has(e.code))return;
    e.preventDefault();if(e.repeat)return;
    if(e.code==='Enter'){if(state==='ready'||state==='matchEnd')startMatch();return;}
    if(e.code==='KeyP'){togglePause();return;}
    if(paused||state!=='fight')return;keys.add(e.code);
    const p=players[0],q=players[1];
    if(e.code==='KeyW')jump(p);
    if(e.code==='KeyF')attack(p,'punch');if(e.code==='KeyG')attack(p,'kick');if(e.code==='KeyH')attack(p,'special');
    if(mode.value==='versus'){
      if(e.code==='ArrowUp')jump(q);
      if(e.code==='KeyJ')attack(q,'punch');if(e.code==='KeyK')attack(q,'kick');if(e.code==='KeyL')attack(q,'special');
    }
  });
  window.addEventListener('keyup',e=>keys.delete(e.code));
  function jump(p){if(p.y===floor&&p.stun<=0&&!p.attack&&!p.block){p.vy=-570;beep(p.id?550:740,.07,'triangle');}}
  function attack(p,type){
    if(state!=='fight'||p.attack||p.cool>0||p.stun>0||p.block)return;
    if(type==='special'&&p.energy<50)return;
    if(type==='special')p.energy-=50;
    p.attack={type,time:0,duration:type==='special'?.5:type==='kick'?.42:.28,hit:false};
    p.cool=type==='special'?.8:type==='kick'?.5:.32;
    if(type==='special'&&p.id===1){
      projectiles.push({x:p.x+p.face*42,y:p.y-p.h*.67,v:p.face*440,life:2.4,owner:p.id});beep(850,.2,'sine');
    }else beep(type==='special'?180:260,.07,'sawtooth');
  }
  function hit(p,damage,source,ice=false){
    if(p.hp<=0)return;
    const blocked=p.block&&p.y===floor&&p.face===Math.sign(source.x-p.x);
    p.hp=Math.max(0,p.hp-(blocked?damage*.18:damage));
    if(!blocked){p.stun=.19;p.vx=Math.sign(p.x-source.x)*150;p.slow=ice?1.6:p.slow;p.attack=null;}
    effects.push({x:p.x,y:p.y-p.h*.6,t:.3,color:blocked?'#f9f1be':ice?'#8ce8ff':'#ffdb93',blocked});
    beep(blocked?150:90,.12,'square',.03);
  }
  function ai(dt){
    const p=players[1],q=players[0],distance=Math.abs(p.x-q.x);
    p.block=false;let move=0;
    if(p.stun>0)return move;
    aiClock-=dt;
    if(q.attack&&distance<135&&Math.random()<.8)p.block=true;
    if(distance>112&&!p.attack)move=Math.sign(q.x-p.x);
    if(distance<60&&!p.attack)move=-Math.sign(q.x-p.x);
    if(aiClock<=0){
      aiClock=.3+Math.random()*.4;
      if(distance>155&&distance<470&&p.energy>=50&&Math.random()<.65)attack(p,'special');
      else if(distance<125&&!p.block)attack(p,Math.random()<.55?'punch':'kick');
      if(q.y<floor-45&&Math.random()<.28)jump(p);
    }
    return move;
  }
  function resolveRound(){
    if(state!=='fight')return;
    const [p,q]=players;
    const winner=p.hp===q.hp?-1:p.hp>q.hp?0:1;
    if(winner>=0)wins[winner]++;
    banner=winner<0?'¡EMPATE!':`${winner===0?'DASH':'FROZONO'} GANA EL ROUND`;
    state='roundEnd';countdown=2.6;keys.clear();beep(winner===0?620:440,.4,'triangle');
    announce(banner);
  }
  function update(dt){
    if(paused)return;clock+=dt;
    for(const e of effects)e.t-=dt;
    for(let i=effects.length-1;i>=0;i--)if(effects[i].t<=0)effects.splice(i,1);
    if(state==='countdown'){countdown-=dt;if(countdown<=0){state='fight';announce('¡A pelear!');beep(700,.15,'triangle');}return;}
    if(state==='roundEnd'){
      countdown-=dt;
      if(countdown<=0){
        if(wins.some(w=>w>=2)){state='matchEnd';banner=`${wins[0]>=2?'DASH':'FROZONO'} ES EL CAMPEÓN`;announce(`${banner}. Enter para la revancha.`);}
        else {if(players[0].hp!==players[1].hp)round++;startRound();}
      }return;
    }
    if(state!=='fight')return;
    timer=Math.max(0,timer-dt);
    const moves=[(keys.has('KeyD')?1:0)-(keys.has('KeyA')?1:0),0];
    players[0].block=keys.has('KeyS')&&players[0].y===floor&&!players[0].attack&&players[0].stun<=0;
    if(mode.value==='ai')moves[1]=ai(dt);
    else {moves[1]=(keys.has('ArrowRight')?1:0)-(keys.has('ArrowLeft')?1:0);players[1].block=keys.has('ArrowDown')&&players[1].y===floor&&!players[1].attack&&players[1].stun<=0;}
    for(let i=0;i<2;i++){
      const p=players[i],q=players[1-i];
      p.face=q.x>=p.x?1:-1;p.cool=Math.max(0,p.cool-dt);p.stun=Math.max(0,p.stun-dt);p.slow=Math.max(0,p.slow-dt);p.energy=Math.min(100,p.energy+12*dt);
      if(p.stun<=0){
        p.vx=(p.block||p.attack?0:moves[i])*(p.id===0?270:220)*(p.slow>0?.5:1);
        if(p.attack?.type==='special'&&p.id===0)p.vx=p.face*650;
      }
      p.x=Math.max(42,Math.min(918,p.x+p.vx*dt));p.walk+=Math.abs(p.vx)*dt*.035;
      if(p.y<floor||p.vy<0){p.vy+=1400*dt;p.y+=p.vy*dt;if(p.y>=floor){p.y=floor;p.vy=0;}}
      if(p.attack){
        const a=p.attack;a.time+=dt;
        const reach=a.type==='punch'?79:a.type==='kick'?114:100;
        const verticalOverlap=p.y>q.y-q.h&&p.y-p.h<q.y;
        if(!(a.type==='special'&&p.id===1)&&!a.hit&&a.time>=.07&&a.time<a.duration&&Math.abs(q.x-p.x)<reach&&verticalOverlap&&p.face===Math.sign(q.x-p.x)){
          a.hit=true;hit(q,a.type==='punch'?8:a.type==='kick'?13:22,p);
        }
        if(p.attack&&a.time>=a.duration)p.attack=null;
      }
    }
    // Keep grounded opponents from walking through one another.
    const [p,q]=players;const d=q.x-p.x;
    if(Math.abs(d)<46&&Math.abs(p.y-q.y)<65){
      const offset=(46-Math.abs(d))/2,sign=d>=0?1:-1;
      p.x=Math.max(42,Math.min(918,p.x-offset*sign));q.x=Math.max(42,Math.min(918,q.x+offset*sign));
    }
    for(let i=projectiles.length-1;i>=0;i--){
      const shot=projectiles[i];shot.x+=shot.v*dt;shot.life-=dt;const target=players[1-shot.owner];
      if(Math.abs(shot.x-target.x)<target.w/2+15&&shot.y>=target.y-target.h&&shot.y<=target.y){hit(target,18,{x:shot.x-Math.sign(shot.v)*30},true);projectiles.splice(i,1);}
      else if(shot.life<=0||shot.x<-30||shot.x>990)projectiles.splice(i,1);
    }
    if(timer<=0||players.some(p=>p.hp<=0))resolveRound();
  }
  function stage(){
    const sky=ctx.createLinearGradient(0,0,960,450);sky.addColorStop(0,'#35233f');sky.addColorStop(.5,'#1b2942');sky.addColorStop(1,'#175365');ctx.fillStyle=sky;ctx.fillRect(0,0,960,540);
    ctx.fillStyle='#94d9e533';ctx.beginPath();ctx.arc(780,175,48,0,7);ctx.fill();
    const heights=[120,165,100,220,148,185,110,204,158,130,215,144,188,126];
    for(let i=0;i<heights.length;i++){const x=i*74-10,h=heights[i];box(ctx,x,410-h,65,h,0,i%2?'#172236':'#202a40');for(let yy=430-h;yy<392;yy+=24)for(let xx=x+10;xx<x+58;xx+=17){if((xx+yy)%3!==0)box(ctx,xx,yy,6,9,0,i%3?'#79a1b02b':'#d5837944');}}
    for(const x of [85,870]){box(ctx,x,170,6,249,0,'#4b6678');box(ctx,x-22,170,50,7,3,'#aeceda');ctx.fillStyle='#a2ecff0d';ctx.beginPath();ctx.moveTo(x-20,177);ctx.lineTo(x-85,420);ctx.lineTo(x+90,420);ctx.lineTo(x+26,177);ctx.fill();}
    box(ctx,0,409,960,8,0,'#637889');box(ctx,0,417,960,28,0,'#344254');
    const ground=ctx.createLinearGradient(0,445,0,540);ground.addColorStop(0,'#3d5165');ground.addColorStop(1,'#172236');ctx.fillStyle=ground;ctx.fillRect(0,445,960,95);
    ctx.strokeStyle='#8fefff20';ctx.lineWidth=1;
    for(let x=-500;x<1600;x+=110){ctx.beginPath();ctx.moveTo(480+(x-480)*.5,445);ctx.lineTo(x,540);ctx.stroke();}
    for(const y of [463,490,527]){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(960,y);ctx.stroke();}
    text(ctx,'METROVILLE / ENTRENAMIENTO NOCTURNO',480,523,10,'#a5c5d088','center');
  }
  function drawFighter(p){
    ctx.save();ctx.translate(p.x,floor+3);ctx.scale(1,Math.max(.3,1-(floor-p.y)/400));ctx.fillStyle='#050d2180';ctx.beginPath();ctx.ellipse(0,0,p.id?38:32,8,0,0,7);ctx.fill();ctx.restore();
    if(p.attack?.type==='special'&&p.id===0){for(let i=3;i>0;i--){ctx.globalAlpha=.1+(3-i)*.06;drawBody(p,-p.face*i*25);}ctx.globalAlpha=1;}
    drawBody(p,0);
    if(p.slow>0){ctx.strokeStyle='#9aebff';ctx.lineWidth=2;ctx.beginPath();ctx.arc(p.x,p.y-p.h*.45,45,0,7);ctx.stroke();text(ctx,'HIELO',p.x,p.y-p.h-14,10,'#9aebff','center');}
  }
  function drawBody(p,offset){
    ctx.save();ctx.translate(p.x+offset,p.y);ctx.scale(p.face,1);
    const dash=p.id===0,attack=p.attack,phase=attack?Math.sin(Math.min(1,attack.time/attack.duration)*Math.PI):0;
    const h=p.h,headY=-h+17,torsoY=-h+36,hip=-31;
    const suit=dash?'#ec424a':'#b9f6fa',accent=dash?'#b72e45':'#55c8e3',skin=dash?'#f2b181':'#835439';
    if(p.stun>0)ctx.globalAlpha=.72+Math.sin(clock*90)*.2;
    const stride=Math.abs(p.vx)>10&&!attack&&p.y===floor?Math.sin(p.walk)*13:0;
    ctx.lineCap='round';ctx.lineJoin='round';
    function limb(points,color,width){ctx.strokeStyle=color;ctx.lineWidth=width;ctx.beginPath();ctx.moveTo(...points[0]);for(const point of points.slice(1))ctx.lineTo(...point);ctx.stroke();}
    // Legs and boots.
    limb([[-10,hip],[-14-stride,-16],[-18-stride,-6]],accent,dash?13:15);
    const kick=attack?.type==='kick'?phase:0;
    limb([[10,hip],[18+kick*31+stride,-18-kick*24],[21+kick*71+stride,-5-kick*34]],suit,dash?13:15);
    limb([[-21-stride,-5],[-10-stride,-5]],dash?'#1a2035':'#55c8e3',10);
    limb([[18+kick*71+stride,-4-kick*34],[30+kick*71+stride,-4-kick*34]],dash?'#1a2035':'#55c8e3',10);
    // Torso, belt and emblem.
    ctx.fillStyle=suit;ctx.beginPath();ctx.moveTo(-19,torsoY);ctx.lineTo(19,torsoY);ctx.lineTo(17,hip);ctx.lineTo(-17,hip);ctx.closePath();ctx.fill();
    box(ctx,-18,hip-5,36,7,2,dash?'#202336':'#62c9e3');
    if(dash){ctx.fillStyle='#1f2436';ctx.beginPath();ctx.arc(1,torsoY+15,10,0,7);ctx.fill();text(ctx,'i',1,torsoY+21,19,'#ffcd62','center','900');}
    else{ctx.fillStyle='#60cfe4';ctx.beginPath();ctx.moveTo(-19,torsoY);ctx.lineTo(0,torsoY+26);ctx.lineTo(19,torsoY);ctx.lineTo(13,torsoY-3);ctx.lineTo(0,torsoY+14);ctx.lineTo(-13,torsoY-3);ctx.fill();}
    const armY=torsoY+8,punch=attack&&(attack.type==='punch'||attack.type==='special')?phase:0;
    if(p.block){limb([[-16,armY],[-7,armY-11],[17,armY-16]],accent,11);limb([[16,armY],[28,armY-16],[23,headY+9]],suit,12);}
    else{limb([[-16,armY],[-25,armY+20],[-16,armY+30]],accent,11);limb([[16,armY],[30+punch*18,armY+13-punch*15],[25+punch*48,armY+27-punch*29]],suit,12);}
    const handX=p.block?23:25+punch*48,handY=p.block?headY+9:armY+27-punch*29;
    ctx.fillStyle=dash?skin:'#61cde6';ctx.beginPath();ctx.arc(handX,handY,7,0,7);ctx.fill();
    // Face and characteristic hair/visor.
    box(ctx,-6,torsoY-8,12,14,3,skin);
    ctx.fillStyle=skin;ctx.beginPath();ctx.ellipse(0,headY, dash?19:17,dash?21:24,0,0,7);ctx.fill();
    if(dash){ctx.fillStyle='#f2cd67';ctx.beginPath();ctx.moveTo(-19,headY-5);ctx.lineTo(-19,headY-21);ctx.lineTo(-8,headY-29);ctx.lineTo(1,headY-25);ctx.lineTo(15,headY-30);ctx.lineTo(22,headY-16);ctx.lineTo(17,headY-7);ctx.lineTo(6,headY-17);ctx.lineTo(-3,headY-12);ctx.lineTo(-12,headY-16);ctx.fill();box(ctx,-18,headY-6,37,11,3,'#192139');box(ctx,5,headY-3,8,4,1,'#f8f4e6');}
    else{ctx.fillStyle='#bff5fa';ctx.beginPath();ctx.moveTo(-18,headY-8);ctx.lineTo(-16,headY-26);ctx.quadraticCurveTo(0,headY-35,17,headY-23);ctx.lineTo(18,headY-10);ctx.lineTo(10,headY-16);ctx.lineTo(-10,headY-16);ctx.fill();box(ctx,-19,headY-7,39,12,4,'#61ddf5');box(ctx,-12,headY-4,26,4,2,'#d8fcff');}
    limb([[3,headY+13],[10,headY+12]],'#58362d',2);
    if(p.block){ctx.strokeStyle='#f5efb980';ctx.lineWidth=3;ctx.beginPath();ctx.arc(18,torsoY+5,32,-1.2,1.2);ctx.stroke();}
    ctx.restore();
  }
  function hud(){
    for(let i=0;i<2;i++){
      const p=players[i],x=i===0?35:580,accent=i===0?'#ff6172':'#8ae7f7';
      text(ctx,i===0?'DASH':'FROZONO',i===0?35:925,34,18,accent,i===0?'left':'right','900');
      text(ctx,i===0?'JUGADOR 1':mode.value==='ai'?'COMPUTADORA':'JUGADOR 2',i===0?35:925,49,9,'#b7c7db',i===0?'left':'right');
      box(ctx,x,58,345,23,4,'#0c1424');
      const health=p.hp/100*337;
      if(health>0)box(ctx,i===0?x+4:x+341-health,62,health,15,2,accent);
      box(ctx,x,88,345,5,2,'#0c1424');const power=p.energy/100*345;if(power>0)box(ctx,i===0?x:x+345-power,88,power,5,2,p.energy>=50?'#f5d883':'#859aad');
      for(let j=0;j<2;j++){ctx.fillStyle=wins[i]>j?accent:'#455066';ctx.beginPath();ctx.arc(i===0?43+j*19:917-j*19,109,5,0,7);ctx.fill();}
      text(ctx,`${Math.ceil(p.hp)} VIDA · ${Math.floor(p.energy)} ENERGÍA`,i===0?81:879,112,9,'#adb9ca',i===0?'left':'right');
    }
    box(ctx,415,15,130,87,10,'#0c1424bf');text(ctx,'ROUND '+round,480,35,10,'#bcc8da','center');text(ctx,String(Math.ceil(timer)).padStart(2,'0'),480,77,39,'#f3efe6','center','900');
  }
  function draw(){
    stage();for(const p of players)drawFighter(p);
    for(const shot of projectiles){ctx.save();ctx.translate(shot.x,shot.y);ctx.scale(Math.sign(shot.v),1);for(let i=0;i<4;i++)box(ctx,-15-i*9,-5+i%2*2,22,7,3,'#8ceaff55');ctx.fillStyle='#c9fbff';ctx.beginPath();ctx.moveTo(19,0);ctx.lineTo(0,-13);ctx.lineTo(-13,0);ctx.lineTo(0,13);ctx.fill();ctx.restore();}
    for(const e of effects){ctx.globalAlpha=e.t/.3;ctx.strokeStyle=e.color;ctx.lineWidth=3;for(let i=0;i<8;i++){const a=i*Math.PI/4,r=25*(1-e.t/.3);ctx.beginPath();ctx.moveTo(e.x+Math.cos(a)*r,e.y+Math.sin(a)*r);ctx.lineTo(e.x+Math.cos(a)*(r+12),e.y+Math.sin(a)*(r+12));ctx.stroke();}ctx.globalAlpha=1;}
    hud();
    if(state==='ready')overlay(ctx,'Velocidad vs. hielo','Dash contra Frozono. Gana dos rounds.','ENTER PARA PELEAR','#8fe6ee');
    if(state==='countdown'){box(ctx,310,197,340,91,13,'#101a2ad9');text(ctx,countdown>.7?`ROUND ${round}`:'¡A PELEAR!',480,255,35,countdown>.7?'#f5efe6':'#8fe6ee','center','900');}
    if(state==='roundEnd'){box(ctx,180,198,600,88,13,'#101a2ae6');text(ctx,banner,480,250,30,'#f5efe6','center','900');}
    if(state==='matchEnd')overlay(ctx,banner,`Marcador final: Dash ${wins[0]} — ${wins[1]} Frozono`,'ENTER PARA LA REVANCHA','#8fe6ee');
    if(paused)overlay(ctx,'Tiempo fuera','La arena te espera.','P O CONTINUAR PARA VOLVER','#8fe6ee');
  }
  function frame(now){const dt=Math.min((now-last)/1000||0,1/30);last=now;update(dt);draw();requestAnimationFrame(frame);}
  requestAnimationFrame(frame);
})();
