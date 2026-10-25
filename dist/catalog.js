(() => {
  const products = [
    { id: 'mi-5', name: 'Electric Scooter 5 Plus', brand: 'Xiaomi', type: 'scooter', use: 'Cidade · dobrável', tag: 'Urbano', image: 'https://cdn.mediablog.mediapark.uz/corecms/post-thumbnails/01K1JES6SN0XNVFZ01V2CB1S8A.webp', source: 'https://www.mi.com/uk/product/xiaomi-electric-scooter-5-plus/specs/', description: 'Scooter dobrável. Autonomia declarada de até 60 km em teste controlado; velocidade máxima de 25 km/h e peso de 26,6 kg segundo a ficha Xiaomi UK.', facts: ['Até 60 km*', '25 km/h', '26,6 kg'], factLabels: ['Autonomia', 'Velocidade', 'Peso'] },
    { id: 'mi-5-pro', name: 'Electric Scooter 5 Pro', brand: 'Xiaomi', type: 'scooter', use: 'Cidade · conforto', tag: 'Suspensão', image: 'https://i05.appmifile.com/467_item_hu/12/08/2025/bec4608a80448b9a4a90929090a60bd7.png?q=85&thumb=1&w=900', source: 'https://www.mi.com/hu/life-style/', description: 'Scooter elétrica da linha Xiaomi 5. A oferta e a ficha dependem da versão regional.' },
    { id: 'segway-zt3', name: 'ZT3 Pro', brand: 'Segway', type: 'scooter', use: 'Cidade · terrenos variados', tag: 'Suspensão dupla', image: 'https://store-ca.segway.com/media/catalog/product/cache/d3ec3723470ff918c92e447639eaf984/z/t/zt3_pro-2_1_.png', source: 'https://store.segway.com/segway-ekickscooter-zt3-pro', description: 'Scooter elétrica com suspensão dupla. A página Segway US declara até 43,5 mi de alcance e 24,9 mph; versão e limites variam por mercado.', facts: ['Até 70 km*', 'Até 40 km/h*', 'Suspensão dupla'], factLabels: ['Autonomia', 'Velocidade', 'Suspensão'] },
    { id: 'riley-rs1', name: 'RS1', brand: 'Riley', type: 'patinete', use: 'Último trecho · dobrável', tag: 'Compacto', image: 'https://cdn.shopify.com/s/files/1/0473/9340/7134/files/RS1_scooter____copy.png?v=1738584837', source: 'https://rileyscooters.com/', description: 'Scooter dobrável para deslocamentos compactos. Consulte dados técnicos e adequação às regras locais.' },
    { id: 'inmotion-s1', name: 'S1 Electric Scooter', brand: 'INMOTION', type: 'scooter', use: 'Cidade · conforto', tag: 'Commuter', image: 'https://electrickicks.com.au/cdn/shop/files/inmotion-s1-electric-scooter-front-side-left.jpg?v=1753415908&width=1000', source: 'https://inmotionworld.com/', description: 'Scooter elétrica INMOTION. Confirme a versão e os dados técnicos junto ao revendedor.' },
    { id: 'monarc-tracer', name: 'Tracer Superior', brand: 'Monarc', type: 'bike', use: 'Cidade · longa distância', tag: 'E-bike', image: 'https://monarcbikes.com/cdn/shop/files/Tracer-Superior-Side2.png?v=1782182100&width=1400', source: 'https://monarcbikes.com/products/tracer-high-step-superior-ebike', description: 'Bicicleta elétrica urbana da Monarc. Verifique bateria, especificações e disponibilidade da versão.' },
    { id: 'dyu-c7', name: 'C5 Lite', brand: 'DYU', type: 'bike', use: 'Cidade · passeio', tag: 'E-bike', image: 'https://us.dyucycle.com/cdn/shop/files/C5LITE_1_a82634bc-1301-430e-9d8c-603852a9633d_1170x.jpg?v=1770272288', source: 'https://us.dyucycle.com/', description: 'Bicicleta elétrica DYU. Confirme o SKU, o nome comercial e a ficha da unidade ofertada.' },
    { id: 'windhorse-f2', name: 'F2 Commuter', brand: 'Windhorse', type: 'bike', use: 'Cidade · quadro baixo', tag: 'Commuter', image: 'https://windhorse.com/cdn/shop/files/windhorse-f2windhorse-3969850.jpg?v=1752234443&width=1300', source: 'https://windhorse.com/products/windhorse-f2', description: 'Bicicleta elétrica commuter de quadro baixo. Consulte o catálogo do vendedor para detalhes e versões.' },
    { id: 'govolt-fold', name: 'GoVolt Folding', brand: 'GoPowerBike', type: 'bike', use: 'Dobrável · multimodal', tag: 'Dobrável', image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/26b9f642-4e7a-4954-904f-0eca7039d679.jpg', source: 'https://www.bestbuy.com/', description: 'Bicicleta elétrica dobrável. Consulte o catálogo do revendedor para detalhes e disponibilidade.' },
    { id: 'bodywel-d6', name: 'D6 Fat Tire', brand: 'Bodywel', type: 'bike', use: 'Cidade · piso misto', tag: 'Pneus largos', image: 'https://bodywel.com/cdn/shop/files/bodywel-d6-fat-tire-touring-ebike-long-range-7633273_2048x.png?v=1767431696', source: 'https://bodywel.com/products/bodywel-d6-fat-tyre-ebike', description: 'E-bike com pneus largos da Bodywel. Verifique a versão, o uso recomendado e as especificações.' },
    { id: 'mk1e-trike', name: 'MK1-E', brand: 'Butchers & Bicycles', type: 'trike', use: 'Carga · família', tag: 'E-trike', image: 'https://best-cargo-bike.de/cdn/shop/products/18_15782d88-4d7d-4cc4-8df6-1cac23e4df62_1024x1024%402x.png?v=1663753197', source: 'https://en.upway.be/products/butchers-and-bicycles-mk1e-ga51', description: 'Triciclo elétrico de carga com duas rodas dianteiras. Confirme condição, versão e disponibilidade.' },
    { id: 'alecs-trike', name: 'ALECS', brand: 'Pashley', type: 'trike', use: 'Carga · logística', tag: 'E-trike', image: 'https://www.pashley.co.uk/cdn/shop/products/pashley-alecs-e-cargo-trike-side-view_ba1894c5-6461-44a0-9b64-7422251e629a_1800x.jpg?v=1674642067', source: 'https://www.pashley.co.uk/products/alecs', description: 'Triciclo de carga com assistência elétrica. A Pashley declara motor de 250 W, alcance de até 50 km e carga útil de 110 kg.', facts: ['Até 50 km*', '250 W', '110 kg de carga'], factLabels: ['Autonomia', 'Motor', 'Carga útil'] },
    { id: 'inmotion-v11y', name: 'V11Y', brand: 'INMOTION', type: 'mono', use: 'Urbano · experiência', tag: 'Monociclo', image: 'https://inmotionworld.com/cdn/shop/files/V11Y-_-__03_40168951-936f-422e-89db-70f77384d5d8.png?v=1735216886&width=1200', source: 'https://inmotionworld.com/products/inmotion-v11y', description: 'Monociclo elétrico com suspensão de 85 mm. A INMOTION declara motor de 2.500 W, velocidade máxima de 60 km/h e alcance de até 75 mi. Recomendado para pessoas experientes.', facts: ['Até 120 km*', '2.500 W', 'Suspensão 85 mm'], factLabels: ['Autonomia', 'Motor', 'Suspensão'] },
    { id: 'inmotion-v6', name: 'V6', brand: 'INMOTION', type: 'mono', use: 'Compacto · urbano', tag: 'Monociclo', image: 'https://inmotionworld.com/cdn/shop/files/V6_0bb5f244-b786-426e-9b52-c96fa83f68a8_2048x2048.png?v=1777546551&width=1200', source: 'https://inmotionworld.com/', description: 'Monociclo elétrico compacto INMOTION. Confirme a versão e as instruções de uso.' },
    { id: 'benzina-zero', name: 'Zero City', brand: 'Benzina Zero', type: 'moped', use: 'Deslocamento · sentado', tag: 'Moped elétrica', image: 'https://benzinazero.com/cdn/shop/files/3_dcd24da6-9d4e-45e5-a5eb-43db85876368.png?v=1757046355&width=1200', source: 'https://benzinazero.com/products/benzina-zero-city-electric-moped', description: 'Moped elétrica com assento. Categoria e requisitos de circulação dependem da versão e das regras locais.' },
    { id: 'yadea-g5', name: 'G5 Graphene', brand: 'YADEA', type: 'moped', use: 'Deslocamento · sentado', tag: 'Moped elétrica', image: 'https://www.forza.nz/cdn/shop/products/yadea-g5-graphene-electric-moped_White5_1024x1024.jpg?v=1770259833', source: 'https://www.forza.nz/products/yadea-g5-graphene-electric-moped', description: 'Moped elétrica YADEA. Confirme potência, velocidade, bateria e enquadramento local com a loja.' }
  ];
  const category = { bike: 'E-bike', scooter: 'Scooter', patinete: 'Patinete', trike: 'Triciclo elétrico', mono: 'Monociclo', moped: 'Moped elétrica' };
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const catalog = $('#catalog');
  const saved = new Set(read('velo-saved', []));
  let cart = read('velo-cart', {}), active = 'todos', query = '', sort = 'featured';
  let compare = new Set(), compareMode = false;
  let timer;

  function read(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } }
  function write(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* Private browsing can disable storage. */ } }
  function toast(message) { const node = $('#toast'); node.textContent = message; node.classList.add('show'); clearTimeout(timer); timer = setTimeout(() => node.classList.remove('show'), 2400); }
  function productCard(p) {
    const facts = p.facts || [category[p.type], p.use.split(' · ')[0], 'Sob consulta'];
    const factLabels = p.factLabels || ['Categoria', 'Perfil', 'Ficha'];
    const backup = { scooter: products.find(x => x.id === 'segway-zt3'), patinete: products.find(x => x.id === 'riley-rs1'), bike: products.find(x => x.id === 'windhorse-f2'), trike: products.find(x => x.id === 'alecs-trike'), mono: products.find(x => x.id === 'inmotion-v11y'), moped: products.find(x => x.id === 'benzina-zero') }[p.type];
    return `<article class="card reveal" data-id="${p.id}"><div class="card-media"><span class="card-topline">${p.tag}</span><label class="compare-check" style="display:${compareMode ? 'flex' : 'none'}"><input type="checkbox" data-compare="${p.id}" ${compare.has(p.id) ? 'checked' : ''}> Comparar</label><img src="${p.image}" data-fallback="${backup?.image || ''}" alt="${p.brand} ${p.name}, ${category[p.type]}" loading="lazy" onerror="if(this.dataset.fallback&amp;&amp;this.src!==this.dataset.fallback){this.src=this.dataset.fallback}else{this.closest('.card-media').classList.add('image-error')}"></div><div class="card-meta"><span class="tag">${p.brand} / ${category[p.type]}</span><button class="heart ${saved.has(p.id) ? 'saved' : ''}" aria-label="Salvar ${p.name}" aria-pressed="${saved.has(p.id)}">${saved.has(p.id) ? '♥' : '♡'}</button></div><div class="card-info"><div><h3>${p.name}</h3><div class="subtitle">${p.use}</div></div><div class="price">Consultar</div></div><div class="specs">${facts.map((fact, i) => `<div class="spec"><span>${factLabels[i] || 'Ficha'}</span><strong>${fact}</strong></div>`).join('')}</div><div class="card-foot"><button class="inspect" data-detail="${p.id}">Ver detalhes <span>↗</span></button><button class="card-cta" data-add="${p.id}">Adicionar</button></div></article>`;
  }
  function filtered() {
    let list = products.filter(p => (active === 'todos' || p.type === active) && (!query || `${p.name} ${p.brand} ${p.use} ${category[p.type]}`.toLowerCase().includes(query)));
    if (sort === 'az') list.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'za') list.sort((a, b) => b.name.localeCompare(a.name));
    return list;
  }
  function render() {
    const list = filtered();
    $('#filterCount').textContent = `${String(list.length).padStart(2, '0')} MODELOS`;
    catalog.innerHTML = list.length ? list.map(productCard).join('') : '<div class="empty-state">Nenhum veículo encontrado. Tente outro nome ou categoria.</div>';
    $$('[data-add]', catalog).forEach(b => b.onclick = () => add(b.dataset.add));
    $$('[data-detail]', catalog).forEach(b => b.onclick = () => detail(b.dataset.detail));
    $$('[data-compare]', catalog).forEach(b => b.onchange = () => setCompare(b.dataset.compare, b.checked));
    $$('.heart', catalog).forEach(b => b.onclick = () => toggleSaved(b.closest('.card').dataset.id));
    $$('[data-category]').forEach(a => a.onclick = () => setFilter(a.dataset.category));
    revealNew();
  }
  function revealNew() { $$('.reveal:not(.in)').forEach(el => { if (!('IntersectionObserver' in window)) el.classList.add('in'); else observer.observe(el); }); }
  const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); observer.unobserve(e.target); } }), { threshold: .08 }) : { observe(el) { el.classList.add('in'); }, unobserve() {} };
  function setFilter(value) { active = value; $$('.filter').forEach(b => { const selected = b.dataset.filter === value; b.classList.toggle('active', selected); b.setAttribute('aria-pressed', String(selected)); }); render(); }
  function toggleSaved(id) { saved.has(id) ? saved.delete(id) : saved.add(id); write('velo-saved', [...saved]); render(); toast(saved.has(id) ? 'Modelo salvo' : 'Modelo removido dos salvos'); }
  function setCompare(id, checked) { if (checked && compare.size >= 3) { toast('Compare até 3 modelos por vez'); render(); return; } checked ? compare.add(id) : compare.delete(id); $('#compareCount').textContent = compare.size; drawCompare(); }
  function drawCompare() { const list = [...compare].map(id => products.find(p => p.id === id)).filter(Boolean); $('#compareItems').innerHTML = list.map(p => `<div class="compare-item"><b>${p.name}</b>${p.brand} · ${category[p.type]}<br>${p.use}<br>${(p.facts || ['Ficha técnica sob consulta']).join(' · ')}<br>Preço: consulte a loja</div>`).join(''); $('#comparePanel').classList.toggle('open', list.length > 0); }
  function add(id) { cart[id] = (cart[id] || 0) + 1; write('velo-cart', cart); paintCart(); toast('Adicionado à sua seleção'); }
  function quantity(id, delta) { cart[id] = (cart[id] || 0) + delta; if (cart[id] <= 0) delete cart[id]; write('velo-cart', cart); paintCart(); }
  function paintCart() {
    const entries = Object.entries(cart).filter(([id, q]) => products.some(p => p.id === id) && q > 0);
    const count = entries.reduce((n, [, q]) => n + q, 0);
    $('#bagCount').textContent = count; $('#cartTotalCount').textContent = `(${count})`;
    $('#cartItems').innerHTML = entries.length ? entries.map(([id, q]) => { const p = products.find(x => x.id === id); return `<div class="drawer-basket"><strong>${p.name}</strong><div class="quantity"><button data-minus="${id}" aria-label="Remover uma unidade">−</button><span>${q}</span><button data-plus="${id}" aria-label="Adicionar uma unidade">+</button></div><small>${p.brand} · ${category[p.type]} · preço sob consulta</small></div>`; }).join('') : '<p class="drawer-note">Sua seleção está vazia. Explore o catálogo e adicione modelos para consultar com a loja.</p>';
    const subject = encodeURIComponent('Interesse em veículos VÉLO');
    const body = encodeURIComponent(entries.map(([id, q]) => `${products.find(p => p.id === id).name} — quantidade ${q}`).join('\n'));
    $('#cartContact').href = `mailto:ola@velo.com.br?subject=${subject}&body=${body}`;
    $$('[data-minus]').forEach(b => b.onclick = () => quantity(b.dataset.minus, -1)); $$('[data-plus]').forEach(b => b.onclick = () => quantity(b.dataset.plus, 1));
  }
  let returnFocus = null;
  function focusable(container) { return $$('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])', container).filter(el => el.getAttribute('aria-hidden') !== 'true' && el.offsetParent !== null); }
  function trapFocus(event, container) {
    if (event.key !== 'Tab') return;
    const items = focusable(container);
    if (!items.length) return;
    const first = items[0], last = items[items.length - 1];
    if (event.shiftKey && (document.activeElement === first || !container.contains(document.activeElement))) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && (document.activeElement === last || !container.contains(document.activeElement))) { event.preventDefault(); first.focus(); }
  }
  function openDrawer() { returnFocus = document.activeElement; $('#cartPanel').classList.add('open'); $('#scrim').classList.add('on'); $('#cartPanel').setAttribute('aria-hidden', 'false'); document.body.classList.add('no-scroll'); $('#cartClose').focus(); }
  function closeDrawer() { const wasOpen = $('#cartPanel').classList.contains('open'); $('#cartPanel').classList.remove('open'); $('#scrim').classList.remove('on'); $('#cartPanel').setAttribute('aria-hidden', 'true'); document.body.classList.remove('no-scroll'); if (wasOpen) returnFocus?.focus(); }
  function detail(id) { const p = products.find(x => x.id === id); const facts = p.facts || ['Ficha técnica detalhada sob consulta']; const labels = p.factLabels || ['Ficha']; returnFocus = document.activeElement; $('#modalContent').innerHTML = `<div class="modal-grid"><img src="${p.image}" alt="${p.brand} ${p.name}" onerror="this.style.display='none'"><div><span class="eyebrow">${p.brand} / ${category[p.type]}</span><h2 id="modalTitle">${p.name}</h2><p>${p.description}</p><div class="modal-specs"><div>Categoria<b>${category[p.type]}</b></div><div>Uso<b>${p.use}</b></div><div>Preço<b>Sob consulta</b></div><div>Disponibilidade<b>Consulte a loja</b></div>${facts.map((fact, i) => `<div>${labels[i] || 'Ficha'}<b>${fact}</b></div>`).join('')}</div><a class="product-source" href="${p.source}" target="_blank" rel="noreferrer">Página de origem ↗</a><p class="fine">Imagem e dados técnicos vêm da página de origem indicada. Estoque, versão, preço e enquadramento local devem ser confirmados com o vendedor.</p><button class="primary modal-add">Adicionar à seleção ↗</button></div></div>`; $('#modalBack').classList.add('open'); $('#modalBack').setAttribute('aria-hidden', 'false'); document.body.classList.add('no-scroll'); $('#modalClose').focus(); $('.modal-add').onclick = () => { add(p.id); closeModal(); openDrawer(); }; }
  function closeModal() { const wasOpen = $('#modalBack').classList.contains('open'); $('#modalBack').classList.remove('open'); $('#modalBack').setAttribute('aria-hidden', 'true'); if (!$('#cartPanel').classList.contains('open')) document.body.classList.remove('no-scroll'); if (wasOpen && !$('#cartPanel').classList.contains('open')) returnFocus?.focus(); }

  $$('.filter').forEach(b => b.onclick = () => setFilter(b.dataset.filter));
  $('#catalogSearch').oninput = e => { query = e.target.value.trim().toLowerCase(); render(); };
  $('#sortSelect').onchange = e => { sort = e.target.value; render(); };
  $('#searchBtn').onclick = () => { $('#colecao').scrollIntoView({ behavior: 'smooth' }); $('#catalogSearch').focus(); };
  $('#cartBtn').onclick = openDrawer; $('#cartClose').onclick = closeDrawer; $('#scrim').onclick = closeDrawer;
  $('#modalClose').onclick = closeModal; $('#modalBack').onclick = e => { if (e.target === e.currentTarget) closeModal(); };
  $('#compareTrigger').onclick = () => { compareMode = !compareMode; $('#compareTrigger').setAttribute('aria-pressed', String(compareMode)); render(); toast(compareMode ? 'Marque até 3 modelos para comparar' : 'Comparação fechada'); };
  $('#compareClose').onclick = () => { compare.clear(); drawCompare(); render(); };
  document.addEventListener('keydown', e => {
    if ($('#modalBack').classList.contains('open')) {
      if (e.key === 'Escape') { closeModal(); return; }
      trapFocus(e, $('.modal'));
    } else if ($('#cartPanel').classList.contains('open')) {
      if (e.key === 'Escape') { closeDrawer(); return; }
      trapFocus(e, $('#cartPanel'));
    }
    if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) { e.preventDefault(); $('#catalogSearch').focus(); }
  });
  document.documentElement.classList.add('js');
  render(); paintCart(); drawCompare();
})();
