//mobile menu
const burger = document.querySelector(".burger"),
  logo = document.querySelector(".logo"),
  menu = document.querySelector(".menu"),
  activeLink = document.querySelector(".list__link_active");



  const removeClass = () => {
    burger.classList.toggle("open");
    menu.classList.toggle("open-menu");
    main.classList.toggle("open");
    if(logo.classList.contains("open")){
      logo.classList.remove('open')
    }else setTimeout(() => {logo.classList.add('open');},100);

    if(main.classList.contains("open")){
      main.addEventListener("click",() =>{
        burger.classList.remove("open");
        menu.classList.remove("open-menu");
        main.classList.remove("open");
        logo.classList.remove('open');
      })
    }
  }

activeLink.addEventListener('click', removeClass)

burger.addEventListener("click", removeClass);

