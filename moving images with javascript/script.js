

window.onload = function() {
    let slides = document.getElementsByClassName('carousel-item');
    
    // Function to add 'active' class to a slide
    function addActive(slide) {
        slide.classList.add('active');  // Fixed classList capitalization
    }
    
    // Function to remove 'active' class from a slide
    function removeActive(slide) {
        slide.classList.remove('active');  // Fixed classList capitalization
    }

    // Set the first slide as active
    addActive(slides[0]);

    // Slide transition logic
    setInterval(function() {
        for (let i = 0; i < slides.length; i++) {
            // If it's the last slide, loop back to the first one
            if (i + 1 == slides.length) {
                addActive(slides[0]);  // Set the first slide as active
                setTimeout(removeActive, 350, slides[i]);  // Remove 'active' from the current last slide
                break;
            }

            // If the current slide is active, remove the active class and add it to the next slide
            if (slides[i].classList.contains('active')) {
                setTimeout(removeActive, 350, slides[i]);  // Remove 'active' after 350ms
                addActive(slides[i + 1]);  // Add 'active' to the next slide
                break;
            }
        }
    }, 1500);  // Change slide every 1500ms
};









// window.onload=function(){
//     let slides=document.getElementsByClassName('carousel-item');
//     function addActive(slide){
//         slide.classlist.add('Active');
//     }
//      function removeActive(slide){
//         slide.classlist.remove('Active');
//      }

//     addActive(slides[0]);
//     setInterval(function(){
//         for (let i=0; i<slides.length;i++){
//             if(i+1==slides.length){
//                 addActive(slides[0]);
//                 setTimeout(removeActive , 350 , slides[i]);
//                 break;
//             }
//             if(slides[i].classList.contains('active')){
//                 setTimeout(removeActive,350,slides[i]);
//                 addActive(slides[i+1]);
//                 break
//             }
//         }
//     },1500);
// };
