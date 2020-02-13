service0Text = document.querySelector(".service-0"),
      service1Text = document.querySelector(".service-1"),
      service2Text = document.querySelector(".service-2"),
      service3Text = document.querySelector(".service-3"),
      service4Text = document.querySelector(".service-4"),
      service5Text = document.querySelector(".service-5"),
      service6Text = document.querySelector(".service-6"),
      service7Text = document.querySelector(".service-7"),
      service0Img = document.querySelector(".service-image-0"),
      service1Img = document.querySelector(".service-image-1"),
      service2Img = document.querySelector(".service-image-2"),
      service3Img = document.querySelector(".service-image-3"),
      service4Img = document.querySelector(".service-image-4"),
      service5Img = document.querySelector(".service-image-5"),
      service6Img = document.querySelector(".service-image-6"),
      service7Img = document.querySelector(".service-image-7");

let serviceStatus = 'red';

function loadStatus() {
    fetch(
        'https://status.mojang.com/check'
    )
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            serviceStatus = json[0]['minecraft.net'];
            service0Text.style.color = serviceStatus;
            service0Img.src = `img/status/${serviceStatus}.png`;

            serviceStatus = json[1]['session.minecraft.net'];
            service1Text.style.color = serviceStatus;
            service1Img.src = `img/status/${serviceStatus}.png`;

            serviceStatus = json[2]['account.mojang.com'];
            service2Text.style.color = serviceStatus;
            service2Img.src = `img/status/${serviceStatus}.png`;

            serviceStatus = json[3]['authserver.mojang.com'];
            service3Text.style.color = serviceStatus;
            service3Img.src = `img/status/${serviceStatus}.png`;

            serviceStatus = json[4]['sessionserver.mojang.com'];
            service4Text.style.color = serviceStatus;
            service4Img.src = `img/status/${serviceStatus}.png`;

            serviceStatus = json[5]['api.mojang.com'];
            service5Text.style.color = serviceStatus;
            service5Img.src = `img/status/${serviceStatus}.png`;

            serviceStatus = json[6]['textures.minecraft.net'];
            service6Text.style.color = serviceStatus;
            service6Img.src = `img/status/${serviceStatus}.png`;

            serviceStatus = json[7]['mojang.com'];
            service7Text.style.color = serviceStatus;
            service7Img.src = `img/status/${serviceStatus}.png`;
        })
}

function Init() {
    setInterval(loadStatus, 1000)
}

Init();