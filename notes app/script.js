const notesEl = document.querySelector(".notes"),
  addBtn = document.getElementById("add");

const notes = JSON.parse(localStorage.getItem("notes"));
if (notes) {
  notes.forEach((note) => {
    addNewNote(note);
  });
}

addBtn.addEventListener("click", () => {
  addNewNote();
});
function addNewNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `
  <div class="note">
  <div class="tools">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
  </div>
  <div class="main ${text ? "" : "hidden"}"></div>
  <textarea class=${text ? "hidden" : ""}></textarea>
  </div>  
  `;
  const main = note.querySelector(".main"),
    textArea = note.querySelector("textarea"),
    editBtn = note.querySelector(".edit"),
    deleteBtn = note.querySelector(".delete");
  text = textArea.value;
  main.innerHTML = text;
  deleteBtn.addEventListener("click", () => {
    note.remove();
    updateLS();
  });
  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });
  textArea.addEventListener("input", (e) => {
    const { value } = e.target;
    main.innerHTML = marked(value);
    updateLS();
  });
  document.body.appendChild(note);
}
function updateLS() {
  const notesText = document.querySelectorAll("textarea");
  const notes = [];
  notesText.forEach((note) => {
    notes.push(note.value);
  });
  localStorage.setItem("notes", JSON.stringify(notes));
}
