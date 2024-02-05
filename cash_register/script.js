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


const calChange = (cash, price, cid) => {

    const UNIT_AMOUNT = {
        "PENNY": .01,
        "NICKEL": .05,
        "DIME": .10,
        "QUARTER": .25,
        "ONE": 1.00,
        "FIVE": 5.00,
        "TEN": 10.00,
        "TWENTY": 20.00,
        "ONE HUNDRED": 100.00
      }

    let totalCID = cid.reduce((acc, currVal) => acc + currVal[1], 0).toFixed(2);

    
    let totalChange = cash - price;

    const changeArr = []

    if (totalChange > totalCID) {
        return changeDue.textContent = "Status: INSUFFICIENT_FUNDS"
    } 
    if (totalChange.toFixed(2) === totalCID) {
        return changeDue.textContent = `Status: CLOSED ${cid.map(item => item[0] + ": $" + item[1]).join(", ")}`
    } else {
        cid = cid.reverse()
        for (let item of cid) {
            let temp = [item[0], 0]
            while (totalChange >= UNIT_AMOUNT[item[0]] && item[1] > 0) {
                temp[1] += UNIT_AMOUNT[item[0]]
                item[1] -= UNIT_AMOUNT[item[0]]
                totalChange -= UNIT_AMOUNT[item[0]]
                totalChange = totalChange.toFixed(2)
            }
            if (temp[1] > 0) {
                changeArr.push(temp)
            }
        }
    }
    if (totalChange > 0) {
        return changeDue.textContent = "Status: INSUFFICIENT_FUNDS"

    }
    return changeDue.textContent = `Status: OPEN, ${changeArr.map(item => item[0] + ": $" + item[1]).join(", ")}`
}

purchaseBtn.addEventListener("click", () => {
    let cash = Number(cashInput.value);
    changeDue.textContent = "";
    if (cash < price) {
        alert("Customer does not have enough money to purchase the item")
    } else if (cash === price) {
        changeDue.innerText = "No change due - customer paid with exact cash"
    } else {
        calChange(cash, price, cid)
    }
})