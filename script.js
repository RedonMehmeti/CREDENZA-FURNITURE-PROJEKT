
let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});


document.addEventListener("DOMContentLoaded", function() {
    const colorDivs = document.querySelectorAll('.color');
    const productImg = document.querySelector('.product-img');

    colorDivs.forEach(function(colorDiv) {
        colorDiv.addEventListener('click', function() {
            const imgSrc = colorDiv.getAttribute('data-img');

            // Fade out the current image using CSS transition
            productImg.style.transition = 'opacity 0.3s ease-in-out';
            productImg.style.opacity = '0';

            // Wait for a short delay for the fade out effect
            setTimeout(function() {
                // Change the image source
                productImg.setAttribute('src', imgSrc);

                // Fade in the new image using CSS transition
                productImg.style.opacity = '1';
            }, 300); // Adjust the delay time as needed
        });
    });
});


