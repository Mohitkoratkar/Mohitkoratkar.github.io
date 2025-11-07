// theme toggle & persistence
(function(){
  const btn = document.getElementById('themeToggle');
  const saved = localStorage.getItem('mk_theme');
  if(saved === 'light') document.documentElement.classList.add('light');

  if(btn) btn.addEventListener('click', ()=>{
    document.documentElement.classList.toggle('light');
    const theme = document.documentElement.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('mk_theme', theme);
    btn.setAttribute('aria-pressed', document.documentElement.classList.contains('light'));
  });
})();

// smooth scroll for same-page anchors (works across pages for hash links too)
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      const el = document.querySelector(href);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// fallback profile image
(function(){
  const img = document.querySelector('.frame img');
  if(!img) return;
  img.onerror = function(){
    this.src = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000"><rect fill="#111" width="100%" height="100%"/><text x="50%" y="50%" fill="#888" font-family="Inter,Arial" font-size="28" text-anchor="middle" dominant-baseline="middle">Profile image</text></svg>'
    );
  };
})();
