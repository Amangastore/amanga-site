(function(){const p=(location.pathname.split('/').pop()||'index.html').toLowerCase();
document.querySelectorAll('.navlinks a').forEach(a=>{const h=a.getAttribute('href').toLowerCase();
if(h===p|| (p===''&&h==='index.html')) a.classList.add('active');});})();