var mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
    
    "use strict";
    
    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
    
};


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('nav')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)



function playVideo() {
    var video = document.getElementById('video');
    var playButton = document.getElementById('playButton');
    var overlay = document.getElementById('overlay');

    // Play the video
    video.play();

    // Hide the play button
    playButton.style.display = 'none';

    // Remove the dimming overlay
    overlay.style.display = 'none';
}

