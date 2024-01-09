const checkBtn = document.getElementById("check-btn");
const inputP = document.getElementById("text-input");
const result = document.getElementById("result")



const compare = (str) => {
    const currVal = cleanString(str).split("");
    const mainVal = cleanString(str);
    let isNotPalindrome = false;
    const reverseVal = currVal.reverse().join("");
    for (let i = 0; i < mainVal.length; i++) {
        if (mainVal[i] !== reverseVal[i]) {
            return !isNotPalindrome;

        }
        
        
    }
    return isNotPalindrome;
}

const checkInput = () => {
    if (inputP.value.length === 0) {
        alert("Please input a value");
    } else {
        if (compare(inputP.value) === false) {
            
            result.innerText = `${inputP.value} is a palindrome`;
        } else {
            
            result.innerText = `${inputP.value} is not a palindrome`;
        }

    }

}


const cleanString = (str) => {
    const regex = /[a-zA-Z0-9]+/gmi;
    let match = str.match(regex).join("").toLowerCase();
    console.log(match);
    return match; 
    
}


checkBtn.addEventListener("click", checkInput)
