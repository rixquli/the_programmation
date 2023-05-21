document
  .querySelector(".opening-animation > h1")
  .addEventListener("click", (e) => {
    window.location.href = "#programmation";
  });

document.querySelectorAll("#programmation > .points").forEach((e) => {
  e.addEventListener("click", (d) => {
    document.querySelector("#programmation > .points").style.transform =
      "translateY(-25%)";
    setTimeout(() => {
      document.querySelector(".showed-point").style.display = "block";
      let href = d.target.localName = "img" ? d.target.parentNode.href : d.target.href;
      if(href == undefined) return;
      window.location.href = href;
    },125);
  });
});

document.querySelectorAll(".drid-images a").forEach(e=>{
  e.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    var url = this.getAttribute('href'); // Get the URL from the href attribute
    
    // Apply the animation
    this.parentNode.classList.add('animate-link');
  
    // Wait for the animation to complete before navigating to the new page
    // setTimeout(function() {
      window.location.href = url; // Navigate to the new page
    // }, 1); // Adjust the duration to match the animation duration in CSS
  });
})