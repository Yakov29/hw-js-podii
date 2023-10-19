// 1
// const button = document.querySelector(".button");
// const backdrop = document.querySelector(".backdrop");
// const modal = document.querySelector(".modal");
// const close = document.querySelector(".button-close");

// function backdropShow () {
//     backdrop.classList.toggle("is-hidden");
// };
// button.addEventListener("click", backdropShow);

// close.addEventListener("click", backdropShow);
// backdrop.addEventListener("click", (event) => {
//     console.log(event.target.dataset)
//     if (!event.target.dataset.data-modal) {
//         backdropShow()
//     };
// });
// 1 const openModalBtn = document.querySelector('[data-action="open-modal"]');
// const backdrop = document.querySelector(".backdrop");
// const closeModalBtn = document.querySelector('[data-action="close-modal"]');
// openModalBtn.addEventListener("click", () => {
//   document.body.classList.toggle("show-modal");
// });
// closeModalBtn.addEventListener("click", () => {
//     document.body.classList.toggle("show-modal");
// });
// backdrop.addEventListener("click", (e) => {
//     console.log(!e.target.dataset.action)
//     if (!e.target.dataset.action) {
//         document.body.classList.toggle("show-modal");
//     }
// });



// 2
const radioButtons = document.querySelectorAll('input[type="radio"]');

radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", () => {
    document.body.style.backgroundColor = radioButton.value;
  });
});

// 3
const input = document.getElementById("name-input");
const text = document.getElementById("name-output");

input.addEventListener("input", () => {
    text.textContent = input.value === "" ? "Незнайомець" : input.value;
  });
// 4
const inputValidRef = document.querySelector('[data-length="6"]');

inputValidRef.addEventListener("blur", () => {
    const isValid = inputValidRef.value.length === 6;
    inputValidRef.classList.toggle("valid", isValid);
    inputValidRef.classList.toggle("invalid", !isValid);
  });

//5 
const rangeInput = document.getElementById("font-size-control");
const spanText = document.getElementById("text");

spanText.style.fontSize = '50px'
rangeInput.addEventListener("input", (e) => {
    spanText.style.fontSize = `${rangeInput.value}px`
}) 
