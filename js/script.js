// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    // alert('foi');
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    // document.getElementById("navbar").style.padding = "30px 10px";
    // document.getElementById("id-div-logo").style.width = "120px";
    document.getElementById("id-div-logo").style.height = "0";
    document.getElementById("super-top").style.display = "none";
    document.getElementById("main-nav").style.height = "37px";
  } else {
    // document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("id-div-logo").style.fontSize = "35px";
  }

}