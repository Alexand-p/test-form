let $slides = $('.slides__item');
let $indContainer = $('.indicators');
let $indItems = $('.indicators__item');
let currentSlide = 0;
let carouselInterval = 5000;

const SPACE = ' ';
const LEFT_ARROW = 'ArrowLeft';
const RIGHT_ARROW = 'ArrowRight';
const FA_PAUSE = '<i class="fas fa-pause"></i>';
const FA_PLAY = '<i class="fas fa-play"></i>';

// activate controls, if javascript is enabled
$indContainer.css('display', 'flex'); // flex
$('.controls').css('display', 'block'); // block

// carousel basic engine
let gotoNSlide = (n) => {
    $($slides[currentSlide]).toggleClass('active');
    $($indItems[currentSlide]).toggleClass('active');
    currentSlide = (n + $slides.length) % $slides.length;
    $($slides[currentSlide]).toggleClass('active');
    $($indItems[currentSlide]).toggleClass('active');
};

let gotoNextSlide = () => gotoNSlide(currentSlide + 1);

let gotoPrevSlide = () => gotoNSlide(currentSlide - 1);

// controls
let playbackStatus = true;
let $pausePlayBtn = $('.indicators__pause');
let $nextBtn = $('.controls__next');
let $prevBtn = $('.controls__prev');
let slideInterval = setInterval(gotoNextSlide, carouselInterval);

let pauseSlideShow = () => {
    if (playbackStatus) {
        $pausePlayBtn.html(FA_PAUSE);
        playbackStatus = !playbackStatus;
        clearInterval(slideInterval);
    }
};

let playSlideShow = () => {
    $pausePlayBtn.html(FA_PLAY);
    playbackStatus = !playbackStatus;
    slideInterval = setInterval(gotoNextSlide, carouselInterval);
};

let clickPausePlayBtn = () => playbackStatus ? pauseSlideShow() : playSlideShow();

let clickNextBtn = () => {
    pauseSlideShow();
    gotoNextSlide();
};

let clickPrevBtn = () => {
    pauseSlideShow();
    gotoPrevSlide();
};

$pausePlayBtn.on('click', clickPausePlayBtn);
$nextBtn.on('click', clickNextBtn);
$prevBtn.on('click', clickPrevBtn);

// indicators
let clickIndicatorBtn = (e) => {
    pauseSlideShow();
    gotoNSlide(+e.target.getAttribute('data-slide-to'));
};

// use delegation to optimize the event handler
$indContainer.on('click', '.indicators__item', clickIndicatorBtn);

// set keyboard controls
let pressKeyControl = (e) => {
    if (e.key === LEFT_ARROW) clickPrevBtn();
    if (e.key === RIGHT_ARROW) clickNextBtn();
    if (e.key === SPACE) clickPausePlayBtn();
};

$(document).on('keydown', pressKeyControl);
// alert("space = pause");



var form = document.querySelector('.formValidation')
var submitBtn = form.querySelector('.form-container__button')
var number =  form.querySelector('.form-container__input')
var fields = form.querySelectorAll('.field')

var success = '???????????? ??????????????' 




form.addEventListener('submit', function(event){
    event.preventDefault()
    console.log('click on submit')
    console.log('Number: ', number.value)



var errors = form.querySelectorAll('.error')

for(var i = 0; i < errors.length; i++){
    errors[i].remove()
}

for(var i = 0 ; i < fields.length; i++){
    if(!fields[i].value){
        var error = document.createElement('div')
        error.className = 'error'
        error.style.color = 'red'
        error.innerHTML = 'Cannot be blank'
        form[i].parentElement.insertBefore(error, fields[i])
    } else{
        alert(success + '\n' +'?????? ?????????? :'+ number.value)
        // var yourNumb = document.createElement('div')
        // yourNumb.className = 'yourNumber'
        // yourNumb.innerHTML = number.value 
        // form[i].parentElement.innerHTML(yourNumb, fields[i])
    }
}   
})