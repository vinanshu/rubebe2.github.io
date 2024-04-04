var orders = []; // Array to hold orders

function order(pastaName, price) {
    var quantity = parseInt(prompt("Enter quantity for " + pastaName, "1"));
    if (!isNaN(quantity) && quantity > 0) {
        orders.push({
            pastaName: pastaName,
            price: price,
            quantity: quantity
        });
        updateOrdersSummary();
    } else {
        alert("Please enter a valid quantity.");
    }
}

function updateOrdersSummary() {
    var summaryContainer = document.getElementById('ordersSummary');
    var summaryHTML = '<h3>Orders Summary:</h3>';
    if (orders && orders.length > 0) {
        summaryHTML += '<ul>';
        orders.forEach(function(order) {
            summaryHTML += '<li>' + order.quantity + ' x ' + order.pastaName + ' - ' + '₱' + (order.price * order.quantity).toFixed(2) + '</li>';
        });
        summaryHTML += '</ul>';
    } else {
        summaryHTML += '<p>No orders added yet.</p>';
    }
    summaryContainer.innerHTML = summaryHTML;
}

function confirmOrder() {
    if (orders.length > 0) {
        localStorage.setItem("orders", JSON.stringify(orders));
        window.open("order.html", "_blank");
    } else {
        alert("Please add some orders before confirming.");
    }
}
