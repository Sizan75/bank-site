document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawFeild = document.getElementById('withdraw');
    const withdraw = withdrawFeild.value;
    const newwithdraw= parseFloat(withdraw);
    // part2
    const totalwithdraw = document.getElementById('withdraw-amount');
    const previuswithdrawstring= totalwithdraw.innerText;
    const previouswithdraw =parseFloat(previuswithdrawstring);
    const currentTotalwithdraw = previouswithdraw + newwithdraw ;
    totalwithdraw.innerText =currentTotalwithdraw;

    // part3
    const balanceTotal = document.getElementById('total-balance');
    const previousBalancestring = balanceTotal.innerText;
    const previusBalance = parseFloat(previousBalancestring);
    const newTotalBalance = previusBalance - newwithdraw ;
    balanceTotal.innerText=newTotalBalance;
})