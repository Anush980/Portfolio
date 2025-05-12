
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hidden");
  }, 700); 
});



//  for changing the active class
 
function changeActive(i) {
    let navItems = document.getElementsByClassName("navItem");
    for(let j = 0; j < navItems.length; j++) {
      if(j == i) {
        navItems[j].classList.add("active");
      } else {
        navItems[j].classList.remove("active");  
      }
    }
  } 
  
//background mouse listener animation
  const light = document.getElementById('light');
  let mouseX = 0;
  let mouseY = 0;

  // Smoothly update light position
  const updateLightPosition = () => {
    const dx = (mouseX - parseFloat(light.style.left || 0)) / 20;
    const dy = (mouseY - parseFloat(light.style.top || 0)) / 20;
    light.style.left = `${(parseFloat(light.style.left || 0) + dx)}px`;
    light.style.top = `${(parseFloat(light.style.top || 0) + dy)}px`;

    requestAnimationFrame(updateLightPosition);
  };

  document.addEventListener('mousemove', (event) => {
    mouseX = event.pageX;
    mouseY = event.pageY;
  });

  updateLightPosition();

  //hamburger actino
  function hamburgerAction(){
  
        const menu = document.getElementById("menu");
        const hamburger = document.querySelector(".hamburger");
      
        // Toggle the active class for both the menu and the hamburger
        menu.classList.toggle("active");
        hamburger.classList.toggle("active");
      }
      function closeMenu() {
        const menu = document.getElementById("menu");
        const hamburger = document.querySelector(".hamburger");
      
        // Remove the active class from both the menu and the hamburger
        menu.classList.remove("active");
        hamburger.classList.remove("active");
      }
      
      // Add event listeners to all menu items
      document.querySelectorAll(".menu a").forEach((menuItem) => {
        menuItem.addEventListener("click", closeMenu);
      });

