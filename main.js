window.addEventListener('DOMContentLoaded',()=>{
    const slides = document.querySelectorAll('.offer-slide'),
          slideWrapper = document.querySelector('.slide-wrapper'),
          slideInner = document.querySelector('.slide-inner'),
          width = getComputedStyle(slideInner).width,
          prev = document.querySelector('.prev'),
          next = document.querySelector('.next'),
          current = document.querySelector('.current'),
          total = document.querySelector('.total'),
          slider = document.querySelector('.offer-slider-parent');
          let slideIndex = 1;
          let offset = 0;
          let dots = []

          if(slides.length<10){
              total.textContent = `0${slides.length}`
          }else{
              total.textContent = slides.length
          }
          slideInner.style.width = 100 * slides.length + '%';
          slideInner.style.display = 'flex';
          slideWrapper.style.overflow = 'hidden';
          next.addEventListener('click',()=>{
              if(offset == (+width.slice(0, width.length - 2)*(slides.length - 1))){
                  offset = 0
              }else{
                  offset+= +width.slice(0, width.length - 2)
              }
              slideInner.style.transform = `translateX(-${offset}px)`
              if(slideIndex == slides.length){
                  slideIndex = 1
              }else{
                  slideIndex++;
                  
              }
              if(slideIndex < 10){

                current.textContent = `0${slideIndex}`
            }
            else{
                current.textContent = slideIndex

            }
         
            dots.forEach(dot=>dot.style.opacity = '.5');
            dots[slideIndex -1 ].style.opacity = '1';
            dots[slideIndex -1 ].style.border = '2px solid blueviolet';


              
          })

          prev.addEventListener('click',()=>{
            if(offset == 0){
                offset = (+width.slice(0, width.length - 2)*(slides.length - 1))
            }else{
                offset-= +width.slice(0, width.length - 2)
            }
            slideInner.style.transform = `translateX(-${offset}px)`
            if(slideIndex == 1){
                slideIndex = slides.length
            }else{
                slideIndex--;
                
            }
            if(slideIndex < 10){

                current.textContent = `0${slideIndex}`
            }
            else{
                current.textContent = slideIndex

            }

            dots.forEach(dot=>dot.style.opacity = '.5');
            dots[slideIndex -1 ].style.opacity = '1';
            dots[slideIndex -1 ].style.border = '2px solid blue';

        })
        slider.style.position = 'relative';
          let indicator = document.createElement('ul');
          indicator.style.cssText = `
          position:absolute;
          right:0;
          bottom:0;
          left:0;
          z-index:15;
          display:flex;
          justify-content:center;
          margin-left:15%;
          margin-right:15%;
          list-style:none;          
          `
          slider.appendChild(indicator);
          for(i=0;i<slides.length;i++){
              const dot = document.createElement('li')
              dot.setAttribute('data-slide-to',i+1);
              dot.style.cssText =   `
              box-sizing:content-box;
              fixed: 0 1 auto;
              width:40px;
              height:8px;
              margin :0 10px;
              cursor:pointer;
              background-color: white;
              background-clip:padding-box;
              border:1px solid blueviolet;
              border-radius:10px ;
              opacity:0.5;
              transition: opacity .5s ease;
            
              `       
              if(i==0){
                  dot.style.opacity = 1
              }
              dots.push(dot)
              indicator.appendChild(dot)
            }
          slides.forEach(slide=>{
              slide.style.width = width;
          })

        dots.forEach(dot=>{
            dot.addEventListener('click',e=>{
                const slideTo = e.target.getAttribute('data-slide-to');
                 slideIndex = slideTo;
                offset = (+width.slice(0, width.length - 2)*(slideIndex- 1))
                slideInner.style.transform = `translateX(-${offset}px)`
                if(slideTo < 10){

                    current.textContent = `0${slideIndex}`
                }
                else{
                    current.textContent = slideIndex
    
                }
                dots.forEach(dot=>dot.style.opacity = '.5');
                dots[slideIndex -1 ].style.opacity = '1';
                
             
            })
        })
          setInterval(function(){
            if(offset == (+width.slice(0, width.length - 2)*(slides.length - 1))){
                offset = 0
            }else{
                offset+= +width.slice(0, width.length - 2)
            }
            slideInner.style.transform = `translateX(-${offset}px)`
            
            if(slideIndex == slides.length){
                slideIndex = 1
            }else{
                slideIndex++;
                
            }

            if(slideIndex < 10){

              current.textContent = `0${slideIndex}`
          }
          else{
              current.textContent = slideIndex

          }
          dots.forEach(dot=>dot.style.opacity = '.5')
          dots[slideIndex-1].style.opacity = '1'
          },3000)
})
let car1 = {name:'audi',model:'a4',year:'2005'}
let car2 = {name:'mers',model:'222',year:'2009'}
let car3 = {name:'bmv',model:'x5',year:'2015'}
let car4 = {name:'lexus',model:'land',year:'2001'}
let car5 = {name:'lamba',model:'5',year:'2021'}
console.table([car1,car2,car3,car4,car5])


