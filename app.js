const h1 = document.querySelector("h1")
const allBox = document.querySelector(".box")
const button = document.querySelector("button")
const body = document.body
const hideBox = document.querySelector(".hide-box")
const counter = document.querySelector(".times-changed")

const randomColor = Math.floor(Math.random(1)*16777215).toString(16);

const randomColorHex = () => {
  const hexCode = (Math.random() * 0xfffff * 1000000).toString(16)
  return '#' + hexCode.slice(0, 6);
}

button.addEventListener("click", () => {
  h1.textContent = randomColorHex()
  body.style.backgroundColor = randomColorHex()
  counter.textContent++
})

hideBox.addEventListener("click", () => {
  let boxDisplay = allBox.style.display
  
  if(boxDisplay === "none"){
    allBox.style.display = "flex"
    hideBox.textContent = "hide"
    return
  }

  allBox.style.display = "none"
  hideBox.textContent = "show"
})

