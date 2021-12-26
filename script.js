var name = prompt("hello are you ready for new year party!!! please enter your name !!")
  document.getElementById("h1").innerHTML= "hello " +name + " enjoy the new year virtual party!!";
 
     const scriptURL = 'https://script.google.com/macros/s/AKfycbxPRJ7FAx6rP_iFZ9_Ik_fvJ28FaiW_TMY_-LJl-3bW6SRcBPAJ17wKLNKkj8XegQZJ/exec'
     const form = document.forms['hello']
     form.addEventListener('submit', e => {

   e.preventDefault()
     fetch(scriptURL, { method: 'POST', body: new FormData(form) })
       .then(response => alert("your wish is collected") )
       .catch(error => console.error('Error!', error.message))
 
       
       document.getElementById("img-5").style.display = "block";
       document.getElementById("form").innerHTML = "";
     document.getElementById("text").innerHTML = "happy new year 2022  " + name;
       alert("happy new year " + name)
      })
 
 
 
 var countDownDate = new Date("dec 26, 2021 17:10:00").getTime();
 
 //Update the count down every 1 second
 var x = setInterval(function() {
 
 // Get today's date and time
 var now = new Date().getTime();
 
 // Find the distance between now and the count down date
 var distance = countDownDate - now;
 
 // Time calculations for days, hours, minutes and seconds
 var days = Math.floor(distance / (1000 * 60 * 60 * 24));
 var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
 // Display the result in the element with id="demo"
 document.getElementById("h3").innerHTML = days + "d " + hours + "h "
 + minutes + "m " + seconds + "s ";
 
 // If the count down is finished, write some text
 
 
 
 
 if (distance < 0) {
     document.getElementById("h3").innerHTML= "happy new year " + name;
 
     clearInterval(x);
  
  
   
 }
 }, 1000); 
