// add money to the account
/*
step -1: add event handler
prevent page reload after form submit
step -2: get money to be added to the account balance
get the pin number

step -3: verify in number 
*/



// step - 1: add an event handler to the add money button inside the form
document.getElementById('btn-add money')
.addEventListener('click', function(event){
    // prevent page reload after form submit
    event.preventDefault();

    // get money to be added to the account ammount
    const addMoneyInput  =document.getElementById('input-add-money').value
    console.log( typeof addMoneyInput);

    // get the pin numner provided
    const pinNumberInput = document.getElementById('input-pin-number').value
    console.log(pinNumberInput);

    // step -3: verify pin number
    // wrong way to validate pin number
    if(pinNumberInput === '436469'){
        console.log('adding money to to your account');

        // step -4:  get the current balance
        const balance = document.getElementById('account-balace').innerText
        console.log(typeof balance)

        // step -5: add sddMoneyInput with balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance)
       const newBalance = addMoneyNumber + balanceNumber;
       console.log(newBalance)

    //    step -6: update the balance in the UI/DOM
        document.getElementById('account-balace').innerText = newBalance;
    }
    else{
        alert('fails to add money! please try again.')
    }
})