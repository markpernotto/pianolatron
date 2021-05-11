// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "div.svelte-paudf8.svelte-paudf8{background:rgba(0, 0, 0, 0.4);border-radius:4px;padding:8px;position:absolute;z-index:25}div.svelte-paudf8 button.svelte-paudf8{background:none;border:none;color:#ffffff;cursor:pointer;margin:0;padding:0.35em 0.8em;transition:all 0.2s}div.svelte-paudf8 button.svelte-paudf8:focus,div.svelte-paudf8 button.svelte-paudf8:active{outline:0}div.svelte-paudf8 button.svelte-paudf8:hover{outline:1px solid white}div.svelte-paudf8 button.svelte-paudf8:active{color:grey}div.svelte-paudf8 button.svelte-paudf8:disabled{color:grey;cursor:not-allowed}#roll-viewer-controls.svelte-paudf8.svelte-paudf8{left:50%;top:8px;transform:translateX(-50%)}#pan-controls.svelte-paudf8.svelte-paudf8{top:50%;right:8px;transform:translateY(-50%);display:flex;flex-direction:column}#pan-controls.svelte-paudf8 button.svelte-paudf8{padding:0.8em 0.35em}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}