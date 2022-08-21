document.getElementById('deposite-button').addEventListener('click', function(){
    const depositeFeild = document.getElementById('deposite');
    const deposite = depositeFeild.value;
    const newdeposite= parseFloat(deposite);
    // part2
    const totalDeposite = document.getElementById('deposite-amount');
    const previusDepositstring= totalDeposite.innerText;
    const previousDeposite =parseFloat(previusDepositstring);
    const currentTotalDeposite = previousDeposite + newdeposite ;
    totalDeposite.innerText =currentTotalDeposite;

    // part3
    const balanceTotal = document.getElementById('total-balance');
    const previousBalancestring = balanceTotal.innerText;
    const previusBalance = parseFloat(previousBalancestring);
    const newTotalBalance = previusBalance + newdeposite ;
    balanceTotal.innerText=newTotalBalance;
})