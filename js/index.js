alert("Student details : Name: Syed Arham ALi  Id: 3143");

const form = document.querySelector(".input-box");
const ul_list = document.querySelector("ul");
const inputby = document.querySelector("input");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTasks = e.target.addTasks.value;

  const textInput = document.createElement("input");
  textInput.setAttribute("type", "text");

  const li = document.createElement("li");
  const p = document.createElement("p");
  p.textContent = newTasks;

  const editBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  const checkBtn = document.createElement("button");

  editBtn.setAttribute("class", "edit-btn");
  deleteBtn.setAttribute("class", "delete-btn");

  const editBtnicon = document.createElement("i");
  const deleteBtnicon = document.createElement("i");
  const checkBtnicon = document.createElement("i");

  editBtnicon.setAttribute("class", "bx bxs-edit");
  deleteBtnicon.setAttribute("class", "bx bxs-trash");
  checkBtnicon.setAttribute("class", "bx bx-check");

  editBtn.appendChild(editBtnicon);
  deleteBtn.appendChild(deleteBtnicon);
  checkBtn.appendChild(checkBtnicon);

  li.appendChild(p);
  li.appendChild(textInput); // for edit btn functionality
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  li.appendChild(checkBtn);
  ul_list.appendChild(li);

  textInput.style.display = "none";
  checkBtn.style.display = "none";

  // Completed Functionality
  p.addEventListener("click", () => {
    p.classList.toggle("completed");
  });

  // Edit Btn Functionality
  editBtn.addEventListener("click", ()=> {
    p.style.display = "none";
    deleteBtn.style.display = "none";
    editBtn.style.display = "none";
    textInput.style.display = "flex";
    textInput.style.flex = "1";
    textInput.style.border = "0.15rem solid #8e2de2";
    textInput.style.borderRadius = "5px";
    textInput.style.padding = "0.8rem 0.4rem";
    textInput.style.height = "1.2rem";
    textInput.style.outline = "none";

    checkBtn.style.display = "flex";
    checkBtn.style.marginLeft = "0.5rem";
    checkBtn.style.fontSize = "1.5rem";
    checkBtn.style.fontWeight = "700";
    checkBtn.style.alignItems = "center";
    checkBtn.style.color = "#8e2de2";
    checkBtn.style.backgroundColor = "transparent";
    checkBtn.style.border = "none";
    checkBtn.style.cursor = "pointer";
    textInput.value = p.textContent;
    textInput.focus();
  });

  // checkBtn Btn Functionality
  checkBtn.addEventListener("click", () => {
    p.style.display = "block";
    deleteBtn.style.display = "block";
    editBtn.style.display = "block";
    textInput.style.display = "none";
    checkBtn.style.display = "none";
    p.textContent = textInput.value;
  });

  // deleteBtn Functionality
  deleteBtn.addEventListener("click", () => {
    p.style.display = "none";
    deleteBtn.style.display = "none";
    editBtn.style.display = "none";
    textInput.style.display = "none";
    checkBtn.style.display = "none";   
    li.style.display='none'
  })

  
  e.target.addTasks.value = "";
});
