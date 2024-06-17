document.addEventListener('DOMContentLoaded', function() {
    function adjustContainerSize() {
        const container = document.querySelector('.container');
        if (!container) {
            console.error("Container element not found");
            return;
        }

        const viewportWidth = window.innerWidth;

        if (viewportWidth < 600) {
            container.style.width = '90%';
        } else if (viewportWidth >= 600 && viewportWidth < 900) {
            container.style.width = '80%';
        } else {
            container.style.width = '70%';
        }
    }

    // Adjust container size on initial load
    adjustContainerSize();

    // Adjust container size on window resize
    window.addEventListener('resize', adjustContainerSize);
});

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
const img = document.querySelector("img");
img.ondragstart = () => {
  return false;
};
