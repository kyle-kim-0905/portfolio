/**
 * 구현 계획
 * 1) 모든 섹션 요소와 메뉴 아이템을 가지고 온다
 * 2) IntersectionObserver를 사용해서 모든섹션을 관찰한다.
 * 3) 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.
 * 보여지는 섹션
 *  - 다수 섹션 동시에 보여질때, 가장 첫번째 섹션을 선택
 *  - 마지막 Contact 섹션이 보여진다면, 가장 마지막 섹션 선택
 */

const sectionIds = [
    "#home", 
    "#about", 
    "#skills", 
    "#work", 
    "#testimonial", 
    "#contact"
];

const sections = sectionIds.map(id => document.querySelector(id) );
const navItems = sectionIds.map(id => document.querySelector(`[href="${id}"]`));
const visibleSections = sectionIds.map( () => false );


const options = {};
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach(section => observer.observe(section));

function observerCallback(entries){
    // let쓴 이유? : const는 선언과 동시에 할당이 필요함. 따라서, Const 사용불가
    let selectLastOne;
    entries.forEach((entry) => {
        const index = sectionIds.indexOf(`#${entry.target.id}`);
        visibleSections[index] = entry.isIntersecting;
        selectLastOne = (sectionIds.length - 1 === index) 
                        && (entry.isIntersecting)
                        && (entry.intersectionRatio >= 0.99);
    });

    console.log(visibleSections);
    console.log(`무조건 라스트 섹션!! ${selectLastOne}`);

    const navIndex = selectLastOne 
    ? sectiondIds.length - 1 
    : findFirstIntersection(visibleSections);
    console.log(sectionIds[navIndex]);
}

function findFirstIntersection(intersections){
    // indexof 함수 : NOT_FOUND시, -1 Return
    const index = intersections.indexOf(true);
    return index >= 0 ? index : 0;
}