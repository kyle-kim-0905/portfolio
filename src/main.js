// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;

/** 
 * callback함수 처리
 * scroll일때 function() {} 처리한다.
 * "function() {}" === "() => {}"
*/
document.addEventListener('scroll', () => {
    if (window.scrollY > headerHeight) {
        header.classList.add('header--dark');
    }
    else {
        header.classList.remove('header--dark'); 
    }
});

// 홈화면 투명하게 처리
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - (window.scrollY / homeHeight);

    //console.log("Home Height : %f vs ScrollY : %f", homeHeight , window.scrollY);
});


