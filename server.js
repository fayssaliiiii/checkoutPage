// const express = require('express');
// const bodyParser = require('body-parser');
// const paypal = require('paypal-rest-sdk');

// const app = express();
// const PORT = 3000;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// paypal.configure({
//   mode: 'sandbox',
//   client_id: 'YOUR_PAYPAL_CLIENT_ID',
//   client_secret: 'YOUR_PAYPAL_CLIENT_SECRET',
// });

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// app.get('/checkout', (req, res) => {
//   res.sendFile(__dirname + '/checkout.html');
// });

// app.post('/create-payment', (req, res) => {
//   const amount = req.body.amount;

//   const create_payment_json = {
//     intent: 'sale',
//     payer: {
//       payment_method: 'paypal',
//     },
//     transactions: [{
//       amount: {
//         total: amount,
//         currency: 'USD',
//       },
//     }],
//     redirect_urls: {
//       return_url: 'http://localhost:3000/execute-payment',
//       cancel_url: 'http://localhost:3000/cancel-payment',
//     },
//   };

//   paypal.payment.create(create_payment_json, (error, payment) => {
//     if (error) {
//       console.error('Error creating payment:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     } else {
//       console.log('Create Payment Response');
//       console.log(payment);
//       res.json({ paymentId: payment.id });
//     }
//   });
// });

// app.post('/execute-payment', (req, res) => {
//   const paymentId = req.body.paymentId;
//   const payerId = req.body.payerId;

//   const execute_payment_json = {
//     payer_id: payerId,
//   };

//   paypal.payment.execute(paymentId, execute_payment_json, (error, payment) => {
//     if (error) {
//       console.error('Error executing payment:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     } else {
//       console.log('Execute Payment Response');
//       console.log(JSON.stringify(payment));
//       res.send('Payment Success!');
//       console.log('yeeeeeeeeeeeeeeeee')
//     }
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
//   console.log('Executing checkout.js');
// });
// app.get('/logo.svg', (req, res) => {
//     res.sendFile(__dirname + '/logo.svg');
//   });
  