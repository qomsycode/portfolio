//nav-bar small screen responsiveness
//assigning our icon button id
const menubtn = document.querySelector('#menu-icon');
const xbtn = document.querySelector('#x-icon');

            const navbar = document.querySelector('.nav-bar');
//add event listener, when d btn is clicked, menu pop up and
//menu btn icon to cancel icon
            menubtn.addEventListener('click',()=>{
                navbar.classList.toggle('mobile-menu');
                menubtn.style.display='none';
                xbtn.style.display='block';
            })
//add event listener for the cancel button, when clicked, menu
//draws back and cancel icon changes to menu icon
        
            xbtn.addEventListener('click',()=>{
                navbar.classList.toggle('mobile-menu');
                xbtn.style.display='none';
                menubtn.style.display='block';
            })

const home= document.querySelector("#home");
const homes= document.querySelector(".homes");
const about= document.querySelector(".about");
const abouts= document.querySelector(".abouts");
const service= document.querySelector(".service");
const services= document.querySelector(".services");
const portfolio= document.querySelector(".portfolio");
const portfolios= document.querySelector(".portfolios");
const contact= document.querySelector(".contact");
const contacts= document.querySelector(".contacts");

home.onclick =()=>{
    homes.style.opacity="1"
    abouts.style.opacity="0";
    services.style.opacity="0";
    portfolios.style.opacity="0";
    contacts.style.opacity="0";
}
about.onclick =()=>{
    abouts.style.opacity="1"
    homes.style.opacity="0";
    services.style.opacity="0";
    portfolios.style.opacity="0";
    contacts.style.opacity="0";
}
service.onclick =()=>{
    services.style.opacity="1"
    abouts.style.opacity="0";
    homes.style.opacity="0";
    portfolios.style.opacity="0";
    contacts.style.opacity="0";
}
portfolio.onclick =()=>{
    portfolios.style.opacity="1"
    abouts.style.opacity="0";
    services.style.opacity="0";
    homes.style.opacity="0";
    contacts.style.opacity="0";
}
contact.onclick =()=>{
    contacts.style.opacity="1"
    abouts.style.opacity="0";
    services.style.opacity="0";
    portfolios.style.opacity="0";
    homes.style.opacity="0";
}
