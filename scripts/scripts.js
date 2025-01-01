// assign initial screen size and resolutions
const CANVAS = document.getElementById('canvas');
const ctx = CANVAS.getContext('2d');
const WIDTH = window.innerWidth - 50;
const HEIGHT = window.innerHeight - 50;

CANVAS.width = WIDTH;
CANVAS.height = HEIGHT;

ctx.width = WIDTH - 20;
ctx.height = HEIGHT - 20;

let PAGE_ID = 0;

// renders bg throughout site 
const renderBackground = (bgType) => {
    switch (bgType) {
        case "Easter":
            CANVAS.style.backgroundImage = "linear-gradient(40deg, rgba(0, 100, 0, 0.3) 15%, black)";
            break;
        default:
            CANVAS.style.backgroundImage = "linear-gradient(5deg, rgba(200, 0, 255, 0.3), transparent)";
            return;
    }
}

// handles which siteData is loaded via conditional
const renderPageData = () => {
    console.log("Render page data");

}

// renders input field for user
const renderInputField = () => {
    console.log("input render here");
}

// handles page load and function triggers only
const main = () => {
    renderBackground();
    renderPageData();
    renderInputField();
}

main();