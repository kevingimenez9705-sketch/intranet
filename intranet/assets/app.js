// Lógica compartida por todas las páginas de la intranet UNO.
// Cada página sólo tiene los contenedores que le corresponden;
// las funciones de render chequean su existencia antes de dibujar nada.

function el(html){
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstChild;
}

function renderFilters(container, cats, onChange){
  if(!container) return;
  container.innerHTML = '';
  cats.forEach((c, idx) => {
    const btn = el(`<button class="${idx === 0 ? 'active' : ''}">${c}</button>`);
    btn.addEventListener('click', () => {
      container.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      onChange(c);
    });
    container.appendChild(btn);
  });
}

function renderHome(){
  const wrap = document.getElementById('homeTiles');
  if(!wrap) return;
  wrap.innerHTML = '';
  HOME_TILES.forEach(t => {
    wrap.appendChild(el(`
      <a class="card tile" href="${t.href}">
        <div class="icon">${t.icon}</div>
        <div class="t-title">${t.title}</div>
        <div class="t-desc">${t.desc}</div>
        <div class="arrow">→</div>
      </a>`));
  });
}

function renderComunicados(filter = 'TODOS'){
  const list = document.getElementById('comList');
  if(!list) return;
  list.innerHTML = '';
  COMUNICADOS.filter(c => filter === 'TODOS' || c.cat === filter).forEach(c => {
    list.appendChild(el(`
      <div class="list-row">
        <div class="tag">${c.cat}</div>
        <div class="list-body">
          <div class="lt">${c.title}</div>
          <div class="ld">${c.desc}</div>
        </div>
        <div class="list-date">${c.date}</div>
      </div>`));
  });
}

function renderDirectorio(filter = 'TODOS', query = ''){
  const grid = document.getElementById('dirGrid');
  if(!grid) return;
  const q = query.trim().toLowerCase();
  grid.innerHTML = '';
  DIRECTORIO
    .filter(p => filter === 'TODOS' || p.cat === filter)
    .filter(p => !q || p.n.toLowerCase().includes(q))
    .forEach(p => {
      grid.appendChild(el(`
        <div class="card person-card">
          <div class="circle">${p.i}</div>
          <div class="p-name">${p.n}</div>
          <div class="p-role">${p.r}</div>
          <div class="p-tag">${p.t}</div>
        </div>`));
    });
}

function renderIngresos(){
  const badge = document.getElementById('ingresosCount');
  const wrap = document.getElementById('ingresosList');
  if(!wrap) return;
  if(badge) badge.textContent = INGRESOS.length + ' NUEVOS';
  wrap.innerHTML = '';
  INGRESOS.forEach(m => {
    wrap.appendChild(el(`
      <div class="mov-row">
        <div class="circle">${m.i}</div>
        <div><div class="mv-name">${m.n}</div><div class="mv-sub">${m.r}</div></div>
        <div class="mv-date">${m.d}</div>
      </div>`));
  });
}

function renderEgresos(){
  const badge = document.getElementById('egresosCount');
  const wrap = document.getElementById('egresosList');
  if(!wrap) return;
  if(badge) badge.textContent = EGRESOS.length + ' BAJAS';
  wrap.innerHTML = '';
  EGRESOS.forEach(m => {
    wrap.appendChild(el(`
      <div class="mov-row out">
        <div class="circle">${m.i}</div>
        <div><div class="mv-name">${m.n}</div><div class="mv-sub">${m.r}</div></div>
        <div class="mv-date">${m.d}</div>
      </div>`));
  });
}

function renderAniversarios(){
  const grid = document.getElementById('annivGrid');
  if(!grid) return;
  grid.innerHTML = '';
  ANIVERSARIOS.forEach(a => {
    grid.appendChild(el(`
      <div class="card anniv-card">
        <div class="circle">${a.i}</div>
        <div><div class="a-name">${a.n}</div><div class="a-sub">${a.s}</div></div>
      </div>`));
  });
}

function renderCumpleanos(){
  const grid = document.getElementById('birthGrid');
  if(!grid) return;
  grid.innerHTML = '';
  CUMPLEANOS.forEach(a => {
    grid.appendChild(el(`
      <div class="card anniv-card">
        <div class="circle">${a.i}</div>
        <div><div class="a-name">${a.n}</div><div class="a-sub">${a.s}</div></div>
      </div>`));
  });
}

function renderPoliticas(filter = 'TODOS'){
  const list = document.getElementById('polList');
  if(!list) return;
  list.innerHTML = '';
  POLITICAS.filter(p => filter === 'TODOS' || p.cat === filter).forEach(p => {
    list.appendChild(el(`
      <div class="doc-row">
        <div class="doc-icon">PDF</div>
        <div class="doc-title">${p.t}</div>
        <button class="doc-open">ABRIR →</button>
      </div>`));
  });
}

function renderContactos(){
  const grid = document.getElementById('contactGrid');
  if(!grid) return;
  grid.innerHTML = '';
  CONTACTOS.forEach(c => {
    grid.appendChild(el(`
      <div class="contact-item">
        <div class="c-label">${c.l}</div>
        <div class="c-value">${c.v}</div>
      </div>`));
  });
}

// ---------- Comportamiento común (menú móvil + buscador) ----------
function initChrome(){
  const toggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  if(toggle && sidebar){
    toggle.addEventListener('click', () => sidebar.classList.toggle('open'));
  }

  const params = new URLSearchParams(location.search);
  const initialQuery = params.get('q') || '';

  const searchBox = document.getElementById('searchBox');
  if(searchBox){
    if(initialQuery) searchBox.value = initialQuery;
    searchBox.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' && searchBox.value.trim()){
        location.href = 'directorio.html?q=' + encodeURIComponent(searchBox.value.trim());
      }
    });
  }
  return initialQuery;
}

document.addEventListener('DOMContentLoaded', () => {
  const initialQuery = initChrome();

  renderHome();
  renderFilters(document.getElementById('comFilters'), ['TODOS','DIRECCIÓN','RRHH','LOCALES','FÁBRICAS'], renderComunicados);
  renderComunicados();
  renderFilters(document.getElementById('dirFilters'), ['TODOS','RRHH','LOCALES','FÁBRICAS','DIRECCIÓN'], (cat) => renderDirectorio(cat, document.getElementById('searchBox')?.value || initialQuery));
  renderDirectorio('TODOS', initialQuery);
  renderIngresos();
  renderEgresos();
  renderAniversarios();
  renderCumpleanos();
  renderFilters(document.getElementById('polFilters'), ['TODOS','INDUCCIÓN','SEGURIDAD','PROCEDIMIENTOS'], renderPoliticas);
  renderPoliticas();
  renderContactos();
});
