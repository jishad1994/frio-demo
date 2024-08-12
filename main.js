var scroller = document.getElementById('leaf');
window.addEventListener('scroll', function () {
    var value = window.scrollY * 0.7;
    scroller.style.transform = `translatex(-10%)  rotate(${value}deg)`;
});