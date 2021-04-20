// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".notification.svelte-1x048n2.svelte-1x048n2{border-radius:4px;box-shadow:0 3px 6px rgba(0, 0, 0, 0.3);display:flex;justify-content:space-between;left:50%;min-width:400px;position:absolute;top:20%;transform:translate(-50%);z-index:1000}.notification.error.svelte-1x048n2.svelte-1x048n2{background:#ff4848;border:1px solid #eb0f0f;border-left-width:6px;color:white}.notification.error.svelte-1x048n2 .close.svelte-1x048n2{color:white;border-left-color:rgba(255, 255, 255, 0.5)}section.svelte-1x048n2.svelte-1x048n2{display:flex;flex-direction:column;padding:0.75em 0.5em;width:100%}header.svelte-1x048n2.svelte-1x048n2{font-size:1.25em;font-weight:bold;padding:0 0.25em 0.25em;margin-bottom:0.5em}p.svelte-1x048n2.svelte-1x048n2{margin:0;padding:0.25em}.close.svelte-1x048n2.svelte-1x048n2{align-items:center;border-left:1px solid rgba(0, 0, 0, 0.2);cursor:pointer;display:flex;font-weight:bold;padding:0 6px}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}