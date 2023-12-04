// "use strict";

// Const
const emailInput = document.querySelector("#email__input");
const passwordInput = document.querySelector("#password__input");
const submitBtn = document.querySelector("#login__submit__btn");
const form = document.querySelector("#login");
const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/;

// On screen load
is_emailValid();

// Events listener
emailInput.addEventListener("input", function () {
  is_emailValid();
});

window.addEventListener("keyup", () => {
  if (
    emailInput.classList.contains("valid") &&
    passwordInput.classList.contains("valid")
  ) {
    submitBtn.classList.add("allValid");
    submitBtn.style.backgroundColor = "hsl(var(--clr-neutral-100))";
    submitBtn.style.color = "white";
    submitBtn.style.opacity = "1";
    submitBtn.style.cursor = "pointer";
  } else if (
    emailInput.classList.contains("invalid") ||
    passwordInput.classList.contains("invalid")
  ) {
    submitBtn.classList.remove("allValid");
    submitBtn.style.backgroundColor = "transparent";
    submitBtn.style.color = "hsl(var(--clr-hsl-red), 0.8)";
    submitBtn.style.opacity = ".8";
    submitBtn.style.cursor = "auto";
    submitBtn.addEventListener("click", function () {
      activateSpinner();
      document.querySelector(".bg").classList.add("active");
      setTimeout(function () {
        // window.location.href = "https://www.google.com";
        document.querySelector("body").innerHTML = `
        <center><h2> index.html </h2></center>
        `;
      }, 3000);
    });
  }
});

emailInput.addEventListener("keyup", function () {
  if (ValidateEmail(emailInput.value)) {
    emailInput.className = "valid";
  } else {
    emailInput.className = "invalid";
  }
});

function ValidateEmail(mailContent) {
  if (regex.test(mailContent)) {
    console.log("good");
    return true;
  } else {
    console.log("bad");
    return false;
  }
}

passwordInput.addEventListener("keyup", () => {
  if (passwordInput.value.length >= 8) {
    passwordInput.className = "valid";
  } else {
    passwordInput.className = "invalid";
  }
});

submitBtn.addEventListener("click", () => {
  if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
    emailInput.className = "invalid";
    emailInput.animate(
      [
        { transform: "translateX(0px)" },
        { transform: "translateX(-5px)" },
        { transform: "translateX(5px)" },
        { transform: "translateX(0px)" },
      ],
      {
        duration: 200,
      }
    );
    setTimeout(() => {
      emailInput.className = "";
    }, 2000);
  } else {
    emailInput.className = "valid";
  }
  if (passwordInput.value.length >= 8) {
    passwordInput.className = "valid";
  } else {
    passwordInput.className = "invalid";
    passwordInput.animate(
      [
        { transform: "translateX(0px)" },
        { transform: "translateX(-5px)" },
        { transform: "translateX(5px)" },
        { transform: "translateX(0px)" },
      ],
      {
        duration: 200,
      }
    );
    setTimeout(() => {
      passwordInput.className = "";
    }, 2000);
  }
});

// Functions
function is_emailValid() {
  if (regex.test(emailInput.value)) {
    emailInput.className = "valid";
  }
}

function activateSpinner() {
  document.querySelector(".spinner").classList.add("active");
}
