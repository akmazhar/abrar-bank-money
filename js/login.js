//step-1: add click event handler with the submit button
// console.log('login js file')
document.getElementById('btn-submit').addEventListener('click', function(){
   console.log('submit button clicked');

   //step-2: get the email address inside the email input field
   //set id on the html element
   //always remember to use .value to get text from an input field
   const emailField = document.getElementById('user-email');
   const email = emailField.value;
   console.log(email);
    //step-3: get the password inside the email input field
   //set id on the html element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
   console.log(password);
   //DO NOT VERIFY email password on the client side.

   if(email === 'akm@gmail.com' && password === 'secret'){
      window.location.href='index.html';
   }
   else{
       alert('invalid password')
   }
})

// deposit js file..........................
//step-1: add event listener to the deposit button.
// console.log('deposit.js');
// document.getElementById('btn-deposit').addEventListener('click', function(){
//    console.log('deposit button clicked')
// })
//step-3: get the deposit amount
// always remember to use .value to get text from an input field

 // console.log(typeof newDepositAmount);
   // console.log(depositAmount);
   //step-4:get the current deposit total
   //for non input (element other than input, textarea) use innerText to get the text
      // const currentDepositTotal = depositTotal + newDepositAmount;

//..........................
// document.getElementById('btn-deposit').addEventListener('click', function(){
//    const depositField = document.getElementById('deposit-field');
//    const depositAmount = depositField.value;
//    const depositTotalElement = document.getElementById('deposit-total');
//    const depositTotal = depositTotalElement.innerText;
//    depositTotalElement.innerText = depositAmount;
 
// })
//...............................
//this is string value
// document.getElementById('btn-deposit').addEventListener('click', function(){
// const depositField = document.getElementById('deposit-field');
// const depositAmount = depositField.value;
// const depositTotalElement = document.getElementById('deposit-total');
// const depositTotal = depositTotalElement.innerText;
// depositTotalElement.innerText = depositAmount;
// console.log(typeof depositAmount);})
//----------------------------------------------------
// VVI
   document.getElementById('btn-deposit').addEventListener('click', function(){
   const depositField = document.getElementById('deposit-field');
   const newDepositAmountString = depositField.value;
   const newDepositAmount = parseFloat(newDepositAmountString);
   
   const depositTotalElement = document.getElementById('deposit-total');
   const previousDepositTotalString = depositTotalElement.innerText;
   const previousDepositTotal = parseFloat(previousDepositTotalString);
//    console.log(typeof previousDepositTotal);
   const currentDepositTotal = previousDepositTotal + newDepositAmount;
//set the deposit total
   depositTotalElement.innerText = currentDepositTotal;

   // step: get the balance total
   const balanceTotalElement = document.getElementById('balance-total');
   const previousBalanceTotalString = balanceTotalElement.innerText;
   const previousBalanceTotal = parseFloat(previousBalanceTotalString);

   // step : calculate current total
   const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

   // set the balance total
   balanceTotalElement.innerText = currentBalanceTotal;

   //step-4: clear the deposit field
   depositField.value = '';
})

//====================================================

// withdraw//===>>>

//1. add event handler with the withdraw button
//2. get the withdraw amount from the withdraw input field
//3. also make sure to convert the input into a number by using parseFloat
//4. get previous withdraw total
//5. calculate total withdraw amount
//6. set total withdraw amount
//7. clear the input field
//8.get the previous balance total
//9.calculate new balance total
//10. set the new balance total

//step-1:
document.getElementById('btn-Withdraw').addEventListener('click', function(){
   // console.log('Withdraw button clicked');
  
//step-2:
   const withdrawField = document.getElementById('withdraw-field');
   const newWithdrawAmountString = withdrawField.value;
   const newWithdrawAmount = parseFloat(newWithdrawAmountString);
   console.log(newWithdrawAmount);
   
//step-5: clear the input field
withdrawField.value = '';

   if(isNaN(newWithdrawAmount)){
      alert('please provide a valid number');
      return;
   }

//step-3:
   const withdrawTotalElement = document.getElementById('withdraw-total');
   const previousWithdrawTotalString = withdrawTotalElement.innerText;
   const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
   // console.log(previousWithdrawTotal);
//step-4:
const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
withdrawTotalElement.innerText = currentWithdrawTotal;

//step-5: clear the input field
withdrawField.value = '';

//step-6:
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);



if(newWithdrawAmount > previousBalanceTotal){
   alert('Not enough bdt for withdraw');
   return; 
}


//step-7:
const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
balanceTotalElement.innerText = newBalanceTotal;
// console.log(previousBalanceTotal);


})


