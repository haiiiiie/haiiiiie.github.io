// When the user clicks on the button, scroll to the top of the document
function topFunction() {
       
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  

   
    
  }


  //Get the button
  var mybutton =  document.getElementById("myBtn");{
      
  }
  
  window.onscroll = function () {
    scrollFunctiontop();
  };
  // When the user is on the Top part of the page, the #section parameter updates to #section0
  function scrollFunctiontop() {
    if(
     document.body.scrollTop > 1 ||
     document.documentElement.scrollTop > 1
  ) {
  }
    else{
      
  }

  // When the user scrolls down 20px from the top of the document, show the button
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    
    }
  }




  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }