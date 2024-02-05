const tabsTitle = document.querySelectorAll('.tab__title');
const tabsContent = document.querySelectorAll('.tab__content');

const sliderButtonLeft = document.querySelector('.left_button');
const sliderButtonRight = document.querySelector('.right_button');

let tours = document.querySelector('.tours');
let childs = tours.childNodes;

let sliderOffset = 0;

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
    