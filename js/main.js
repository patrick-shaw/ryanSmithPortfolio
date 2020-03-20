// INFO PANEL
const info = document.getElementById('info');
const infoClose = document.getElementById('info-close');
const infoPanel = document.getElementById('info-panel');
const projWrap = document.querySelector('.project-wrap');
const projCarousel = document.getElementById('project-carousel');
const footer = document.getElementById('footer');
const singleProject = document.getElementById('single-project');

console.log("hello");
console.log("hello");
info.addEventListener('click', () => {
    infoPanel.classList.add('visible');
    if (projWrap) {
        projWrap.classList.add('visible');
    }
    if (projCarousel) {
        projCarousel.classList.add('visible');
    }
    if (footer) {
        footer.classList.add('visible');
    }
    if (singleProject) {
        singleProject.classList.add('visible');
    }
})

infoClose.addEventListener('click', () => {
    infoPanel.classList.remove('visible');
    if (projWrap) {
        projWrap.classList.remove('visible');
    }
    if (projCarousel) {
        projCarousel.classList.remove('visible');
    }
    if (footer) {
        footer.classList.remove('visible');
    }
    if (singleProject) {
        singleProject.classList.remove('visible');
    }
})