// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".nav-btn {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 10px;\n  border-radius: 5px;\n  gap: 10px;\n  border: 1px solid black;\n  \n}\n\n.nav-btn:hover {\n  background-color: var(--gold);\n}\n\n.nav-inner-text {\n  width: 200px;\n  word-break: break-all;\n}\n\n.nav-icon {\n  font-size: 1.5rem;\n}\n\n.nav-wrapper {\n  background-color: var(--dark-orange);\n  padding: 15px;\n \n}\n\nnav {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}