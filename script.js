"use strict";

// Data
function newAccount(name, trans, interest, pin, dates, code, locale) {
  this.owner = name;
  this.movements = trans;
  this.interestRate = interest;
  this.pin = pin;
  this.movementsDate = dates;
  this.countryCode = code;
  this.locale = locale;
}

const account1 = new newAccount(
  "Anmol Jain",
  [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  1.2,
  1111,
  [
    "2020-11-18T21:31:17.178Z",
    "2020-12-23T07:42:02.383Z",
    "2021-01-28T09:15:04.904Z",
    "2021-04-01T10:17:24.185Z",
    "2021-06-08T14:11:59.604Z",
    "2021-11-26T17:01:17.194Z",
    "2022-01-28T23:36:17.929Z",
    "2022-02-25T10:51:36.790Z",
  ],
  "INR",
  "en-IN"
);

const account2 = new newAccount(
  "Nitin Mahrishi",
  [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  1.5,
  2222,
  [
    "2020-11-18T21:31:17.178Z",
    "2020-12-23T07:42:02.383Z",
    "2021-01-28T09:15:04.904Z",
    "2021-04-01T10:17:24.185Z",
    "2021-06-08T14:11:59.604Z",
    "2021-11-26T17:01:17.194Z",
    "2022-01-28T23:36:17.929Z",
    "2022-02-25T10:51:36.790Z",
  ],
  "JPY",
  "ja-JP"
);

const account3 = new newAccount(
  "Vishal Chauhan",
  [200, -200, 340, -300, -20, 50, 400, -460],
  0.7,
  3333,
  [
    "2020-11-18T21:31:17.178Z",
    "2020-12-23T07:42:02.383Z",
    "2021-01-28T09:15:04.904Z",
    "2021-04-01T10:17:24.185Z",
    "2021-06-08T14:11:59.604Z",
    "2021-11-26T17:01:17.194Z",
    "2022-01-28T23:36:17.929Z",
    "2022-02-25T10:51:36.790Z",
  ],
  "EUR",
  "pt-PT"
);
const account4 = new newAccount(
  "Upendra Kumar Chauhan",
  [430, 1000, 700.87, 5077, 790],
  1,
  4444,
  [
    "2021-04-01T10:17:24.185Z",
    "2021-06-08T14:11:59.604Z",
    "2021-11-26T17:01:17.194Z",
    "2022-01-28T23:36:17.929Z",
    "2022-02-25T10:51:36.790Z",
  ],
  "INR",
  "en-IN"
);
const account5 = new newAccount(
  "Jasmine Shaikh",
  [2000, -100, 3000, 2000, -1500, 500],
  2.5,
  5555,
  [
    "2021-01-28T09:15:04.904Z",
    "2021-04-01T10:17:24.185Z",
    "2021-06-08T14:11:59.604Z",
    "2021-11-26T17:01:17.194Z",
    "2022-01-28T23:36:17.929Z",
    "2022-02-25T10:51:36.790Z",
  ],
  "JPY",
  "ja-JP"
);
const account6 = new newAccount(
  "Mishti Jain",
  [200, 7000, 3000, -2000, -1500, 1500, 800, 500],
  1.1,
  6666,
  [
    "2020-11-18T21:31:17.178Z",
    "2020-12-23T07:42:02.383Z",
    "2021-01-28T09:15:04.904Z",
    "2021-04-01T10:17:24.185Z",
    "2021-06-08T14:11:59.604Z",
    "2021-11-26T17:01:17.194Z",
    "2022-01-28T23:36:17.929Z",
    "2022-02-25T10:51:36.790Z",
  ],
  "USD",
  "en-US"
);
const account7 = new newAccount(
  "Ridhimaa Jain",
  [2000, 17000, 3000, -2000, -1500, 1500, 800, 500],
  1.1,
  7777,
  [
    "2020-11-18T21:31:17.178Z",
    "2020-12-23T07:42:02.383Z",
    "2021-01-28T09:15:04.904Z",
    "2021-04-01T10:17:24.185Z",
    "2021-06-08T14:11:59.604Z",
    "2021-11-26T17:01:17.194Z",
    "2022-01-28T23:36:17.929Z",
    "2022-02-25T10:51:36.790Z",
  ],
  "EUR",
  "pt-PT"
);

const accounts = [
  account1,
  account2,
  account3,
  account4,
  account5,
  account6,
  account7,
];
console.log(accounts);
// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");
const login_container = document.querySelector(".login");
const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");
const btnLogout = document.querySelector(".logout_btn");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");
const loader = document.querySelector(".main_preloader");

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
let currentAccount, transferAccount, sorted, timer;

///Modal Window
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Creating Username
createUsernames(accounts);

function createUsernames(accounts) {
  accounts.forEach((el) => {
    el.username = el.owner
      .toLowerCase()
      .split(" ")
      .map((el) => el[0])
      .join("");
  });
}

function updateUI(currentAccount) {
  displayMovments(currentAccount);
  calcDisplayBalance(currentAccount);
  calcDisplaySummary(currentAccount);
}

function formatMovementDate(date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  return new Intl.DateTimeFormat(locale).format(date);
}

function formatcurr(value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
}

function sortMovements(movs, dates) {
  const arrCombined = [],
    sortedMovs = [],
    sortedDates = [];

  movs.forEach((el, i) => arrCombined.push([movs[i], dates[i]]));
  arrCombined.sort((a, b) => a[0] - b[0]);
  arrCombined.forEach((el) => {
    sortedMovs.push(el[0]);
    sortedDates.push(el[1]);
  });

  return [sortedMovs, sortedDates];
}

function displayMovments(currentAccount, sorted = false) {
  containerMovements.innerHTML = "";

  const [movs, dates] = sorted
    ? sortMovements(currentAccount.movements, currentAccount.movementsDate)
    : [currentAccount.movements, currentAccount.movementsDate];
  movs.forEach((mov, i) => {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const date = new Date(dates[i]);

    const displayDate = formatMovementDate(date, currentAccount.locale);
    const formattedMov = formatcurr(
      mov,
      currentAccount.locale,
      currentAccount.countryCode
    );
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
}

function calcDisplayBalance(currentAccount) {
  currentAccount.balance = currentAccount.movements.reduce(
    (prev, curr) => prev + curr
  );

  labelBalance.textContent = formatcurr(
    currentAccount.balance.toFixed(2),
    currentAccount.locale,
    currentAccount.countryCode
  );
}

function calcDisplaySummary(currentAccount) {
  const income = currentAccount.movements
    .filter((mov) => mov > 0)
    .reduce((prev, curr) => prev + curr);
  let out = currentAccount.movements.filter((mov) => mov < 0);
  if (JSON.stringify(out) !== JSON.stringify([])) {
    out = out.reduce((prev, curr) => prev + curr);
  } else {
    out = 0;
  }

  const interest = currentAccount.movements
    .filter((mov) => mov > 0)
    .map((dep) => (dep * currentAccount.interestRate) / 100)
    .reduce((prev, curr) => prev + curr);

  labelSumIn.textContent = formatcurr(
    income.toFixed(2),
    currentAccount.locale,
    currentAccount.countryCode
  );
  labelSumOut.textContent = formatcurr(
    Math.abs(out).toFixed(2),
    currentAccount.locale,
    currentAccount.countryCode
  );
  labelSumInterest.textContent = formatcurr(
    interest.toFixed(2),
    currentAccount.locale,
    currentAccount.countryCode
  );
}
/////   Timer   /////
function startLogOutTimer() {
  function starttimer() {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    labelTimer.textContent = `${min}:${sec}`;

    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = "Log in to get started";
      containerApp.style.opacity = 0;
    }

    time--;
  }

  let time = 10 * 60;

  starttimer();
  const timer = setInterval(starttimer, 1000);

  return timer;
}
/////////   Login  ////////////

function login(e) {
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  if (
    currentAccount !== undefined &&
    currentAccount.pin === Number(inputLoginPin.value)
  ) {
    const now = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "numeric",
      year: "numeric",
    };
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
    loader.classList.add("active");
    login_container.classList.add("active");
    logout();
    setTimeout(() => {
      labelWelcome.textContent = `Welcome back, ${
        currentAccount.owner.split(" ")[0]
      }`;
      containerApp.style.opacity = 100;
      loader.classList.remove("active");
      login_container.classList.remove("active");
    }, 3000);

    updateUI(currentAccount);
  } else {
    logout();
  }
  inputLoginUsername.value = inputLoginPin.value = "";
  inputLoginPin.blur();
  if (timer) {
    clearInterval(timer);
  }
  timer = startLogOutTimer();
}
////////Logout//////////
function logout(e) {
  if (timer) clearInterval(timer);

  labelWelcome.textContent = "Log in to get started";
  containerApp.style.opacity = 0;
}

function sorting(e) {
  e.preventDefault();
  if (!sorted) {
    sorted = true;
    btnSort.innerHTML = "&uparrow; SORT";
  } else {
    sorted = false;
    btnSort.innerHTML = "&downarrow; SORT";
  }
  btnSort.classList.toggle("sorted");

  displayMovments(currentAccount, sorted);
}

function transfer(e) {
  e.preventDefault();
  transferAccount = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  if (transferAccount) {
    if (
      inputTransferAmount.value <=
      currentAccount.movements.reduce((prev, curr) => prev + curr) - 500
    ) {
      const transferAmount = changeValue(
        currentAccount.countryCode,
        transferAccount.countryCode,
        Number(inputTransferAmount.value)
      );
      currentAccount.movements.push(-Number(inputTransferAmount.value));
      currentAccount.movementsDate.push(new Date().toISOString());
      transferAccount.movements.push(transferAmount);
      transferAccount.movementsDate.push(new Date().toISOString());
      inputTransferTo.value = inputTransferAmount.value = "";
      inputTransferAmount.blur();
      updateUI(currentAccount);
    }
  }
}

function loan(e) {
  e.preventDefault();
  const temp = Math.floor(+inputLoanAmount.value);
  const amount = temp;
  setTimeout(() => {
    if (
      amount > 0 &&
      currentAccount.movements.some((mov) => mov >= amount * 0.1)
    ) {
      currentAccount.movements.push(amount);
      currentAccount.movementsDate.push(new Date().toISOString());
      updateUI(currentAccount);
    }
  }, 3000);
  inputLoanAmount.value = "";
  inputLoanAmount.blur();
}

function deleteAccount(e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );

    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = "";
  inputClosePin.blur();
}

//

//Button Events
btnLogin.addEventListener("click", login);
btnSort.addEventListener("click", sorting);
btnTransfer.addEventListener("click", transfer);
btnLoan.addEventListener("click", loan);
btnClose.addEventListener("click", deleteAccount);
btnLogout.addEventListener("click", logout);
const eurToINR = 84.88;
const eurToUSD = 1.14;
const eurToJPY = 130.28;
function changeValue(codeFrom, codeTo, value) {
  let temp = value;
  if (codeFrom === "INR") {
    temp = temp / eurToINR;
  } else if (codeFrom === "USD") {
    temp = temp / eurToUSD;
  } else if (codeFrom === "JPY") {
    temp = temp / eurToJPY;
  }
  if (codeTo === "INR") {
    temp = temp * eurToINR;
  } else if (codeTo === "USD") {
    temp = temp * eurToUSD;
  } else if (codeTo === "JPY") {
    temp = temp * eurToJPY;
  }
  return temp;
}
