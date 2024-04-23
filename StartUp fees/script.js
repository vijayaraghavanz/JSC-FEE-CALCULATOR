const submitBtn = document.querySelector(".submit");
const clrBtn = document.querySelector(".clr");
const select = document.querySelector("select");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(select.value);
  if (select.value === "none") {
    select.style.borderColor = "red";
    return;
  }
  console.log(location.href + select.value);
  location.href = location.href + select.value+".html";
});
