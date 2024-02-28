// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@media screen and (max-width: 800px) {\n  .bottom-wrapper {\n    flex-direction: column;\n  }\n  .title-nav-icon {\n    display: block;\n  }\n}\n\n.notes-wrapper {\n  max-width: 900px;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}