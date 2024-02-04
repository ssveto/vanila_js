const cashInput = document.getElementById("cash")
const purchaseBtn = document.getElementById("purchase-btn")
const changeDue = document.getElementById("change-due")

let price = 1.87;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];


const calChange = (cash, price) => {
    const total = cash - price;
    console.log(total)

}

purchaseBtn.addEventListener("click", () => {
    let cash = Number(cashInput.value);
    if (cash < price) {
        alert("Customer does not have enough money to purchase the item")
    } else if (cash === price) {
        changeDue.innerText = "No change due - customer paid with exact cash"
    } else {
        calChange(cash, price)
    }
})