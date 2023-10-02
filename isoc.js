
const hamburger = document.querySelector("#hamburger");
const main_nav = document.querySelector(".main-nav");
hamburger.addEventListener("click", ()=>{
  if(!hamburger.classList.contains("cross")){
      main_nav.classList.add("show-nav");
      hamburger.classList.add("cross");
  }
  else {
      main_nav.classList.remove("show-nav");
      hamburger.classList.remove("cross");
  }
})

const swiper = new Swiper('.swiper', {
// Optional parameters
direction: 'horizontal',
loop: true,

// If we need pagination
/*pagination: {
  el: '.swiper-pagination',
  type: "bullets",
},*/
effect : "cube",
cubeEffect : {
  slideShows : false,
  
},
autoplay:{
  delay: 2000,
}

});


// ShareBtn Event Handling
const shareBtn = document.querySelectorAll(".shareBtn");
shareBtn.forEach( (el)=> el.addEventListener("click", event => {
   navigator.share({
      title: 'WebShare API Demo',
      url: 'https://codepen.io/ayoisaiah/pen/YbNazJ'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
}));

// Nav Bar Options click event handling
/*main_nav.children.forEach((el)=>{
  el.addEventListener("click", ()=>{
      
  })
})*/
