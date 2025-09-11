"use strict"

const countEl = document.querySelector("#count")
const incBtn = document.querySelector("#inc")
const decBtn = document.querySelector("#dec")
const resetBtn = document.querySelector("#reset")

let count = 0
function renderCount() {
    countEl.textContent = count
}

incBtn.addEventListener("click", () => {
    count++
    renderCount()
})

decBtn.addEventListener("click", () => {
    count--
    renderCount()
})

resetBtn.addEventListener("click", () => {
    count = 0
    renderCount()
})

renderCount()

// --- IGNORE ---

const nameInput = document.querySelector("#nameInput")
const greetEl = document.querySelector("#greet")

nameInput.addEventListener("input", () => {
    const name = nameInput.value.trim()
    greetEl.textContent = name ? `Hello, ${name}!` : "Hello!"
})


// --- IGNORE ---

const todoInput = document.querySelector("#todoInput")
const addTodoBtn = document.querySelector("#addTodo")
const todoList = document.querySelector("#todoList")

addTodoBtn.addEventListener("click", addTodo)
todoInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter")
        addTodo()
})

function addTodo() {
    const text = todoInput.value.trim()
    if (!text) return

    const li = document.createElement("li")
    li.innerHTML = `<span>${escapeHTML(text)}</span> <button class="deleteBtn">Delete</button>`
    li.querySelector(".del").addEventListener("click", () => li.remove())
    todoList.appendChild(li)
    todoInput.value = ""
}


function escapeHTML(s) {
    return s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
}