let rotationCounter = 1;

function rotate(){
    const div = document.getElementById('transformer');
    const rotationAmount = 45 * rotationCounter;
    rotationCounter++;

    div.style.transform =  `rotate(${rotationAmount}deg)`;
}
