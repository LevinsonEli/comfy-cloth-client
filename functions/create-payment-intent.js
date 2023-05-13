//
//
// doamin/8888/.netlify/functions/create-payment-intent

require('dotenv').config();

const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY);

exports.handler = async function (event, context) {
  if (event.body) {
    const { cart, shipping_fee, total_amount } = JSON.parse(event.body);

    const calculateOrderAmount = () => {
        return shipping_fee + total_amount;
    }

    try {
        console.log("HERE");
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: 'usd',
      });
        console.log("THERE");

      console.log(paymentIntent);

      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (error) {
        console.log(error);
      return { statusCode: 404, body: 'Failed to pay' };
    }
  } else {
    return { statusCode: 200, body: 'create payment intent' };
  }
};
