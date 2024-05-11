const images = document.querySelectorAll('.image-js');
const next = document.querySelector('.next-js');
const prev = document.querySelector('.prev-js');
const dots = document.querySelectorAll('.slider_dot');
let activeIndex = 0

function updateActiveDot() {
    // Remove the 'active' class from all dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    // Add the 'active' class to the current active dot
    dots[activeIndex].classList.add('active');
}

next.addEventListener('click', () => {
    images.forEach((image) => {
        image.classList.remove('active')
    })

    if(activeIndex === images.length - 1) {
        activeIndex = 0
    } else {
        activeIndex = activeIndex + 1
    }

    images[activeIndex].classList.add('active')
    updateActiveDot() // Update the dots as well when next is clicked
})

prev.addEventListener('click', () => {
    images.forEach((image) => {
        image.classList.remove('active')
    })

    if(activeIndex === 0) {
        activeIndex = images.length - 1
    } else {
        activeIndex = activeIndex - 1
    }

    images[activeIndex].classList.add('active')
    updateActiveDot()// Update the dots as well when prev is clicked
})