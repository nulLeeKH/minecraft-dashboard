const form = document.querySelector(".user-lookup-nickname-form"),
      input = document.querySelector(".user-lookup-nickname-input");

function handleSubmit(event) {
    event.preventDefault();
    const inputValue = input.value;
    init();
}

function loadUserInformation() {
    form.addEventListener("submit", handleSubmit);
}

function init() {
    loadUserInformation();
}

init();