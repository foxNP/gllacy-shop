(function () {
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [59.939068064173775,30.3273664999999],
                zoom: 16
            }, {
                searchControlProvider: 'yandex#search'
            }),

            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),

            myPlacemark = new ymaps.Placemark([59.938639906114595,30.32308247620295], {
                hintContent: 'Собственный значок метки',
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: './img/marker.png',
                // Размеры метки.
                iconImageSize: [218, 142],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-40, -142]
            });

        myMap.geoObjects
            .add(myPlacemark)
    });

    var link = document.querySelector(".link-feedback");
    var popup = document.querySelector(".modal-feedback");
    var name = popup.querySelector("[name=user-name]");
    var mail = popup.querySelector("[name=user-mail]");
    var close = document.querySelector(".modal-close");
    var blackout = document.querySelector(".overlay");
    var form = popup.querySelector("form")



    link.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");
        blackout.classList.add("modal-show");
        name.focus();
    });

    close.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
        blackout.classList.remove("modal-show");
    });


    blackout.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
        blackout.classList.remove("modal-show");
    });

    form.addEventListener("submit", function (evt) {
        if (!name.value || !mail.value) {
        evt.preventDefault();
        console.log("нужно ввести данные")}
    });
})();

