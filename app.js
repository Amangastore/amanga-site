
(function(){
  const page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.navlinks a').forEach(a=>{
    const h = a.getAttribute('href').toLowerCase();
    if ((h==='./' && (page===''||page==='index.html')) || h===page) a.classList.add('active');
  });
})();
