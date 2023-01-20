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

const buttonStart = document.querySelectorAll(".button__start")
const modalStart = document.querySelector('.modal__start')
const modalCloseBtn = document.querySelector(".modal__close")
const overflow = document.querySelector('.overflow')
const body = document.querySelector('body')
const modalButtonSubmit = document.querySelector('.form__button')
const modal = document.querySelector('.modal')
const btnSingIn = document.querySelector('.btn-sing__in')
const modalSingIn = document.querySelector('.modal-sing__in')



buttonStart.forEach(item =>{
    item.addEventListener('click', () =>{
        modalStart.classList.add('modal__active')
        body.classList.add('active')
        modal.classList.add('modal__active')
    })
})


document.addEventListener('click', e =>{
    closeModal(e, modalStart)
    closeModal(e, modalSingIn)
})

function closeModal(e, closeTarget) {
    e.preventDefault()
    let target = e.target
    if(target == modalCloseBtn || target == overflow || target == modalButtonSubmit){
        closeTarget.classList.remove('modal__active')
        body.classList.remove('active')
        modal.classList.remove('modal__active')
    }
}

btnSingIn.addEventListener('click', ()=>{
    modalSingIn.classList.add('modal__active')
    body.classList.add('active')
    modal.classList.add('modal__active')
})