document.getElementById('btn-cash-out').addEventListener('click', function (event){
event.preventDefault();
console.log('cashout button clicked');

const cashOut = document.getElementById('input-cashout').value;
const cashOutNumber = parseFloat(cashOut);
const cashOutPin = document.getElementById('input-cashout-pin-number').value

console.log(cashOut, cashOutPin) 

//  wrong way to varify pin number
if(cashOutPin === '436469'){
    const balance = document.getElementById('account-balace').innerText;
   
    const balanceNumber = parseFloat(balance);

    // reduce the balance 
    const newBalance = balanceNumber - cashOutNumber;

    // update the Ui
    document.getElementById('account-balace').innerText = newBalance;
}
else{
    alert('failed to cashout. please try again later');
}
})


