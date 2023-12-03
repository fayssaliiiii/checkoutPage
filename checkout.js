// paypal.Buttons({
//   createOrder: function(data, actions) {
//     const amount = document.getElementById('amount').value;
//     return actions.order.create({
//       purchase_units: [{
//         amount: {
//           value: amount,
//         },
//       }],
//     });
//   },
//   onApprove: function(data, actions) {
//     return actions.order.capture().then(function(details) {
//       alert('Transaction completed by ' + details.payer.name.given_name);
      
//       fetch('/execute-payment', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           paymentId: data.orderID,
//           payerId: data.payerID,
//         }),
//       })
//       .then(response => response.json())
//       .then(data => {
//         console.log('Payment success:', data);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//     });
//   },
// }).render('#paypal-button-container');
// console.log('Executing checkout.js');

// paypal.Buttons({
//   // ... your existing code
// }).render('#paypal-button-container');
