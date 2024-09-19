// console.log('button clicking file added')


// document.gerElementById('id').addEventListener('click', 'function')

// task: sharch(form submilt reloading page)

// step - 1 set event handler
// document.getElementById('button-login')
//     .addEventListener('click', function (event){
//         // step - 2 prevent default behavior (prevent reloading browser);
//         event.preventDefault();
//         // console.log('login button clicked');

// // step - 3 get the phone number (get inner text or value)
//         const phoneNumber = document.getElementById('phone-number').value;
//         const pinNumber = document.getElementById('pin-number').value;
//         console.log(phoneNumber);
//         console.log(pinNumber)
//     })

//     // Step -4 validate phone or pin
//     // this is tenporary (we should not do like this)
//     if(phoneNumber === '01893436469' && pinNumber === '436469'){
//         console.log('you are loged in');
//         // step - 5 allow user to use the website
//     }
//     else{
//         console.log('Wrong phone number or pin');
//     }


// lets code in clean way

document.getElementById('button-login').addEventListener('click', function(event){
event.preventDefault();

    // get phone numner or pin

    const phoneNumber = document.getElementById('phone-number').value
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber)


    // bad way to valedate;
    if(phoneNumber === '01893436469' && pinNumber === '436469'){
        console.log('you are loged in');
        window.location.href = './home.html'
    }
    else{
        console.log('Wrong phone number or pin')
    }
})