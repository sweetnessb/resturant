// menu

// script.js

document.getElementById("button1").addEventListener("click", function() {
    showContent("content1");
});

document.getElementById("button2").addEventListener("click", function() {
    showContent("content2");
});

document.getElementById("button3").addEventListener("click", function() {
    showContent("content3");
});

document.getElementById("button4").addEventListener("click", function() {
    showContent("content4");
});

function showContent(contentId) {
    // Hide all content divs
    document.getElementById("content1").style.display = "none";
    document.getElementById("content2").style.display = "none";
    document.getElementById("content3").style.display = "none";
    document.getElementById("content4").style.display = "none";

    // Show the selected content div
    document.getElementById(contentId).style.display = "block";
}

function togleNavbar() {
    const navbarMenu = document.getElementById('navbarMenu');
    navbarMenu.style.display = (navbarMenu.style.display === 'flex' || navbarMenu.style.display === '') ? 'none' : 'flex';
}


// about



/* Demo purposes only */
$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
  
                      