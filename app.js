const spread=document.querySelector('#spread');
const home=()=>`<section class="sheet left" data-number="01"><p class="eyebrow">A LITTLE ABOUT ME</p><figure class="paper-photo"><img src="assets/fashion-cover.png" alt="时尚日记项目资料中的服装店画面"><figcaption>a little world of fashion</figcaption><span class="photo-tag">我的项目剪贴</span></figure><div class="note"><p class="note-title">Hi，我是大花。</p><ul class="quickfacts"><li><b>坐标</b>上海</li><li><b>经历</b>6 年产品与游戏策划</li><li><b>关注</b><span>C端用户体验、女性成长、AI、跨境出海</span></li><li><b>教育</b>天津师范大学 · 计算机本科</li></ul></div><div class="ink-links"><a href="assets/Monica-Liu-Resume.pdf" target="_blank" rel="noopener">阅读简历 ↗</a><a href="https://www.xiaohongshu.com/user/profile/5bba2fd06b58b7085597ae5b" target="_blank" rel="noopener">我的小红书 ↗</a></div></section><section class="sheet right" data-number="02"><p class="intro-label">Hello, curious minds.</p><h1>读懂女性需求，<br>用<em>游戏化设计</em><br>推动增长。</h1><p class="intro-body">我擅长发掘 C 端用户的真实需求，尤其关注女性在穿搭、消费与自我表达中的体验。</p><p class="intro-body">结合游戏化设计，把需求转化为让用户愿意参与、持续使用并做出购买选择的产品。</p><div class="home-keywords"><span>跨境电商</span><span>游戏化设计</span><span>AI Agent 产品</span></div><div class="stamp">STAY CURIOUS · KEEP MAKING</div></section>`;
const xhs='https://www.xiaohongshu.com/user/profile/5bba2fd06b58b7085597ae5b';
const sheet=(side,n,body)=>`<section class="sheet ${side}" data-number="${String(n).padStart(2,'0')}">${body}</section>`;
const title=(cn,en)=>`<h2 class="page-title">${cn}<small>${en}</small></h2>`;
const entry=(date,name,role,description,tag='')=>`<article class="timeline-entry"><p class="entry-date">${date}${tag?`<span>${tag}</span>`:''}</p><h3>${name}</h3><p class="entry-role">${role}</p><p>${description}</p></article>`;
const recent=()=>sheet('left',3,`<p class="eyebrow">THE THINGS I HAVE BUILT</p>${title('最近的探索','Work & independent ventures')}${entry('2026.05 — 2026.09','Macaron','用户增长运营负责人','玄学场景 Skill 搭建、A2UI 效果调试，以及用户触达流程的 Agent 化。')}<div class="pencil-metrics"><span><b>3,000</b>一周场景新增用户</span><span><b>200</b>首批种子用户</span></div><button class="text-button" data-detail="macaron">查看 Macaron 塔罗牌 Skill ↗</button>${entry('2026.07 — 2026.09','福帛通','vibe coding 开发 + 运营','把线上委托、道观服务、视频回传与实物邮寄连接起来。','创业')}<p class="margin-note">首月自然流 685 人 · 累计付费近 400 元</p>`)+sheet('right',4,`<p class="eyebrow">A SMALL FASHION WORLD</p>${title('做过一间服装店','Fashion Diary / 2025')}${entry('2025.03 — 2025.10','时尚日记','系统策划 · 创业项目','把模拟经营、换装与二合玩法放在一起，让玩家经营自己的服装店。')}<div class="scrap-image"><img src="assets/fashion-shop.png" alt="时尚日记服装店经营画面"><span>从一间小店开始</span></div><div class="result-line"><strong>3,000+</strong><span>累计用户</span><strong>¥50</strong><span>日均营收</span></div><p class="small-copy">9 月底上线，后因成本与资金问题关停。一次真实的产品落地，也是一段关于经营取舍的经历。</p><button class="text-button" data-detail="fashion">打开项目笔记 ↗</button>`);
const earlier=()=>sheet('left',5,`<p class="eyebrow">CROSS-BORDER COMMERCE</p>${title('让体验适应本地生活','Pinduoduo / Temu') }<p class="entry-date">2022.11 — 2024.12</p><h3 class="role-heading">用户增长 C 端产品经理</h3><div class="pencil-metrics"><span><b>40</b>新国家从 0 到 1</span><span><b>10 人</b>中东 / 拉美产运团队</span></div><div class="ruled-list"><article><b>从 0 到 1 开站</b><p>统筹市场调研与支付、物流、税务等落地，推进欧盟、日韩和中东市场上线。</p></article><article><b>服装与消费体验</b><p>阿语 RTL、穆斯林服饰、货到付款，以及拉美地址、免税信息和先用后付。</p></article><article><b>游戏化与 AI</b><p>电商小游戏带动活跃与交易；从 0 到 1 设计图生商详、主图优化与图生视频工具。</p></article></div><button class="text-button" data-detail="temu">阅读产品笔记 ↗</button>`)+sheet('right',6,`<p class="eyebrow">WHERE THE PLAYFULNESS BEGAN</p>${title('游戏，是我的起点','A background in play')}${entry('2021.10 — 2022.11','腾讯 · 天涯明月刀手游','游戏活动兼文案策划','设计节日与品牌联动玩法，参与美团外卖、Moody 美瞳、Coco 奶茶等合作。')}${entry('2020.07 — 2021.09','网易 · 绿茵信仰','游戏系统策划','设计并落地新手引导、关卡、NPC 对话和日常任务系统。')}<div class="education-note"><span>EDUCATION</span><h3>天津师范大学</h3><p>计算机科学与技术 · 本科</p></div><p class="handwritten-note">让目标变得清晰，<br>让参与多一点乐趣。</p>`);
const projectData={
 fashion:{n:'01',name:'时尚日记',kind:'女性向游戏 / 系统策划',summary:'一家由玩家经营的服装店，连接换装、模拟经营与二合玩法。',image:'assets/fashion-shop.png',alt:'时尚日记服装店画面',numbers:'3,000+ 累计用户 · ¥50 日均营收',caption:'DRESS UP. MERGE. GROW.'},
 temu:{n:'02',name:'Temu',kind:'跨境电商 / 用户增长',summary:'从新国家开站到本地消费体验，让跨境购物适应真实生活。',numbers:'40 个国家 · 10 人产运团队',caption:'LOCAL CONTEXT, BETTER EXPERIENCE'},
 ritual:{n:'03',name:'福帛通',kind:'vibe coding 开发 + 运营',summary:'线上委托与线下履约之间，加入可见的服务反馈和 AI 咨询。',image:'assets/ritual-poster.jpg',alt:'道教小程序线上仪式界面',numbers:'首月自然流 685 人 · 累计付费近 ¥400',caption:'FROM A WISH TO A SERVICE'},
 macaron:{n:'04',name:'Macaron 塔罗牌 Skill',kind:'Skill 搭建 / A2UI 效果调试',summary:'将塔罗牌工具融入 AI 对话，让牌阵、正逆位与解读清晰呈现。',image:'assets/macaron-tarot.jpg',alt:'Macaron 塔罗牌 Skill 实际产品截图',numbers:'Skill × A2UI · 真实产品截图',caption:'FROM CHAT TO INTERFACE'}
};
let chosenProject='fashion';
function previewMarkup(key){const p=projectData[key];return `<p class="eyebrow">${p.caption}</p><div class="project-preview ${key}">${p.image?`<button class="preview-image-button" data-detail="${key}" aria-label="查看${p.name}项目"><img src="${p.image}" alt="${p.alt}"></button>`:`<div class="temu-note"><span>FIELD NOTES</span><b>40</b><p>个国家，从 0 到 1</p><div>中东 · 拉美 · 欧盟 · 日韩</div></div>`}</div><h3 class="preview-title">${p.name}</h3><p class="preview-summary">${p.summary}</p><p class="project-numbers">${p.numbers}</p><button class="text-button" data-detail="${key}">翻开这份作品 ↗</button>`;}
const projects=()=>sheet('left',7,`<p class="eyebrow">SELECTED WORK / 2022 — 2026</p>${title('作品剪贴簿','A few things I care about')}<p class="section-intro">从一间服装店，到跨境消费，<br>再到 AI 与真实服务。</p><div class="project-list">${Object.entries(projectData).map(([k,p])=>`<button class="project-item ${k===chosenProject?'selected':''}" data-project="${k}" aria-pressed="${k===chosenProject}"><span class="project-no">${p.n}</span><span><strong>${p.name}</strong><small>${p.kind}</small></span><span class="project-arrow" aria-hidden="true">↗</span></button>`).join('')}</div><p class="margin-note">选一张卡片，看看背后的产品故事。</p>`)+sheet('right',8,`<div id="project-preview-content">${previewMarkup(chosenProject)}</div>`);
const contact=()=>sheet('left',9,`<p class="eyebrow">A NOTE TO YOU</p>${title('嗨，很高兴认识你。','A curious mind, a maker at heart.')}<div class="contact-letter"><p class="letter-body">我是大花，一个脑洞很多、也喜欢把问题拆开解决的 INTJ。擅长本地化调研，喜欢观察不同地方的人怎样生活、怎样做选择。</p><p class="letter-body">从游戏、跨境电商到 AI 应用，我一直好奇：人们真正需要什么？一个产品，又凭什么让人愿意留下来？</p><p class="letter-body">科技爱好者，AI 重度用户。想法可以天马行空，也想亲手把它们做出来。我相信科技和审美能改变未来。</p><p class="letter-body">希望一直保有这份好奇，和优秀的团队一起成长，做出有趣、有意义、能给人带来正向影响的产品。如果你也在做这样的事，来聊聊呀。</p></div><p class="signature">大花 / Monica</p>`)+sheet('right',10,`<p class="eyebrow">KEEP IN TOUCH</p>${title('来聊聊吧。','Good things start with a hello.')}<div class="contact-directory"><div class="contact-card"><span>手机号 / PHONE</span><p class="contact-value">13012248198</p></div><div class="contact-card"><span>邮箱 / EMAIL</span><p class="contact-value">lxhcrystal233@163.com</p></div><div class="contact-card"><span>微信 / WECHAT</span><p class="contact-value">zxnlxh</p></div><div class="contact-card"><span>小红书 / XIAOHONGSHU</span><a href="${xhs}" target="_blank" rel="noopener">我的小红书主页 ↗</a></div></div><div class="resume-note contact-resume"><h3>也可以带走我的简历</h3><a class="solid-link" href="assets/Monica-Liu-Resume.pdf" download="刘大花-跨境C端产品-单页简历.pdf">下载 PDF 简历 ↓</a></div><button class="text-button" data-go="home">再翻回第一页 ↶</button>`);
const pages=[{chapter:'home',label:'关于我',render:home},{chapter:'journey',label:'履历 · 最近的探索',render:recent},{chapter:'journey',label:'履历 · 游戏与跨境',render:earlier},{chapter:'projects',label:'作品剪贴簿',render:projects},{chapter:'contact',label:'联系',render:contact}];
const chapterStart={home:0,journey:1,projects:3,contact:4};
const book=document.querySelector('#book'),prev=document.querySelector('#previous'),next=document.querySelector('#next'),dialog=document.querySelector('#detail-dialog'),imageDialog=document.querySelector('#image-dialog');
let current=0,mobileSide=0,busy=false,pendingNavigation=null,activeDestination=null;
const mobile=()=>matchMedia('(max-width:760px)').matches;
const prefersReduced=()=>matchMedia('(prefers-reduced-motion:reduce)').matches;
function stateUpdate(){
 const p=pages[current];
 spread.setAttribute('aria-label',p.label);
 document.querySelectorAll('[data-tab]').forEach(b=>{b.setAttribute('aria-selected',String(b.dataset.tab===p.chapter));b.tabIndex=b.dataset.tab===p.chapter?0:-1;});
 document.querySelectorAll('.sheet').forEach((s,i)=>s.classList.toggle('mobile-hidden',mobile()&&i!==mobileSide));
 const atStart=current===0&&(!mobile()||mobileSide===0),atEnd=current===pages.length-1&&(!mobile()||mobileSide===1);
 prev.disabled=atStart;next.disabled=atEnd;document.querySelector('.corner-left').disabled=atStart;document.querySelector('.corner-right').disabled=atEnd;
 document.querySelector('#chapter-label').textContent=p.label;
 document.querySelector('#page-number').textContent=mobile()?`${String(current*2+mobileSide+1).padStart(2,'0')} / ${pages.length*2}`:`${String(current+1).padStart(2,'0')} / ${String(pages.length).padStart(2,'0')}`;
 document.querySelector('#announcer').textContent=`${p.label}，第 ${current+1} 组页面${mobile()?(mobileSide===0?'，左页':'，右页'):''}`;
}
function render(){spread.innerHTML=pages[current].render();stateUpdate();}
const imageReadiness=new Map();
function preparePage(markup){
 const template=document.createElement('template');template.innerHTML=markup;
 return Promise.allSettled([...template.content.querySelectorAll('img')].map(img=>{
  const src=img.getAttribute('src');
  if(!imageReadiness.has(src)){
   const image=new Image();image.src=src;
   imageReadiness.set(src,image.decode().catch(()=>{}));
  }
  return imageReadiness.get(src);
 }));
}
async function navigate(index,{flip=false,direction=1,side=0,hash=true}={}){
 if(index<0||index>=pages.length)return;
 const options={flip,direction,side,hash};
 if(busy){pendingNavigation={index,options};return;}
 if(index===current&&(!mobile()||side===mobileSide))return;
 busy=true;activeDestination={index,side};
 clearTimeout(previewTimer);
 const animations=[];
 const turnLayer=document.querySelector('.page-turn');
 const change=markup=>{
  current=index;mobileSide=side;spread.innerHTML=markup;stateUpdate();
  if(hash)history.replaceState(null,'','#'+pages[current].chapter);
  if(mobile())window.scrollTo({top:0,behavior:'instant'});
 };
 const animate=(element,frames,duration)=>{
  const animation=element.animate(frames,{duration,easing:'cubic-bezier(.25,.1,.25,1)',fill:'both'});
  animations.push(animation);return animation;
 };
 try{
  const markup=pages[index].render();
  await preparePage(markup);
  if(prefersReduced()){change(markup);return;}
  const duration=flip?640:400;
  if(flip){
   turnLayer.style.display='block';
   const start=direction>0?0:-180,end=direction>0?-180:0;
   animate(turnLayer,[
    {transform:`rotateY(${start}deg)`,opacity:0,offset:0},
    {transform:`rotateY(${start+(end-start)*.12}deg)`,opacity:.88,offset:.18},
    {transform:`rotateY(${start+(end-start)*.88}deg)`,opacity:.88,offset:.82},
    {transform:`rotateY(${end}deg)`,opacity:0,offset:1}
   ],duration);
  }
  const exit=animate(spread,[{opacity:1},{opacity:0}],flip?190:140);
  await exit.finished;
  // Keep the old page fully transparent while replacing its content.
  change(markup);
  const enter=animate(spread,[{opacity:0},{opacity:1}],flip?450:260);
  await Promise.all(animations.map(animation=>animation.finished));
 }finally{
  // Hide the paper before releasing the final animation frame.
  turnLayer.style.display='none';
  animations.forEach(animation=>animation.cancel());
  busy=false;activeDestination=null;
  const pending=pendingNavigation;pendingNavigation=null;
  if(pending)requestAnimationFrame(()=>navigate(pending.index,pending.options));
 }
}
function turn(direction){
 let idx=pendingNavigation?.index??activeDestination?.index??current;
 let side=pendingNavigation?.options.side??activeDestination?.side??mobileSide;
 if(mobile()){side+=direction;if(side>1){idx++;side=0;}if(side<0){idx--;side=1;}}
 else idx+=direction;
 navigate(idx,{flip:true,direction,side});
}
prev.addEventListener('click',()=>turn(-1));next.addEventListener('click',()=>turn(1));
document.querySelector('.corner-left').addEventListener('click',()=>turn(-1));document.querySelector('.corner-right').addEventListener('click',()=>turn(1));
document.querySelectorAll('[data-tab]').forEach(b=>{b.id='tab-'+b.dataset.tab;b.addEventListener('click',()=>navigate(chapterStart[b.dataset.tab]));b.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();e.stopPropagation();const tabs=[...document.querySelectorAll('[data-tab]')],i=tabs.indexOf(b);const target=e.key==='Home'?0:e.key==='End'?tabs.length-1:(i+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;tabs[target].focus();navigate(chapterStart[tabs[target].dataset.tab]);});});
document.querySelector('.brand').addEventListener('click',e=>{e.preventDefault();navigate(0);});
document.addEventListener('keydown',e=>{if(dialog.open||imageDialog.open||e.target.closest('button,a,input,textarea,select,video,[contenteditable]')||e.ctrlKey||e.metaKey||e.altKey)return;if(e.key==='ArrowRight'){e.preventDefault();turn(1);}if(e.key==='ArrowLeft'){e.preventDefault();turn(-1);}});
let touch=null;
book.addEventListener('touchstart',e=>{if(e.target.closest('button,a,video,input')){touch=null;return;}touch={x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY};},{passive:true});
book.addEventListener('touchend',e=>{if(!touch)return;const dx=e.changedTouches[0].clientX-touch.x,dy=e.changedTouches[0].clientY-touch.y;touch=null;if(mobile()&&Math.abs(dx)>65&&Math.abs(dx)>Math.abs(dy)*1.5)turn(dx<0?1:-1);},{passive:true});
matchMedia('(max-width:760px)').addEventListener('change',()=>{mobileSide=0;stateUpdate();});
window.addEventListener('hashchange',()=>{const key=location.hash.slice(1);if(key==='ai'){chosenProject='macaron';navigate(chapterStart.projects);return;}if(key in chapterStart)navigate(chapterStart[key],{hash:false});});
function selectProject(key){if(!(key in projectData)||key===chosenProject)return;chosenProject=key;document.querySelectorAll('[data-project]').forEach(b=>{b.classList.toggle('selected',b.dataset.project===key);b.setAttribute('aria-pressed',String(b.dataset.project===key));});document.querySelector('#project-preview-content').innerHTML=previewMarkup(key);}
let previewTimer;
spread.addEventListener('pointerover',e=>{const p=e.target.closest('[data-project]');clearTimeout(previewTimer);if(p&&e.pointerType==='mouse')previewTimer=setTimeout(()=>selectProject(p.dataset.project),140);});
spread.addEventListener('pointerleave',()=>clearTimeout(previewTimer));
spread.addEventListener('focusin',e=>{const p=e.target.closest('[data-project]');if(p)selectProject(p.dataset.project);});
spread.addEventListener('click',e=>{const p=e.target.closest('[data-project]');if(p){clearTimeout(previewTimer);selectProject(p.dataset.project);openDetail(p.dataset.project);}const g=e.target.closest('[data-go]');if(g)navigate(chapterStart[g.dataset.go]);});
const galleryImage=(src,caption)=>`<button class="gallery-image" data-image="assets/${src}" data-caption="${caption}"><img src="assets/${src}" alt="${caption}" loading="lazy"><span>${caption} ↗</span></button>`;
const detailContent={
 macaron:()=>`<p class="eyebrow">CASE 04 / MACARON</p><h2 id="dialog-title">Macaron 塔罗牌 Skill</h2><p class="detail-deck">玄学场景 Skill 搭建 · A2UI 效果调试</p><div class="detail-columns"><section><h3>让解读，变得可见</h3><p>我负责 Macaron 玄学场景的 Skill 搭建与 A2UI 效果调试，做出塔罗牌等场景小工具，将可视化结果融入 AI 对话。</p><h3>我的工作</h3><div class="ai-process"><article><span>01</span><div><h3>组织场景 Skill</h3><p>围绕用户的具体问题，搭建玄学场景 Skill。</p></div></article><article><span>02</span><div><h3>调试 A2UI 表达</h3><p>呈现牌阵、牌名、正逆位、关键词和综合解读，建立清晰的阅读层次。</p></div></article><article><span>03</span><div><h3>落地塔罗牌小工具</h3><p>在对话中展示“过去、现在、未来”三张牌，帮助用户对照牌面阅读结果。</p></div></article></div></section><section><button class="macaron-screenshot" data-image="assets/macaron-tarot.jpg" data-caption="Macaron 塔罗牌 Skill · 原始产品截图" aria-label="放大 Macaron 塔罗牌 Skill 截图"><img src="assets/macaron-tarot.jpg" alt="Macaron 对话中的三张塔罗牌、正逆位、关键词与综合解读"></button><p class="image-footnote">真实产品截图 · 点击查看完整界面</p></section></div>`,
 fashion:()=>`<p class="eyebrow">CASE 01 / FASHION DIARY</p><h2 id="dialog-title">经营一家自己的服装店</h2><p class="detail-deck">时尚日记 · 女性向微信小游戏 · 系统策划</p><div class="detail-stats"><span><strong>3,000+</strong>累计用户</span><span><strong>¥50</strong>日均营收</span><span><strong>9 月底</strong>项目上线</span></div><div class="detail-columns"><section><h3>产品与我的角色</h3><p>我在创业项目中担任系统策划。产品围绕服装店经营，融合模拟经营、换装和二合玩法，让服装进入获取、搭配、展示和销售的过程。</p><h3>玩法如何连在一起</h3><p>二合玩法补充经营等待期的互动，并提供成长资源。模特换装与秀场关卡让服装收集拥有额外目标；经营收益再支持店铺成长。</p><h3>实际结果</h3><p>项目上线后累计用户 3,000+，日均营收约 50 元，后因成本与资金问题关停。</p></section><section class="outfit-section"><h3>一页穿搭剪贴</h3><p class="small-copy">切换造型，查看项目资料中的服装。此处为作品展示交互。</p><div class="outfit-display"><img id="outfit-image" src="assets/look-blue.png" alt="蓝色礼服造型"></div><div class="look-tabs" role="group" aria-label="切换服装造型"><button data-look="blue" aria-pressed="true">蓝色礼服</button><button data-look="red" aria-pressed="false">红色短裙</button><button data-look="black" aria-pressed="false">黑白日常</button></div></section></div><h3>项目画面</h3><div class="gallery">${galleryImage('fashion-shop.png','服装店经营')}${galleryImage('fashion-merge.png','二合玩法')}${galleryImage('fashion-dress.png','模特换装')}</div><p class="detail-source">素材来自本人提供的项目介绍 PPT，按项目资料展示。</p>`,
 temu:()=>`<p class="eyebrow">CASE 02 / CROSS-BORDER COMMERCE</p><h2 id="dialog-title">让跨境购物适应本地生活</h2><p class="detail-deck">拼多多 / Temu · 用户增长 C 端产品经理 · 2022.11 - 2024.12</p><div class="detail-stats"><span><strong>40</strong>新国家开站</span><span><strong>10 人</strong>中东 / 拉美产运团队</span><span><strong>300+</strong>穆斯林服饰月上新</span></div><div class="detail-columns"><section><h3>推进从 0 到 1 开站</h3><p>调研各国跨境电商市场、客单价、选品及物流仓储，与各部门推进支付、海关准入、税务和合规落地，评估市场与开站顺序。3 个月覆盖欧盟和日韩，1 个月推进中东开站。</p><h3>中东：语言、服装与履约</h3><p>推进阿语 RTL 全站适配，货到付款履约率提升 15%；推动穆斯林服饰月上新 300+，改善本地服装消费体验。</p><h3>拉美：降低下单与收货阻力</h3><p>优化地址表单和地址库，妥投提升 5%；免税信息展示 A/B 实验带来 GMV 提升 8%；强化先用后付带来转化提升 3%。</p></section><section><h3>游戏化设计与增长</h3><p>在 ROI &gt; 1.2 的前提下，以电商 GMV 为目标负责自研小游戏。多多果园打地鼠玩法高峰贡献场景增量 GMV 150 万元；多多斗地主春节锦标赛当月贡献场景增量 GMV 200 万元，DAU 较上月增长 15%。</p><h3>AI 商家工具</h3><p>从 0 到 1 设计随手拍图生商详、商品主图优化和图生视频工具。</p><div class="note"><p class="note-title">我的工作重心</p><p>从本地消费场景出发，把语言、服装、支付和物流的问题转化为具体产品动作。</p></div></section></div><p class="detail-source">案例依据本人履历复盘；百分比沿用原简历口径。此页不展示或模拟公司内部后台。</p>`,
 ritual:()=>`<p class="eyebrow">CASE 03 / AI & REAL-WORLD SERVICES</p><h2 id="dialog-title">让一次委托，有可见的反馈</h2><p class="detail-deck">福帛通 · 道教文化 AI 服务微信小程序 · vibe coding 开发 + 运营</p><div class="detail-stats"><span><strong>685</strong>首月自然流累计用户</span><span><strong>12</strong>当前 DAU</span><span><strong>近 ¥400</strong>累计付费金额</span></div><div class="detail-columns"><section><h3>服务链路</h3><ol class="service-steps"><li>用户在线选择服务并下单</li><li>订单交给道观，师傅实际烧香</li><li>回传服务视频，邮寄相关产品</li></ol><h3>AI 场景</h3><p>引入奇门遁甲等道教知识，提供 AI 咨询和排盘能力。这里展示实际产品界面与服务流程。</p><h3>阶段性结果</h3><p>运营首月自然流累计用户 685 人，当前 DAU 12 人，累计付费金额接近 400 元。</p></section><section><video controls playsinline preload="metadata" poster="assets/ritual-poster.jpg"><source src="assets/ritual-demo.mp4" type="video/mp4">当前浏览器不支持视频，请使用支持 MP4 的浏览器。</video><p class="image-footnote">小程序实际演示 · 约 1 分钟</p></section></div><h3>委托流程中的界面</h3><div class="gallery two">${galleryImage('ritual-intent.jpg','选择委托意图')}${galleryImage('ritual-service.jpg','服务规格与交付信息')}</div><p class="detail-source">本页为个人作品展示，不提供实际祈福服务或算命咨询。</p>`
};
function openDetail(key){if(!detailContent[key])return;document.querySelector('#dialog-content').innerHTML=detailContent[key]();dialog.showModal();dialog.scrollTop=0;dialog.querySelector('.dialog-close').focus();}
document.addEventListener('click',e=>{const d=e.target.closest('[data-detail]');if(d)openDetail(d.dataset.detail);const image=e.target.closest('[data-image]');if(image){const large=document.querySelector('#large-image');large.src=image.dataset.image;large.alt=image.dataset.caption||'';document.querySelector('#image-caption').textContent=image.dataset.caption||'';imageDialog.showModal();}const look=e.target.closest('[data-look]');if(look){const im=document.querySelector('#outfit-image');im.src=`assets/look-${look.dataset.look}.png`;im.alt=look.textContent;document.querySelectorAll('[data-look]').forEach(b=>b.setAttribute('aria-pressed',String(b===look)));}});
[dialog,imageDialog].forEach(d=>{d.querySelector('.dialog-close').addEventListener('click',()=>d.close());d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();}});d.addEventListener('close',()=>{d.querySelectorAll('video').forEach(v=>v.pause());});});
const startHash=location.hash.slice(1);if(startHash==='ai'){chosenProject='macaron';current=chapterStart.projects;history.replaceState(null,'','#projects');}else if(startHash in chapterStart)current=chapterStart[startHash];render();
