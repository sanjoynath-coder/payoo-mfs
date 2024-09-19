// show the the cssh out form
document.getElementById('btn-show-cashout')
    .addEventListener('click', function () {

        // show cash out button clicked
        console.log('show cash out button clicked')
        document.getElementById('')
        document.getElementById('cash-out-form').classList.remove('hidden');

        // hide the add money form
        document.getElementById('add-money-form').classList.add('hidden');

    })


    // show add money forn and hide the cash out form
    document.getElementById('btm-show-add-money')
    .addEventListener('click', function(){

        document.getElementById('add-money-form').classList.remove('hidden');
        document.getElementById('cash-out-form').classList.add('hidden');

    })