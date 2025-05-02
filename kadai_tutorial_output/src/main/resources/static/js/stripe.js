const stripe = Stripe('pk_test_51RFBrNQlKG4MRzyxrtLuB03EkIe9cTHVrFWEbOTna2FD2WpxZGd536BubIkdoEc3xxN8AOjM63YGUjHN0T4ZSXPi00SOYWOAcK');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
 stripe.redirectToCheckout({
   sessionId: sessionId
 })
});