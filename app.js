const searchBtn = document.querySelector('#searchBtn');
const searchContainer = document.querySelector('.searchContainer');
const form = document.querySelector('.form');
const menuBtn = document.querySelector('#menuBtn');
const navlink = document.querySelector('.navlink ul');


window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchContainer.classList.remove('active');
    menuBtn.classList.remove('fa-times');
    menuBtn.classList.add('fa-bars');
    navlink.classList.remove('active');


}

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchContainer.classList.toggle('active');

    if (menuBtn.className = 'fa fa-times') {
        menuBtn.className = 'fa fa-bars'
        navlink.classList.remove('active');
    };

});


menuBtn.addEventListener('click', () => {

    menuBtn.className = menuBtn.className === 'fa fa-times' ? 'fa fa-bars' : 'fa fa-times'
    navlink.classList.toggle('active');


    if (searchBtn.className = 'fa fa-times') {
        searchBtn.className = 'fa fa-search'
        searchContainer.classList.remove('active');
    };

});


Array.from(document.querySelectorAll('.ims')).forEach((ele, i) => {
    ele.onclick = () => {
        document.querySelector('#bigimg').src = ele.src;
    }
})