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
    homes.style.display="block"
    abouts.style.display="none";
    services.style.display="none";
    portfolios.style.display="none";
    contacts.style.display="none";
}
about.onclick =()=>{
    abouts.style.display="block";
    homes.style.display="none";
    services.style.display="none";
    portfolios.style.display="none";
    contacts.style.display="none";
}
service.onclick =()=>{
    services.style.display="block";
    abouts.style.display="none";
    homes.style.display="none";
    portfolios.style.display="none";
    contacts.style.display="none";
}
portfolio.onclick =()=>{
    portfolios.style.display="block";
    abouts.style.display="none";
    services.style.display="none";
    homes.style.odisplay="none";
    contacts.style.display="none";;
}
contact.onclick =()=>{
    contacts.style.display="block";
    abouts.style.display="none";
    services.style.display="none";
    portfolios.style.display="none";
    homes.style.display="none";
}
