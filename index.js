const tabsTitle = document.querySelectorAll('.tab__title');
const tabsContent = document.querySelectorAll('.tab__content');

const sliderButtonLeft = document.querySelector('.left_button');
const sliderButtonRight = document.querySelector('.right_button');

const burger = document.querySelector('.burger');
const mountains = document.querySelector('.mountain');
const burger_button = document.querySelector('.burger-button');
const burger_menu = document.querySelector('.burger__menu');

let burger__menu_width = 0;
let burger__menu_height = 0;
var mouseX = 0
var mouseY = 0


let windowWidth = window.innerWidth;

let tours = document.querySelector('.tours');
let childs = tours.childNodes;

let sliderOffset = 0;
let burgerClick = false;
let outburgerClick = false;

if(windowWidth > 840){
    burger.style.display = "none"
}


burger_button.addEventListener('click', event => {

    burgerClick = !burgerClick;
    console.log(outburgerClick)

    
    if(burgerClick == true){

        burger_menu.classList.remove('burger-hide');

        burger__menu_width = burger_menu.offsetWidth;
        burger__menu_height = burger_menu.offsetHeight;


    } else if (burgerClick == false){

        burger_menu.classList.add('burger-hide');

    }
    
    // document.addEventListener('mousemove', e => {

    //     mouseX = e.clientX
    //     mouseY = e.clientY
        
    //     console.log(burger__menu_width, burger__menu_height)
    //     console.log(mouseX, mouseY)
        
    //     document.addEventListener('click', e =>{
    //         outburgerClick = true
            
    //     })

    //     if (mouseX > burger__menu_width && outburgerClick == true){

    //         burgerClick = false
    //         outburgerClick = false
    //         burger_menu.classList.add('burger-hide');

    
    //     }

    // })


})

tabsTitle.forEach(item => item.addEventListener('click', event => {

    let targetData = event.target.getAttribute('data-tab');

    tabsTitle.forEach(element => element.classList.remove('active-tab'));

    tabsTitle.forEach(element => element.classList.add('non_active-tab'));

    tabsContent.forEach(element => element.classList.add('hidden-tab-content'));

    item.classList.add('active-tab');

    item.classList.remove('non_active-tab');
   
    document.getElementById(targetData).classList.remove('hidden-tab-content')
       
}))

sliderButtonRight.addEventListener('click', e =>{

    sliderOffset -= 401;
    console.log(childs.length)

    if(sliderOffset < -802){

        sliderOffset = 0;

    }

    tours.style.left = sliderOffset + 'px';

})

sliderButtonLeft.addEventListener('click', e =>{

    sliderOffset += 401;

    if(sliderOffset > 0){

        sliderOffset = -802;
        
    }

    tours.style.left = sliderOffset + 'px';

})
    