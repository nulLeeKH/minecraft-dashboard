const form = document.querySelector(".user-lookup-nickname-form"),
      input = document.querySelector(".user-lookup-nickname-input"),
      uuid = document.querySelector(".user-lookup-uuid"),
      history = document.querySelector(".user-lookup-nickname-history"),
      skin = document.querySelector(".user-lookup-skin");

function showSkinErr(){
    skin.src = 'img/skin/err.png';
}

function showSkin(content) {
    skin.src = `${content}`;
}

function lookupSkin(uuid) {
    fetch(
        `https://sessionserver.mojang.com/session/minecraft/profile/${uuid}`
    )
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            const skinUrl = JSON.parse(atob(json['properties'][0]['value']))['textures']['SKIN']['url'];
            showSkin(skinUrl);
        })
        .catch(function (err) {
            console.log(err);
            showSkinErr();
        });
}

function showHistoryErr(){
    history.innerHTML = 'ERR: Check console for more information.';
}

function showHistory(content) {
    history.innerHTML = `${content}`;
}

function lookupNameHistory(uuid) {
    fetch(
        `https://api.mojang.com/user/profiles/${uuid}/names`
    )
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            let checkedHistory = JSON.stringify(json);
            checkedHistory = checkedHistory.replace('[{"', '');
            checkedHistory = checkedHistory.replace('}]', '');
            checkedHistory = checkedHistory.replace(/"},{"/gi, '<br>');
            checkedHistory = checkedHistory.replace(/},{"/gi, '<br>');
            checkedHistory = checkedHistory.replace(/":"/gi, ': ');
            checkedHistory = checkedHistory.replace(/","/gi, ' | ');
            checkedHistory = checkedHistory.replace(/":/gi, ': ');
            checkedHistory = checkedHistory.replace(/"/gi, '');
            showHistory(checkedHistory);
        })
        .catch(function (err) {
            console.log(err);
            showHistoryErr();
        });
}

function showUuidErr() {
    uuid.innerHTML = 'ERR: Check console for more information.';
}

function showUuid(content) {
    uuid.innerHTML = `UUID: ${content}`;
}

function lookup(nickname) {
    fetch(
        `https://api.mojang.com/users/profiles/minecraft/${nickname}`
    )
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            const checkedUuid = json['id'];
            showUuid(checkedUuid);
            lookupNameHistory(checkedUuid);
            lookupSkin(checkedUuid);
        })
        .catch(function (err) {
            console.log(err);
            showUuidErr();
        });
}

function handleSubmit(event) {
    event.preventDefault();
    const inputValue = input.value;
    lookup(inputValue);

    init();
}

function loadUserInformation() {
    form.addEventListener("submit", handleSubmit);
}

function init() {
    loadUserInformation();
}

init();