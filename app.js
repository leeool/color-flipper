const h1 = document.querySelector("h1")
const allBox = document.querySelector(".box")
const button = document.querySelector("button")
const body = document.body
const hideBox = document.querySelector(".hide-box")

let randomColor = Math.floor(Math.random(1)*16777215).toString(16);

const randomColorHex = () => {
  const hexCode = (Math.random() * 0xfffff * 1000000).toString(16)
  return '#' + hexCode.slice(0, 6);
}

button.addEventListener("click", () => {
  h1.textContent = randomColorHex()

  body.style.backgroundColor = randomColorHex()
})


hideBox.addEventListener("click", () => {
  if(allBox.style.display === "flex"){
    allBox.style.display = "none"
    hideBox.textContent = "show"
  } else{
    allBox.style.display = "flex"
    hideBox.textContent = "hide"

  }

})

