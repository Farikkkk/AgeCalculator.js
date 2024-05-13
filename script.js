const button = document.querySelector("button");
const result = document.querySelector(".result");
const inputDate = document.querySelector("#birthday");

button.addEventListener("click", () => {
  calculateAge();
});

function calculateAge() {
  const birthdayValue = inputDate.value;
  if (birthdayValue === "") {
    result.innerHTML = `Please enter your birthday !!!`;
  } else {
    const age = getAge(birthdayValue);
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthday = new Date(birthdayValue);
  const age = currentDate.getFullYear() - birthday.getFullYear();
  const month = currentDate.getMonth() - birthday.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthday.getDate())
  ) {
    return (result.innerHTML = `Your age is ${age - 1} years old`);
  } else {
    return (result.innerHTML = `Your age is ${age} ${
      age > 1 ? "years" : "year"
    }  old`);
  }
}
