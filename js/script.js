let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

function catagary(){
      let formData=new FormData()
      formData.append('get',"catagary")
      fetch('proccess.php',{
        method:"POST",
        body:formData
      }).then(response=>{
        return response.json()
      }).then(data=>{
        console.log(data)
        box=""
        data.map(item=>{
          box+=`<div class="box">
                    <img src="image/${item.img}.png" alt="">
                    <h3>${item.name}</h3>
                    <p>upto 45% off</p>
                    <a href="#products" data-id=${item.id} class="btn">shop now</a>
                </div>`
        })
        document.querySelector('#categories .box-container').innerHTML=box
      })
}
function products(){
  let formData=new FormData()
  formData.append('get',"products")
  fetch('proccess.php',{
    method:"POST",
    body:formData
  }).then(response=>{
    return response.json()
  }).then(data=>{
    console.log(data)
    box=""
    i=""
    data.map(item=>{
      if(item.rating==5){
        i='<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>'
      }else{
        i='<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>'
      }
      box+=` <div class="swiper-slide box">
                <img src="image/${item.product_img}.png" alt="">
                <h3>${item.name}</h3>
                <div class="price">₹.${item.prize}</div>
                <div class="stars">
                    ${i}
                </div>
                <a href="#" class="btn">add to cart</a>
            </div>`
        if(item.id==4){
          document.getElementById('first').innerHTML=box
          box=""
        }else{
          document.getElementById('second').innerHTML=box
        }
    })
    
  })
}
catagary()

var swiper = new Swiper(".product-slider", {
  loop:true,
  spaceBetween: 20,
  autoplay: {
      delay: 7000,
      disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  loop:true,
  spaceBetween: 20,
  autoplay: {
      delay: 7500,
      disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});