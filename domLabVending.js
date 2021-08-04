//create the buttons
function createButton() {
  var btn = document.createElement("BUTTON");
  document.body.appendChild(btn);
}

function createTotal() {
  var x = document.createElement("input");
  x.setAttribute("type", "number");
  x.setAttribute("value", price);
  document.body.appendChild(x);
};

//Array of snacks
const snacks = [
  {
    "name": "Lime Cola",
    "price": 2.00
  },
  {
    "name": "Salted Peanuts",
    "price": 3.00
  },
  {
      "name": "Chocolate Bar",
      "price": 4.00
    },
    {
      "name": "Fruit Gummies",
      "price": 6.00
    }
];

//Run the vending machine, select the snack, calculate the money
function vendingMachine(snack, cost) {  
  const selected_snack = snacks.find(item => item.name === snack);

  if (selected_snack) {
      if (selected_snack.price === cost) {
          return `Your ${snack} has been served`;
      }
      else {
          if (selected_snack.price > cost) {
              return `You have insufficient funds. Please insert more cash.`;
          }
          else {
              return `Your ${snack} has been served. Here is your $${cost - selected_snack.price} change.`;
          }
      }
  }

  else {
      return `${snack} does not exist. Please try again`
  }
};

function clickHandler(event) {
  if (button = )
}

btn.addEventListener("click", clickHandler);