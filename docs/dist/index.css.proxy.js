// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ":root {\n  --navy: #264653;\n  --teal: #2a9d8f;\n  --gold: #e9c46a;\n  --orange: #f4a261;\n  --dark-orange: #e76f51;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  margin: 0;\n  font-family: 'proxima-nova', sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  background-color: var(--orange);\n  color: black;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n\nbutton {\n  padding: 5px;\n}\n\ninput {\n  color: black;\n  padding: 5px;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}