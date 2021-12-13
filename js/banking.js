// handle deposite
document.getElementById('deposit-button').addEventListener('click', function () {
    // get ammounte deposit
    let depositInput = document.getElementById('Deposit-input')
    // let depositeAmout = depositInput.value
    let newDepositetext = depositInput.value
    let newDepositeAmout = parseFloat(newDepositetext)
    // console.log(depositeAmout)

    let depositTotal = document.getElementById('deposit-total');
    // depositTotal.innerText = depositeAmout;
    let previousDepositText = depositTotal.innerText;
    let previousDepositAmount = parseFloat(previousDepositText);
    let newDepositTotal = previousDepositAmount + newDepositeAmout;
    depositTotal.innerText = newDepositTotal;

    // balance total
    let balanceTotal = document.getElementById('balance-total');
    let balancetext = balanceTotal.innerText;
    let previousBalanceTotal = parseFloat(balancetext);
    let newBalanceTotal = previousBalanceTotal + newDepositeAmout;
    balanceTotal.innerText = newBalanceTotal;



    // clear deposit input value
    depositInput.value = ''

})

// handel withdrow
document.getElementById('withdrow-button').addEventListener('click', function () {
    // console.log('click withdrow')
    let withdrawInput = document.getElementById('withdrow-input');
    // let withdrawAmount = withdrawInput.value;
    let withdrawText = withdrawInput.value;
    let newWithdrawAmount = parseFloat(withdrawText);
    console.log(newWithdrawAmount)

    // set withdraw total
    let withdrawTotal = document.getElementById('withdrow-total');
    let previousWithdrawText = withdrawTotal.innerText;
    let previousWithdrawTotal = parseFloat(previousWithdrawText);
    let newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // set balance amount
    let balanceTotal = document.getElementById('balance-total');
    let previousBalanceText = balanceTotal.innerText;
    let previousBalanceTotal = parseFloat(previousBalanceText);
    let newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear withdraw field
    withdrawInput.value = ''
})