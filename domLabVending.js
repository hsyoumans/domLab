
//Run the vending machine, select the snack, calculate the money
let total = 0;

function updateTotal(amount) {
	total += amount;
	const totalElement = document.getElementById('total');
	totalElement.innerHTML = `$${total}`;
}

document.body.addEventListener('click', (event) => {
	updateTotal(+event.target.getAttribute('data-price'));
});

