let offset = 0;
let sliderLine = document.querySelector('.slider_line');
let screenWidth = document.documentElement.scrollWidth;

document.querySelector(".slider_right").addEventListener('click', ()=> {

 if(screenWidth <= 599) {
        offset -= 18;
        if (offset < -18) offset = 0;
        sliderLine.style.transform = "translateX("+offset+"rem)";
    }

    else if(screenWidth > 599 && screenWidth < 1200) {
        offset -= 30;
        if (offset < -47) offset = -30;
        sliderLine.style.transform = "translateX("+offset+"rem)";
        sliderLine.style.transition = "all 0.5s easy 0s"; 
    }

    else if(screenWidth > 900) {
        offset -= 60;
        if (offset < -47) offset = -60;
        sliderLine.style.transform = "translateX("+offset+"rem)";
    }
    
})

document.querySelector(".slider_left").addEventListener('click', ()=> {
    if(screenWidth <=599) {
        offset += 18;
        if (offset > 0) offset = 0;
        sliderLine.style.transform = "translateX("+offset+"rem)";
    }

    else  if(screenWidth > 599 && screenWidth <= 1200) {
        offset += 30;
        if (offset > 0) offset = 0;
        sliderLine.style.transform = "translateX("+offset+"rem)";
    }



    else if (screenWidth > 900) {
        offset += 60;
        if (offset > 0) offset = 0;
        sliderLine.style.transform = "translateX("+offset+"rem)";
    }
})

document.querySelector(".join_btn").addEventListener('click', ()=> {
    document.querySelector(".modal").classList.add('modal_active');
})

document.querySelector(".modal_window_close").addEventListener('click', ()=> {
    document.querySelector(".modal").classList.remove('modal_active');
})

