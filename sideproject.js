document.addEventListener("DOMContentLoaded", () => {
  let totalbalanceElement = document.getElementById("total balance");
  let incomeElement = document.getElementById("income");
  let expenseElement = document.getElementById("expense");
  let adddescriptionInput = document.getElementById("add description");
  let value1Input = document.getElementById("value");
  let button = document.getElementById("button");
  let incomelist = document.getElementById("income-list");
  let expenselist = document.getElementById("expense-list");

  let transactions = [];
  let transaction1 = [];
  function updateBalance() {
    const total = transactions.reduce(
      (acc, transaction) => acc + transaction.amount,
      0
    );
    totalbalanceElement.textContent = `₹. ${total.toFixed(2)}`;
  }

  function updateincome() {
    const total = transactions.reduce(
      (acc, transaction) => acc + transaction.amount,
      0
    );
    incomeElement.textContent = `₹. ${total.toFixed(2)}`;
  }
  function updateexpense() {
    const total = transaction1.reduce(
      (acc, transaction1) => acc - transaction1.amount,
      0
    );
    expenseElement.textContent = `₹. ${total.toFixed(2)}`;
    const positiveValue = transactions.reduce(
      (acc, transaction) => acc + transaction.amount,
      0
    );
    const ans = positiveValue + total;
    totalbalanceElement.textContent = `₹. ${ans.toFixed(2)}`;
  }

  function renderIncomelist() {
    incomelist.innerHTML = "";
    transactions.forEach((transaction, index) => {
      const li = document.createElement("li");
      li.textContent = `${
        transaction.description
      }:₹.${transaction.amount.toFixed(2)}`;
      incomelist.appendChild(li);
    });
  }

  function renderExpenselist() {
    expenselist.innerHTML = "";
    transaction1.forEach((transaction, index) => {
      const li = document.createElement("li");
      li.textContent = `${
        transaction.description
      }:₹.${transaction.amount.toFixed(2)}`;
      expenselist.appendChild(li);
    });
  }

  button.addEventListener("click", (event) => {
    event.preventDefault();

    const description = adddescriptionInput.value.trim();
    const amount = parseFloat(value1Input.value.trim());
    let sign = document.getElementById("sign");
    const sign1 = sign.value.trim();

    if (description && amount && sign1.includes("+")) {
      transactions.push({ description, amount });
      // updateBalance();
      updateBalance();
      updateincome();
      renderIncomelist();

      adddescriptionInput.value = "";
      value1Input.value = "";
      return;
    } else if (description && amount && sign1.includes("-")) {
      transaction1.push({ description, amount });
      updateexpense();
      renderExpenselist();

      adddescriptionInput.value = "";
      value1Input.value = "";
      return;
    }
  });
});
