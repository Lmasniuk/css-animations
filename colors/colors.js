function changeColor(){
    const div = document.getElementById('color-changer');
        // Generate a random color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    div.style.backgroundColor = randomColor;
    const boxShadowValue = `10px 10px 0px 0px ${hexToRGBA(randomColor,0.5)}`;
    div.style.boxShadow = boxShadowValue;
}


function hexToRGBA(hex, alpha) {
    // Remove the hash sign if it's included
    hex = hex.replace('#', '');

    // Parse the hex values
    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);

    // Create the RGBA string
    var rgba = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';

    return rgba;
}