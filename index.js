document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar ul li a");
    const hamburger = document.getElementById("menuBar");
    const menuLists = document.getElementById("menuLists");

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth",
                });
                // Close the menu if it's open
                menuLists.classList.remove("active");
            }
        });
    });

    hamburger.addEventListener("click", () => {
        menuLists.classList.toggle("active");
    });
});


/*popup*/
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  function openmail() {
    document.getElementById("mail").style.display = "block";
  }
  function scrollTohome() {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
}
  function scrollToSkills() {
    document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
}
function scrollToEdu() {
    document.getElementById('timeline').scrollIntoView({ behavior: 'smooth' });
}
function scrollToPro() {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
}
function scrollToCon() {
    document.getElementById('certfications').scrollIntoView({ behavior: 'smooth' });
}
/*project section*/
