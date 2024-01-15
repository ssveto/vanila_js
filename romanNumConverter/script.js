const convertBtn = document.getElementById("convert-btn");
const inputValue = document.getElementById("number");
const output = document.getElementById("output");

let result = '';


const romanConverter = (val) => {

  if (inputValue.value === "") {
    output.innerText = "Please enter a valid number";
    return;
  }
  
  if (inputValue.value < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  }
  
  if (inputValue.value > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  }

  
  if (val >= 1000) {
    result += "M";
    romanConverter(val - 1000)  
  } else if (val >= 900){
    result += "CM";
    romanConverter(val - 900)
    
  } else if (val >= 500){
    result += "D";
    romanConverter(val - 500)
    
  } else if (val >= 400) {
    result += "CD";
    romanConverter(val - 400)
    
  }else if (val >= 100){
    result += "C";
    romanConverter(val - 100)
    
  } else if (val >= 90) {
    result += "XC";
    romanConverter(val - 90)
    
  }else if (val >= 50){
    result += "L";
    romanConverter(val - 50)
    
  } else if (val >= 40) {
    result += "XL";
    romanConverter(val - 40)
    
  }else if (val >= 10){
    result += "X";
    romanConverter(val - 10)
    
  } else if (val >= 9) {
    result += "IX";
    romanConverter(val - 9)
    
  }else if (val >= 5){
    result += "V";
    romanConverter(val - 5)
    
  } else if (val >= 4) {
    result += "IV";
    romanConverter(val - 4)
    
  } else if (val >= 1){
    result += "I";
    romanConverter(val - 1)
  }
   else {
    return;   
   }
    return output.innerText = result;
  }


convertBtn.addEventListener("click", () => {
  result = ""
  romanConverter(parseInt(inputValue.value))
});

inputValue.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    result = ""
  romanConverter(parseInt(inputValue.value))
  }
  

})
