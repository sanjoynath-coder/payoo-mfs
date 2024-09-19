/**
 * 1. add event listener to the add Money button (form submit)
 * make sure to preventDefault so that page dosent reloads
 * 2. get the money user wants to add 
 * also, get the pin number provided
 * 3.verify the pin number. fot, wrong pin number ===> failed to add
 * for right pin number,allow to add the number to the account balance 
 * 
 * 4. get the curret balance
 * 
 * 5.add money to be added with the current balance
 * 
 * 6. display/update the balance in the DOM/UI
 * 
 */

// step -1: add event listener to add money button
document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault();
        // console.log('added the event handler');

        // step -2 get money and pin number
        const addMoney = document.getElementById('input-add-money').value;
        const addMoneyNuymber = parseFloat(addMoney);
        const pinNumber =  document.getElementById('input-pin-number').value;
        // console.log(addMoney, pinNumber)

        if (pinNumber === '436469'){
            // add momey to the account
            console.log('added the money');
            const balance = document.getElementById('account-balace').innerText;
            const balanceNumber = parseFloat(balance);

            // new balance 
            const updatedBalance = balanceNumber + addMoneyNuymber;

            // update the DOM with updated balance;

            document.getElementById('account-balace').innerText =updatedBalance;
        }
        else {
        alert('failed to add money try again');
        }
});