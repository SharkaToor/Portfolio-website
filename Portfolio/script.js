console.log("script running...")
document.querySelector('.close').style.display = 'none' ;
document.querySelector('.hamburger').addEventListener("click", () =>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.hamburger').style.display = 'inline'
        document.querySelector('.close').style.display = 'none'
    }
    else{
        document.querySelector('.close').style.display = 'none'
        setTimeout( () => {
            document.querySelector('.hamburger').style.display = 'inline'
        }, 300);
    }
})

let navigataionBar = document.querySelector('navigation class from HTML code');
let navigationToggle = document.querySelector('navigation toggle class from HTML code');
navigationToggle.addEventListener('click', function (event)
{
navigataionBar.classList.toggle('active')
});
// JavaScript Code: HamburgerMenu.js let navWrapper=document.querySelector('.navigationBar'),
// navToogler = document .querySelector('.navigationToggle') navToogler.addEventListener('click', function(event) {
//         navWrapper.classList.toggle('active')
//     });

// ****************theme changer ************************

// const themeSwitch = document.getElementById('theme-switch');

// themeSwitch.addEventListener('change', function() {
//   document.body.classList.toggle('dark-theme');
// });
