
(function(){const p=(location.pathname.split('/').pop()||'index.html').toLowerCase();
document.querySelectorAll('.navlinks a').forEach(a=>{const h=a.getAttribute('href').toLowerCase();
if(h===p||(p===''&&h==='index.html')||(p==='index.html'&&(h==='index.html'||h==='./'))){a.classList.add('active');}});})();
