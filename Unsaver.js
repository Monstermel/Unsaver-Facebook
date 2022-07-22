function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

let counter = 0;
let current_item = true;

console.log("Starting deleting process");
while (current_item = document.querySelector('.oi9244e8 [aria-label="More"]')) {
	console.log("Deleting item %d:", counter++);
	current_item.click();

	await sleep(250);

	current_item = document.querySelector('[role="menuitem"]');
	current_item.click();

	console.log("	Item deleted");

	await sleep(250);
}

console.log("%d items deleted", counter);