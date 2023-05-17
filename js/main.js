// ! VARIABLES

// ? BUDGET
let budgetFormInput = document.querySelector("#budgetForm");
let bud = document.querySelector("#bud");
let submitBudget = document.querySelector("#submitBudget");

// ? EXPENSES
let expensesFormInputName = document.querySelector("#expensesFormName");
let ex = document.querySelector("#ex");
let expensesFormInputAmount = document.querySelector("#expensesFormAmount");
let submitExpenses = document.querySelector("#submitExpenses");

// ? MISC
let warningMessage01 = document.querySelector("#warningMessage01");
let warningMessage02 = document.querySelector("#warningMessage02");
let accountTable = document.querySelector("#accountTable");
let itemisedTable = document.querySelector("#itemisedTable");
let itemTable = document.querySelector("#itemisedTable");

// let editingIdx;

// // CONSTRUCTORS
// let budgets = [];
// class Budget {
//   constructor(income) {
//     this.income = income;
//   }
// }

// let expenditure = [];
// // let itemisedArray = [];
// class Spending {
//   constructor(outgoing) {
//     // this.title = title;
//     this.outgoing = outgoing;
//   }
// }

// todo FUNCTIONS
// !BUDGET
function addBudget(e) {
  e.preventDefault();
  //   let balance = 0;
  if (budgetFormInput.value == "") {
    warningMessage01.style.display = "block";
    warningMessage01.style.color = "red";
  } else {
    let budgetValue = parseInt(budgetFormInput.value);
    bud.innerHTML = parseInt(bud.innerHTML) + budgetValue;
    bal.innerHTML = parseInt(bal.innerHTML) + budgetValue;
    // let newBudgetAmount = new Budget(budgetValue);
    // budgets.push(newBudgetAmount.income);
    // console.log(budgets);
    // bud.innerHTML = budgets.reduce(function (a, b) {
    //   return a + b;
    // });
    // bal.innerHTML = budgets.reduce(function (a, b) {
    //   return a + b;
    // });

    budgetFormInput.value = "";
  }
  budgetFormInput.addEventListener("focus", function () {
    warningMessage01.style.display = "none";
  });
}

submitBudget.addEventListener("click", addBudget);

// !EXPENSE

function addExpense(e) {
  e.preventDefault();

  // todo THIS SECTION WILL ADD THE AMOUNT ONLY TO THE ACCOUNT SECION ON THE UPPER PART OF THE HTML
  let expenseValue = parseInt(expensesFormInputAmount.value);

  //   let title = expensesFormInputName.value;
  //   let newExpenseAmount = new Spending(expenseValue);
  //   expenditure.push(newExpenseAmount.outgoing);
  //   console.log(expenditure);
  ex.innerHTML = parseInt(ex.innerHTML) + expenseValue;
  bal.innerHTML = parseInt(bal.innerHTML) - expenseValue;
  //   let incoming = budgets.reduce(function (a, b) {
  //     return a + b;
  //   });
  //   console.log(incoming);
  //   let out = expenditure.reduce(function (a, b) {
  //     return a + b;
  //   });
  //   bal.innerHTML = incoming - out;
  //   ex.innerHTML = out;
  expensesFormInputAmount.value = "";
  //   todo THIS SECTION WILL ADD THE NAME AND AMOUNT TO THE ITEMISED SECTION ON THE LOWER PART OF THE HTML

  let itemRow = document.createElement("tr");
  let tdExName = document.createElement("td");
  tdExName.innerHTML = expensesFormInputName.value;
  let tdExAmount = document.createElement("td");
  tdExAmount.innerHTML = expenseValue;

  let buttonsArea = document.createElement("td");

  //   todo THIS SECTION WILL ADD THE EDIT BUTTON
  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.classList.add("btn", "btn-success", "mx-1");
  editBtn.addEventListener("click", function () {
    expensesFormInputName.value = tdExName.innerHTML;
    expensesFormInputAmount.value = tdExAmount.innerHTML;
    bal.innerHTML - parseInt(tdExAmount.innerHTML);
    itemRow.remove();
  });
  //   function editNumbers(){
  //     let totalBudget = budgets.reduce(function (a, b) {
  //       return a + b;
  //     });
  //     // console.log(incoming);
  //     let totalSpending = expenditure.reduce(function (a, b) {
  //       return a + b;
  //     });
  //     let newTotalSpending = totalSpending - expensesFormInputAmount.value;
  //     ex.innerHTML = newTotalSpending - expensesFormInputAmount.value;

  //     bal.innerHTML = totalBudget - totalSpending;

  //   }

  //   todo THIS SECTION WILL ADD THE DELETE BUTTON
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("btn", "btn-danger", "mx-1");
  deleteBtn.addEventListener("click", function (e) {
    e.currentTarget.parentNode.parentNode.remove();
    deletion();
    // itemRow.remove();
    // ex.innerHTML = ex.innerHTML - expensesFormInputAmount.value;
    // bal.innerHTML = bal.innerHTML - expensesFormInputAmount.value;
  });

  function deletion() {
    bal.innerHTML = expensesFormInputAmount.innerText - ex.innerText;

    console.log(expensesFormInputAmount.innerText);
  }

  //   todo APPEND AREA
  buttonsArea.append(editBtn, deleteBtn);
  itemRow.append(tdExName, tdExAmount, buttonsArea);
  itemTable.append(itemRow);
  expensesFormInputName.value = "";
}

submitExpenses.addEventListener("click", addExpense);
