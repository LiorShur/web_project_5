let openProfilePopup = document.querySelector('.profile__editbtn');
let popupProfileContainer = document.querySelector('.popup_profile');
let popupProfileClose = popupProfileContainer.querySelector('.popup__close');
let formElementProfile = popupProfileContainer.querySelector('.popup__form');
let formNameProfile = popupProfileContainer.querySelector('.popup__text_type_name');
let formJobProfile = popupProfileContainer.querySelector('.popup__text_type_job');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');

openProfilePopup.addEventListener("click", editPopupProfile);
popupProfileClose.addEventListener("click", editProfileClose);
formElementProfile.addEventListener("submit", editProfileSubmit);

let openPlacePopup = document.querySelector('.profile__addbtn');
let popupPlaceContainer = document.querySelector('.popup_place');
let popupPlaceClose = popupPlaceContainer.querySelector('.popup__close');
let formElementPlace = popupPlaceContainer.querySelector('.popup__form');
let formTitlePlace = popupPlaceContainer.querySelector('.popup__text_type_title');
let formLinkPlace = popupPlaceContainer.querySelector('.popup__text_type_link');

openPlacePopup.addEventListener("click", editPopupPlace);
popupPlaceClose.addEventListener("click", editPlaceClose);
formElementPlace.addEventListener("submit", editPlaceSubmit);

let galleryContainer = document.querySelector('.gallery__container');
let placeList = galleryContainer.querySelectorAll('.gallery__item');
let placeLikeBtnArray = galleryContainer.querySelectorAll('.gallery__heart');
let placeImageArray = galleryContainer.querySelectorAll('.gallery__image');
let placeTextArray = galleryContainer.querySelectorAll('.gallery__text');
let placeTrashArray = galleryContainer.querySelectorAll('.gallery__trash');
let popupImageContainer = document.querySelector('.popup__image');
let popupImageCloseBtn = popupImageContainer.querySelector('.popup__image__close');
let popupImageText = popupImageContainer.querySelector('.popup__image__text');
let popupImageImage = popupImageContainer.querySelector('.popup__image__image');

popupImageImage.addEventListener("click", popupImageOpenBig);
popupImageCloseBtn.addEventListener("click", popupImageClose);

let popupImageContainerLarge = document.querySelector('.popup__image__large');
let popupImageLargeCloseBtn = popupImageContainerLarge.querySelector('.popup__image__large__close');
let popupImageLargeText = popupImageContainerLarge.querySelector('.popup__image__large__text');
let popupImageLargeImage = popupImageContainerLarge.querySelector('.popup__image__large__image');
popupImageLargeCloseBtn.addEventListener("click", popupImageCloseBig);

renderList();

function editPopupProfile() {
    popupProfileContainer.classList.add("popup_opened");
    formNameProfile.value = profileName.textContent;
    formJobProfile.value = profileJob.textContent;
}

function editProfileClose() {
    popupProfileContainer.classList.remove("popup_opened");
}

function editProfileSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = formNameProfile.value;
    profileJob.textContent = formJobProfile.value;
    editProfileClose();
}

function editPopupPlace() {
    popupPlaceContainer.classList.add("popup_opened");
}

function editPlaceClose() {
    formTitlePlace.value = '';
    formLinkPlace.value = '';
    popupPlaceContainer.classList.remove("popup_opened");
}

function editPlaceSubmit(evt) {
    evt.preventDefault();
    addPlace();
    formTitlePlace.value = '';
    formLinkPlace.value = '';
    editPlaceClose();
}

function popupImageClose() {
    popupImageContainer.classList.remove("popup__image_opened");
}

function popupImageOpenBig() {
    let screenWidth = screen.availWidth;
    console.log(screenWidth);
    if (screenWidth >= 900) {
        popupImageClose();
        popupImageContainerLarge.classList.add("popup__image__large_opened");
    }
}

function popupImageCloseBig() {
    popupImageContainerLarge.classList.remove("popup__image__large_opened");
}

function addPlace() {
    renderPlaces();
    renderList();
}

function renderList() {
    for (let i = 0; i < placeList.length; i++) {
        placeLikeBtnArray[i].addEventListener("click", function clickLike() {
            if (placeLikeBtnArray[i].classList.contains("gallery__heart_clicked")) {
                placeLikeBtnArray[i].classList.remove("gallery__heart_clicked");
            } else {
                placeLikeBtnArray[i].classList.add("gallery__heart_clicked");
            }
        });
        placeTrashArray[i].addEventListener("click", function deletePlace() {
            galleryContainer.removeChild(placeList[i]);
        });

        placeImageArray[i].addEventListener("click", function popupImageOpen() {
            popupImageImage.setAttribute("style", "background-image: url(" + placeImageArray[i].src + ")");
            popupImageText.textContent = placeTextArray[i].textContent;
            popupImageContainer.classList.add("popup__image_opened");
            popupImageImage.addEventListener("click", function popupImageOpenBig() {
                let screenWidth = screen.availWidth;
                console.log(screenWidth);
                if (screenWidth >= 900) {
                    popupImageClose();
                    popupImageLargeImage.setAttribute("style", "background-image: url(" + placeImageArray[i].src + ")");
                    popupImageLargeText.textContent = placeTextArray[i].textContent;
                    popupImageContainerLarge.classList.add("popup__image__large_opened");
                }
            });
        });
    }
}

function renderPlaces() {
    galleryContainer.innerHTML += "<li class='gallery__item'><img class='gallery__image' src='" + formLinkPlace.value + "'" + "alt='The Grand Canyon'/><button class= 'gallery__trash' type='button'></button><div class='gallery__info'><h2 class='gallery__text'>" + formTitlePlace.value + "</h2><button class='gallery__heart' type='button'></button></div></li>";
    galleryContainer = document.querySelector('.gallery__container');
    placeList = galleryContainer.querySelectorAll('.gallery__item');
    placeLikeBtnArray = galleryContainer.querySelectorAll('.gallery__heart');
    placeImageArray = galleryContainer.querySelectorAll('.gallery__image');
    placeTextArray = galleryContainer.querySelectorAll('.gallery__text');
    placeTrashArray = galleryContainer.querySelectorAll('.gallery__trash');
    popupImageImage = popupImageContainer.querySelector('.popup__image__image');
}

function clickLike() {
    if (placeLikeBtnArray[placeLikeBtnArray.length - 1].classList.contains("gallery__heart_clicked")) {
        placeLikeBtnArray[placeLikeBtnArray.length - 1].classList.remove("gallery__heart_clicked");
    } else {
        placeLikeBtnArray[placeLikeBtnArray.length - 1].classList.add("gallery__heart_clicked");
    }
}