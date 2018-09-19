// slider

var btnPrev = document.querySelector('.banner-prev');
var btnNext = document.querySelector('.banner-next');
var banners = document.querySelectorAll('.banner-slide');

var bannerIndex = 0;
btnNext.addEventListener('click', function () {
    banners[bannerIndex].classList.remove('banner-slide-active');
    bannerIndex++;
    if (bannerIndex > (banners.length - 1)) {
        bannerIndex = 0;
        banners[bannerIndex].classList.add('banner-slide-active')
    } else {
        banners[bannerIndex].classList.add('banner-slide-active')
    }
});

btnPrev.addEventListener('click', function () {
    banners[bannerIndex].classList.remove('banner-slide-active');
    bannerIndex--;
    if (bannerIndex < 0) {
        bannerIndex = (banners.length - 1);
        banners[bannerIndex].classList.add('banner-slide-active')
    } else {
        banners[bannerIndex].classList.add('banner-slide-active')
    }
});

// the above way is more universal, it works with more than just 2 banners
// for just 2 and no more, it could look much easier
//
// btnNext.addEventListener('click', function () {
//     banners.forEach(item => {
//         item.classList.contains('banner-slide-active') ?
//             item.classList.remove('banner-slide-active') :
//             item.classList.add('banner-slide-active')
//     })
// });
// btnPrev.addEventListener('click', function () {
//     banners.forEach(item => {
//         item.classList.contains('banner-slide-active') ?
//             item.classList.remove('banner-slide-active') :
//             item.classList.add('banner-slide-active')
//     })
// });


// article mouseover

