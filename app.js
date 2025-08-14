(function(){
  const page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.navlinks a').forEach(a=>{
    const href = a.getAttribute('href').toLowerCase();
    if (href === page || (page === '' && href === 'index.html') || (page==='index.html' && (href==='index.html'||href==='./'))) {
      a.classList.add('active');
    }
  });
})();