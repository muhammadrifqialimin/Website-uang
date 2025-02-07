// script.js
document
  .getElementById("transaction-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Memutar suara
    var clickSound = document.getElementById("click-sound");
    clickSound.play();

    const description = document.getElementById("description").value;
    const amount = parseFloat(document.getElementById("amount").value);
    addTransaction(description, amount);

    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";
  });

let transactions = [];

function addTransaction(description, amount) {
  const transaction = { description, amount };
  transactions.push(transaction);
  updateBalance();
  updateTransactionList();
}

function updateBalance() {
  const balance = transactions.reduce(
    (total, transaction) => total + transaction.amount,
    0
  );
  document.getElementById("balance").textContent = `Saldo: Rp ${balance}`;
}

function updateTransactionList() {
  const transactionList = document.getElementById("transaction-list");
  transactionList.innerHTML = "";
  transactions.forEach((transaction) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${transaction.description} - Rp ${transaction.amount}`;
    transactionList.appendChild(listItem);
  });
}
