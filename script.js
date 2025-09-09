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

