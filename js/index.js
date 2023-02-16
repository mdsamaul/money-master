function userInputNumberId(userInput) {

    const userInputNumberStringElement = document.getElementById(userInput);
    const userInputNumberString = userInputNumberStringElement.value;
    userInputNumberStringElement.value = '';
    const userInputNumber = parseInt(userInputNumberString);
    return userInputNumber;
}


let incameAmount;
let totalBalance;


document.getElementById('calculate-btn').addEventListener('click', function (event) {

    incameAmount = userInputNumberId('income-user');
    const foodCost = userInputNumberId('food-cost');
    const rentCost = userInputNumberId('rent-cost');
    const clthesCost = userInputNumberId('clthes-cost');
    const totalCost = foodCost + rentCost + clthesCost;
    const getExponsesStrintElement = document.getElementById('total-expenses');
    // const getExponsesStrint = getExponsesStrintElement.innerText;
    getExponsesStrintElement.innerText = totalCost;
    const getBalanceStringElement = document.getElementById('balance-field');
    totalBalance = incameAmount - totalCost;
    getBalanceStringElement.innerText = totalBalance;
    // console.log(incomeUser);


});



document.getElementById('save-balance').addEventListener('click', function () {

    const savintParsentengesElement = userInputNumberId('percentage-input');
    const saveingAmount = (incameAmount / 100) * savintParsentengesElement;
    const savingAmountElement = document.getElementById('saving-amount');
    savingAmountElement.innerText = saveingAmount;
    const remainingAmountElement = document.getElementById('remaining-balance');
    const remainingAmount = totalBalance - saveingAmount;
    remainingAmountElement.innerText = remainingAmount;
})