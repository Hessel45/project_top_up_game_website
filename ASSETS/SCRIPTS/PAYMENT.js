function calculatePrice() {
    const amount = document.getElementById('amount').value;
    const pricePerUnit = 1000; // Set price per unit as needed
    const totalPrice = amount * pricePerUnit;
    document.getElementById('totalPrice').value = totalPrice.toFixed(2);
}

document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Transaction Successful!');
    // Here you can add the code to handle the form submission
});

function goToHomepage() {
    window.location.href = 'INFINITE.html'; // Set the homepage URL
}
