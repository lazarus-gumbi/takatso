const paragraph = `
      <h1>
      © Copyright &copy; ${new Date().getFullYear()} | Takatso Aviation (Pty) Ltd
      </h1>
    `;

document.getElementById("copyright-section").innerHTML = paragraph;

hamburger = document.querySelector(".hamburger")
hamburger.onclick = function () {  
  navbar = document.querySelector(".nav")
  navbar.classList.toggle("active")
  icon = document.querySelector(".icon")
  if (icon.classList.contains('fa-bars')){
    icon.classList.remove('fa-bars')
    icon.classList.add('fa-close')
  } else {
    icon.classList.remove('fa-close')
    icon.classList.add('fa-bars')
  }
}