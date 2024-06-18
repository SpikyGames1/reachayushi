function adjustContainerSize() {
    const container = document.querySelector('.container');
    if (!container) {
        console.error("Container element not found");
        return;
    }

    const viewportWidth = window.innerWidth;
    console.log("Viewport width:", viewportWidth);

    if (viewportWidth < 600) {
        console.log("Setting width to 90%");
        container.style.width = '90%';
    } else if (viewportWidth >= 600 && viewportWidth < 900) {
        console.log("Setting width to 80%");
        container.style.width = '80%';
    } else {
        console.log("Setting width to 70%");
        container.style.width = '70%';
    }
}

function adjustForDPI() {
    const devicePixelRatio = window.devicePixelRatio || 1;
    const baseFontSize = 16; // Base font size in pixels
    document.documentElement.style.fontSize = `${baseFontSize / devicePixelRatio}px`;
}

// Adjust on initial load
adjustForDPI();

// Adjust on window resize
window.addEventListener('resize', adjustForDPI);