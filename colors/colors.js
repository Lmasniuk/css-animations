function changeColor(){
    const div = document.getElementById('color-changer');
        // Generate a random color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    div.style.backgroundColor = randomColor;
}
