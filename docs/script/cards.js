const readMoreBtn = document.querySelectorAll('.read-more-btn');
const textPreview = document.querySelectorAll('.text-preview');

for (let i=0; i<readMoreBtn.length; i++){
    readMoreBtn[i].addEventListener('click', e=>{
        textPreview[i].classList.toggle('show-more');   
        if (textPreview[i].classList.contains('show-more')) {
            readMoreBtn[i].innerHTML = 'Приховати';
            textPreview[i].classList.remove('text-gradient'); 
        }
        else {
            readMoreBtn[i].innerHTML = 'Читати далі...';
            textPreview[i].classList.toggle('text-gradient'); 
        }
    })
    
}