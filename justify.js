/* Justified picture rows for the home page and collection pages.
   Flickr's justified-layout (vendor/justified-layout-4.1.0.min.js, MIT) works out every picture's size so each keeps
   its real shape and the rows run edge to edge. This file only places the cards it returns, and makes room under
   each row for the tallest title in it, since titles wrap instead of being cut. */
(function(){
  var layout=require('justified-layout');

  function justify(grid){
    if(!grid) return;
    var cards=[].slice.call(grid.children).filter(function(c){ return !c.hidden; });
    grid.classList.add('ready');
    var W=grid.clientWidth; if(!W) return;
    var g=layout(cards.map(function(c){ return {width:+c.dataset.w||520, height:+c.dataset.h||768}; }),
      {containerWidth:W, containerPadding:0, boxSpacing:{horizontal:16, vertical:0},
       targetRowHeight:W<600?170:250, targetRowHeightTolerance:0.25});
    cards.forEach(function(c,i){
      var b=g.boxes[i]; c.style.width=b.width+'px';
      var t=c.querySelector('.thumbwrap'); if(t) t.style.height=b.height+'px';
    });
    var rows={};
    g.boxes.forEach(function(b,i){ (rows[b.top]=rows[b.top]||[]).push(i); });
    var y=0;
    Object.keys(rows).map(Number).sort(function(a,b){ return a-b; }).forEach(function(top){
      var h=0;
      rows[top].forEach(function(i){ h=Math.max(h,cards[i].offsetHeight); });
      rows[top].forEach(function(i){ cards[i].style.left=g.boxes[i].left+'px'; cards[i].style.top=y+'px'; });
      y+=h+28;
    });
    grid.style.height=y+'px';
  }

  function all(){ [].forEach.call(document.querySelectorAll('.jgrid'),justify); }
  var t; window.addEventListener('resize',function(){ clearTimeout(t); t=setTimeout(all,120); });
  window.justify=justify;
  all();
})();
