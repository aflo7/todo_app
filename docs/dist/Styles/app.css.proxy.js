// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".App {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n.bottom-wrapper {\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  border-top: 2px solid white;\n}\n\n.title {\n  background-color: var(--navy);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px;\n  /* padding-left: 25px; */\n}\n\n.title-text {\n  display: flex;\n  /* text-align: center; */\n  align-items: center;\n  color: white;\n  gap: 10px;\n  -webkit-user-select: none; /* Safari */        \n-moz-user-select: none; /* Firefox */\n-ms-user-select: none; /* IE10+/Edge */\nuser-select: none; /* Standard */\n/* border: 1px solid red; */\n}\n\n.title-icon {\n  /* border: 1px solid red; */\n  font-size: 2rem;\n}\n\n.title-text-inner {\n  /* color: red; */\n  font-size: 2rem;\n}\n\n.title-nav-icon {\n  color: white;\n  background-color: var(--navy);\n  display: none;\n  cursor: pointer;\n}\n\n.title-nav-icon:hover {\n  color: rgb(206, 206, 206);\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}