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


// article mouseover effect

var articleLinks = document.querySelectorAll('.main-article-link');

// for (var i=0; i<articleLinks.length; i++) {
//     articleLinks[i].addEventListener('mouseover', function () {
//         var articleBar = this.querySelector('.main-article-bar');
//         articleBar.style.display = 'none';
//     })
// }
// for (var i=0; i<articleLinks.length; i++) {
//     articleLinks[i].addEventListener('mouseout', function () {
//         var articleBar = this.querySelector('.main-article-bar');
//         articleBar.style.display = 'block';
//     })
// }
// *** but code below looks IMO a bit cleaner

articleLinks.forEach(item => {
    item.addEventListener('mouseover', function () {
        var articleBar = this.querySelector('.main-article-bar');
        articleBar.style.display = 'none';
    })
});
articleLinks.forEach(item => {
    item.addEventListener('mouseout', function () {
        var articleBar = this.querySelector('.main-article-bar');
        articleBar.style.display = 'block';
    })
});

