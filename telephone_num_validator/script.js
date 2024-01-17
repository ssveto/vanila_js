const checkBtn = document.getElementById("check-btn")
const clearBtn = document.getElementById("clear-btn")
const inputValue = document.getElementById("user-input")
const result = document.getElementById("results-div")


const checkInput = (str) => {
    const re = /^(\s?1?\s?\(?)(\d{3})(\s|\)|\-?)\s?(\d{3})(\s|\-)?(\d{4}$)/;
    const re1 = /^(\s?1?\s?\()(5{3})(\-?\s?\))\s?(\d{3})(\s|\-)?5{4}/gm;


    if (str.indexOf("(") >= 0 || str.indexOf(")") >= 0) {
        
        {re1.test(str) ? result.innerText = `Valid US number: ${str}` : result.innerText = `Invalid US number: ${str}`}
        
    } else {
        {re.test(str) ? result.innerText = `Valid US number: ${str}` : result.innerText = `Invalid US number: ${str}`}
    }

}

checkBtn.addEventListener("click", () => {
    if (inputValue.value == "") {
        alert("Please provide a phone number");
    } else {
        checkInput(inputValue.value)
    }


})

clearBtn.addEventListener("click", () => {
    
    result.innerText = "";

})