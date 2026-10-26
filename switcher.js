// review-only variant switcher: three quiet numbers on the right edge, so the client can flip between design variants.
// Remove this file and its <script> tags before the real launch.
(() => {
  const root = new URL('.', document.currentScript.src);
  const variants = [
    ['', 'Вариант 1 — «Портовая диспетчерская»'],
    ['variants/stal-i-voda.html', 'Вариант 2 — «Сталь и вода»'],
    ['variants/solidnyj-podryadchik.html', 'Вариант 3 — «Солидный подрядчик»']
  ];
  const here = location.pathname.replace(/index\.html$/, '');
  const nav = document.createElement('nav');
  nav.className = 'vswitch';
  nav.setAttribute('aria-label', 'Варианты дизайна');
  nav.innerHTML = variants.map(([path, name], i) => {
    const url = new URL(path, root);
    const current = url.pathname === here ? ' aria-current="page"' : '';
    return `<a href="${url.href}" title="${name}" aria-label="${name}"${current}>${i + 1}</a>`;
  }).join('');
  const css = document.createElement('style');
  css.textContent = `
.vswitch{position:fixed;right:0;top:50%;translate:0 -50%;z-index:60;display:flex;flex-direction:column;background:rgba(10,18,26,.78);border-radius:4px 0 0 4px;opacity:.45;transition:opacity 150ms ease-out}
.vswitch:hover,.vswitch:focus-within{opacity:1}
.vswitch a{display:grid;place-items:center;width:28px;height:32px;font:600 12px/1 Arial,sans-serif;color:#fff;text-decoration:none}
.vswitch a[aria-current]{background:rgba(255,255,255,.24)}
.vswitch a:focus-visible{outline:2px solid #fff;outline-offset:-3px}
@media (hover:hover){.vswitch a:not([aria-current]):hover{background:rgba(255,255,255,.12)}}`;
  document.head.append(css);
  document.body.append(nav);
})();
