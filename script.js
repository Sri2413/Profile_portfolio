
let firstButton=document.getElementById('btn1');
let firstPage=document.getElementById('intro');
let nextPage=document.getElementById('nxt');
firstButton.addEventListener('click',()=>{
   firstPage.style.display='none';
    nextPage.style.display='block';
})
const body = document.querySelector("body"),
        toggle = document.querySelector(".toggle");
      

      let getMode = localStorage.getItem("mode");
      if (getMode && getMode === "dark") {
        body.classList.add("dark");
        toggle.classList.add("active");
      }

      toggle.addEventListener("click", () => {
        body.classList.toggle("dark");
          
          
        

        if (!body.classList.contains("dark")) {
          return localStorage.setItem("mode", "light");
        }
        localStorage.setItem("mode", "dark");
      });

      toggle.addEventListener("click", () => 
      
      toggle.classList.toggle("active"));


var slides=document.querySelector('.slider-items').children;
var nextSlide=document.querySelector(".right-slide");
var prevSlide=document.querySelector(".left-slide");
var index=0;
var totalSlides=slides.length;

nextSlide.onclick=function() {
  next("next");
}
prevSlide.onclick=function() {
    next("prev");
}
function next(direction){
     if(direction=="next"){
        index++;
        if(index==totalSlides){
        index=0;
        }
     }
     else{
        if(index==0){
            index=totalSlides-1;
        }
        else{
            index--;
        }
     }
     for(i=0;i<slides.length;i++){
        slides[i].classList.remove("active");
     }
     slides[index].classList.add("active");
}

const stars=document.querySelectorAll('.star');
const current_rating=document.querySelector('.current-rating');

stars.forEach((star,index)=>{
  star.addEventListener('click',()=>{

    let current_star=index+1;
    current_rating.innerText=`${current_star} of 5`;

    stars.forEach((star,i)=>{
        if(current_star>=i+1){
          star.innerHTML='&#9733;';
        }else{
          star.innerHTML='&#9734;';
        }
    });

  });
});