//step-1: add click event handler with the submit button
//console.log('login js file')
document.getElementById('btn-submit').addEventListener('click', function(){
   //console.log('submit button clicked');
   //step-2: get the email address inside the email input field
   //set id on the html element
   //always remember to use .value to get text from an input field
   const emailField = document.getElementById('user-email');
   const email = emailField.value;
   //console.log(email);
    //step-3: get the password inside the email input field
   //set id on the html element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
   //console.log(password);
   //DO NOT VERIFY email password on the client side.

   if(email === 'akm@gmail.com' && password === 'secret'){
      window.location.href='bank.html';
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