
const qs = [
  { q:"Which model family is most suitable for real-time edge detection?", a:["Faster R-CNN","YOLO"], c:1, e:"YOLO variants are designed for speed with competitive accuracy."},
  { q:"What hurts detection most in crowded scenes?", a:["Occlusion","Blue shirts"], c:0, e:"Occlusion reduces visible features and confuses detectors."},
  { q:"Best quick feedback modality for blind users?", a:["Long paragraphs","Short speech + haptics"], c:1, e:"Short speech and haptics communicate quickly and accessibly."},
  { q:"Edge vs Cloud: which reduces privacy risk?", a:["Edge","Cloud"], c:0, e:"On-device (edge) avoids uploading raw video."},
  { q:"Counting people from detections involves:", a:["Counting all boxes","Filtering class=='person' then counting"], c:1, e:"Filter detections by 'person' before counting."}
];
function render(){
  const c = document.getElementById('quiz'); const r=document.getElementById('result');
  qs.forEach((item,i)=>{
    const f=document.createElement('fieldset'); f.className='card';
    const l=document.createElement('legend'); l.textContent=`Q${i+1}. ${item.q}`; f.appendChild(l);
    item.a.forEach((opt,oi)=>{
      const id=`q${i}_o${oi}`; const lab=document.createElement('label'); lab.style.display='block'; lab.setAttribute('for',id);
      const inp=document.createElement('input'); inp.type='radio'; inp.name=`q${i}`; inp.id=id; inp.value=oi;
      lab.appendChild(inp); lab.append(` ${opt}`); f.appendChild(lab);
    });
    const exp=document.createElement('div'); exp.className='notice'; exp.hidden=true; exp.id=`exp${i}`; f.appendChild(exp);
    c.appendChild(f);
  });
  document.getElementById('submit').addEventListener('click',()=>{
    let score=0;
    qs.forEach((item,i)=>{
      const sel=document.querySelector(`input[name="q${i}"]:checked`);
      const exp=document.getElementById(`exp${i}`);
      if(!sel){exp.hidden=false;exp.className='notice';exp.textContent="Please select an answer.";return;}
      const ok=parseInt(sel.value,10)===item.c; score+= ok?1:0;
      exp.hidden=false; exp.className= ok?'notice success':'notice'; exp.textContent=(ok?'✅ Correct. ':'❌ Not quite. ')+item.e;
    });
    r.innerHTML=`<p class="card center">You scored <strong>${score}</strong> / ${qs.length}.</p>`;
    r.scrollIntoView({behavior:'smooth', block:'center'});
  });
}
document.addEventListener('DOMContentLoaded', render);
