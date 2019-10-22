const hamburguesa = document.querySelector('.hamburguesa'),
      navLinks = document.querySelector('.nav-links'),
      links = document.querySelector('.nav-links li');

hamburguesa.addEventListener("click", () =>{
    navLinks.classList.toggle("open");
});
