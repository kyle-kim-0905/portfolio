'use strict';
// 프로젝트 관련된 자바스크립트 코드 작성란


const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');

categories.addEventListener('click', (event)=>{
    const filter = event.target.dataset.category;
    if(null == filter){
        return;
    }
    handleActiveSelection(event.target);
    filterProjects(filter);
});

/// Active 메뉴를 재설정
function handleActiveSelection(target){
    const active = document.querySelector('.category--selected');
    active.classList.remove('category--selected');
    target.classList.add('category--selected');
}

/// 프로젝트 필터링
function filterProjects(filter){
    projectsContainer.classList.add('anim-out');

    projects.forEach(project => {
        if('all' == filter || project.dataset.type == filter){
            project.style.display = 'block';
        }
        else{
            project.style.display = 'none';
        }
    });

    setTimeout(() => {
        projectsContainer.classList.remove('anim-out');
    }, 250);
}