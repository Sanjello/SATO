const readMoreBtn = document.querySelectorAll('.read-more-btn');
const moreText = document.querySelectorAll('.more-text');


for (let i=0; i<readMoreBtn.length; i++){
    readMoreBtn[i].addEventListener('click', e=>{
        moreText[i].classList.toggle('show-more');    
    })
}
