document.addEventListener('DOMContentLoaded', ()=>{

    const categoryTitle            = document.querySelectorAll('.category-title'),
           itemCategory            = document.querySelectorAll('.item-category'),
           menuToggle              = document.querySelector('.menu-toggle'),
           menu                    = document.querySelector('.header-nav'),
           secondSectionTab        = document.querySelectorAll('.second-section-tab'),
           secondSectionTabContent = document.querySelectorAll('.second-section-tab-content'),
           thirdSectionTab                  = document.querySelectorAll('.third-section-tab'),
           thirdSectionTabContent           = document.querySelectorAll('.third-section-tab-content'),
           fourthSectionTab                  = document.querySelectorAll('.fourth-section-tab'),
           fourthSectionTabContent           = document.querySelectorAll('.fourth-section-tab-content'),
           footerBtn               = document.querySelector('.footer-button'),
           body                    = document.querySelector('body'),
           navTitle                = document.querySelectorAll('.nav-title'),
           navList                 = document.querySelectorAll('.footer-nav .list');

    menuToggle.addEventListener('click', () =>{
        menu.classList.toggle('active')
    });

    categoryTitle.forEach((item, i) =>{
        item.addEventListener('click', () =>{
            itemCategory[i].classList.toggle('active');
        })
    });

    secondSectionTab.forEach((item) => {
        item.addEventListener('click', ()=>{
            let currentBtn = item;
            let tabId = currentBtn.getAttribute('data-tab')
            let currentTab = document.querySelector(tabId)

            secondSectionTab.forEach( item => {
                item.classList.remove('active')
            })

            secondSectionTabContent.forEach( item => {
                item.classList.remove('active')
            })

            currentBtn.classList.add('active');
            currentTab.classList.add('active')
        } )
    });
    thirdSectionTab.forEach((item) => {
        item.addEventListener('click', ()=>{
            let currentBtn = item;
            let tabId = currentBtn.getAttribute('data-tab')
            let currentTab = document.querySelector(tabId)

            thirdSectionTab.forEach( item => {
                item.classList.remove('active')
            })

            thirdSectionTabContent.forEach( item => {
                item.classList.remove('active')
            })

            currentBtn.classList.add('active');
            currentTab.classList.add('active')
        } )
    });
    fourthSectionTab.forEach((item) => {
        item.addEventListener('click', ()=>{
            let currentBtn = item;
            let tabId = currentBtn.getAttribute('data-tab')
            let currentTab = document.querySelector(tabId)

            fourthSectionTab.forEach( item => {
                item.classList.remove('active')
            })

            fourthSectionTabContent.forEach( item => {
                item.classList.remove('active')
            })

            currentBtn.classList.add('active');
            currentTab.classList.add('active')
        } )
    });


    footerBtn.addEventListener('click', ()=>{
        footerBtn.classList.toggle('active')
        body.classList.toggle('body-white')
    })

    navTitle.forEach((item, i) =>{
        item.addEventListener('click', ()=>{
            navList[i].classList.toggle('active')
        })
    })

})