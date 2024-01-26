const tabsTitle = document.querySelectorAll('.tab__title');
const tabsContent = document.querySelectorAll('.tab__content');

tabsTitle.forEach(item => item.addEventListener('click', event => {

    let targetData = event.target.getAttribute('data-tab');

    tabsTitle.forEach(element => element.classList.remove('active-tab'));

    tabsTitle.forEach(element => element.classList.add('non_active-tab'));

    tabsContent.forEach(element => element.classList.add('hidden-tab-content'));

    item.classList.add('active-tab');

    item.classList.remove('non_active-tab');
   
    document.getElementById(targetData).classList.remove('hidden-tab-content')
       
}))

    