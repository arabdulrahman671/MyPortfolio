AOS.init({
    duration:1000,
});





var roundLogE1 = document.querySelector('#clients-counter');
var roundLogE2 = document.querySelector('#Projects-counter');


anime({
    targets: roundLogE1,
    innerHTML: [0, 1000],
    easing: 'linear',
    round: 10, // Will round the animated value to 1 decimal
    loop:7,
});

anime({
    targets: roundLogE2,
    innerHTML: [0, 420],
    easing: 'linear',
    round: 10, // Will round the animated value to 1 decimal
    loop: 7,
});
