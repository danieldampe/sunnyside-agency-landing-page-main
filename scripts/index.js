// *** *** *** Variables *** *** ***
const d = document,
    c = console;
// *** DOM ***
const $btnOpen = d.getElementById("open-menu-btn"),
    $navMobile = d.getElementById("nav-mobile");

// *** *** *** Funciones *** *** ***
const addClass = (element, className) => element.classList.add(className);
const removeClass = (element, className) => element.classList.remove(className);
const toggleClass = (element, className) => element.classList.toggle(className);
const addStateClass = (element, className) => element.classList.add(element.classList[0] + "--" + className);
const removeStateClass = (element, className) => element.classList.remove(element.classList[0] + "--" + className);
const toggleStateClass = (element, className) => element.classList.toggle(element.classList[0] + "--" + className);
const clickElement = (element, evt) => evt.target === element || evt.target.matches("#" + element.id + " *");

// *** *** *** Ejecución *** *** ***
d.addEventListener("click", evt => {
    if(clickElement($btnOpen, evt)) toggleStateClass($navMobile, "is-active");
});
