let numberPlus = document.getElementById("passenger")
let saveBtn = document.getElementById("save-btn")
let lastShifts = document.getElementById("last-shifts")
console.log(numberPlus)

let count = 0

function plusBtn() {
    count += 1
    numberPlus.innerText = count
}

function save() {
    passengers = count + " - "
    lastShifts.textContent += passengers
    count = 0
    numberPlus.textContent = count

}

