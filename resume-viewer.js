async function showResume(){
 const status=document.querySelector('#status');
 try{
  const pdfjs=await import('./assets/pdfjs/pdf.mjs');
  pdfjs.GlobalWorkerOptions.workerSrc=new URL('./assets/pdfjs/pdf.worker.mjs',location.href).href;
  const pdf=await pdfjs.getDocument({url:new URL('./assets/Monica-Liu-Resume.pdf',location.href).href,isEvalSupported:false}).promise;
  for(let n=1;n<=pdf.numPages;n++){
   const page=await pdf.getPage(n);
   const natural=page.getViewport({scale:1});
   const viewport=page.getViewport({scale:900/natural.width});
   const figure=document.createElement('figure');figure.className='pdf-page';
   const canvas=document.createElement('canvas');canvas.setAttribute('aria-label',`简历第 ${n} 页`);canvas.setAttribute('role','img');
   const ratio=Math.min(window.devicePixelRatio||1,2);
   canvas.width=Math.ceil(viewport.width*ratio);canvas.height=Math.ceil(viewport.height*ratio);
   figure.append(canvas);document.querySelector('#pages').append(figure);
   await page.render({canvasContext:canvas.getContext('2d'),viewport,transform:[ratio,0,0,ratio,0,0]}).promise;
   const text=await page.getTextContent();
   const description=document.createElement('figcaption');description.className='sr-only';description.textContent=text.items.map(item=>item.str||'').join(' ');figure.append(description);
  }
  status.textContent=`PDF 简历 · 共 ${pdf.numPages} 页`;
 }catch(error){
  status.textContent='预览暂时无法加载，请使用上方“打开 PDF 原文件”或“下载 PDF”。';
  console.error('Resume preview failed',error);
 }
}
showResume();
