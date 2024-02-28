// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".form-wrapper {\n  padding: 15px;\n}\n.note-wrapper {\n  padding: 15px;\n}\n\n.notes-wrapper {\n  width: 100%;\n  background-color: var(--orange);\n  padding: 20px;\n}\n.create-folder-input:hover {\n  background-color: var(--green-apple);\n}\n\n.add-task-btn {\n  width: 100%;\n  background-color: transparent;\n  text-align: left;\n  border: none;\n  border-radius: 10px;\n}\n\n.add-task-btn:hover {\n  background-color: var(--gold);\n}\n\n.cancel-btn {\n  border-radius: 10px;\n  border: 1px solid black;\n  background-color: rgb(255, 131, 131);\n  width: 48%;\n\n}\n.cancel-btn:hover {\n  background-color: rgb(234, 112, 112);\n}\n.create-btn {\n  border-radius: 10px;\n  border: 1px solid black;\n  background-color: lightgreen;\n  width: 48%;\n}\n\n.create-folder-btn {\n  border-radius: 10px;\n  border: 1px solid black;\n  background-color: lightgreen;\n  margin-top: 10px;\n  width: 100%;\n}\n\n.create-folder-btn:hover {\n  background-color: rgb(129, 225, 129);\n}\n\n.create-btn:hover {\n  background-color: rgb(129, 225, 129);\n}\n\n.new-task-form {\n  display: flex;\n  flex-direction: column;\n}\n\n.new-task-btn-wrapper {\n  display: flex;\n  margin-top: 10px;\n  justify-content: space-between;\n}\n\n.new-task-content-input {\n  border-radius: 10px;\n  border: 1px solid black;\n}\n\n.folder-name-input {\n  border-radius: 10px;\n  border: 1px solid black;\n}\n\n.fa-reg-circle-wrapper {\n  margin-right: 5px;\n  padding: 8px;\n\n  cursor: pointer;\n}\n\n.single-note-delete-icon-wrapper {\n  padding: 8px;\n  height: 60px;\n  line-height: 40px;\n}\n\n.single-note-delete-icon {\n  cursor: pointer;\n}\n\n.single-note-delete-icon:hover {\n  color: red;\n}\n\n.fa-reg-circle:hover {\n  background-color: rgb(160, 160, 160);\n  border-radius: 50%;\n}\n\n.single-note-content {\n  margin-top: 4px;\n  padding: 8px;\n}\n\n.single-note-wrapper {\n  display: flex;\n  border-top: 2px solid white;\n  border-left: 2px solid white;\n  justify-content: space-between;\n  margin-top: 15px;\n}\n\n.single-note {\n  /* margin-bottom: 15px; */\n  padding: 5px;\n  word-break: break-all;\n  display: flex;\n}\n\n.single-note-delete-icon {\n  /* padding: 8px; */\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}