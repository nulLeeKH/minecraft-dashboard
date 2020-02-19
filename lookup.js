const form = document.querySelector(".user-lookup-nickname-form"),
      input = document.querySelector(".user-lookup-nickname-input"),
      uuid = document.querySelector(".user-lookup-uuid");

function showUuidErr() {
    uuid.innerHTML = 'ERR: Check console for more information.';
}

function showUuid(id) {
    uuid.innerHTML = `UUID: ${id}`;
}

function handleSubmit(event) {
    event.preventDefault();
    const inputValue = input.value;
    fetch(
        `https://api.mojang.com/users/profiles/minecraft/${inputValue}`
    )
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            const checkedUuid = json['id'];
            showUuid(checkedUuid);
        })
        .catch(function (err) {
            console.log(err);
            showUuidErr();
        });
    init();
}

function loadUserInformation() {
    form.addEventListener("submit", handleSubmit);
}

function init() {
    loadUserInformation();
}

init();