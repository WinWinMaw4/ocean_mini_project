let lightMode = document.getElementById("light-mode");
let container = document.querySelector(".container");
let mobileMenu = document.querySelector("#mobile-menu");
let sideBar = document.querySelector(".sidebar");
let faBars = document.querySelector(".fa-bars");
let faTimes = document.querySelector(".fa-times");


// localstorage
// window.addEventListener("load",()=>{
    let changed = localStorage.getItem("mode");
    if(changed != "light"){
        setDarkMode();
    }else{
        setLightMode();
    }

// })

function setDarkMode(){
    container.classList.remove("lightBackground");
    container.classList.add("darkBackground");
    document.querySelectorAll('.inverted').forEach((result)=>{
        result.classList.remove('invert');
    });
    localStorage.setItem("mode","dark");
}
function setLightMode(){
    container.classList.remove("darkBackground");
    container.classList.add("lightBackground");
    document.querySelectorAll('.inverted').forEach((result)=>{
        result.classList.add('invert');
    });
    localStorage.setItem("mode","light")
  
}

lightMode.addEventListener('click',()=>{
    let darkMode = localStorage.getItem("mode");

    if(darkMode === 'light'){
        setDarkMode();
      
    }else{
        setLightMode();       
    }
    // container.classList.toggle("lightBackground");
    // container.classList.toggle("darkBackground");
    // localStorage.setItem("mode","1");
})
// end localstoreage

mobileMenu.addEventListener("click",()=>{
    // console.log(sideBar);
    sideBar.classList.toggle("show");
    faBars.classList.toggle("hide_faBars");
    faTimes.classList.toggle('show_faTimes');

})