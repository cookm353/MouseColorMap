// Select body
const body = document.querySelector("body")

// Add event listener for mouse position
body.addEventListener("mousemove", function(evt) {
    // Get x and y coordinates
    let x = evt.pageX
    let y = evt.pageY

    // Get max values for height and width
    const maxX = window.innerWidth
    const maxY = window.innerHeight

    // Scale to 0-255
    scaledX = 255 * x / maxX
    scaledY = 255 * y / maxY

    body.style.backgroundColor = `rgb(${scaledX},0,${scaledY})`
})