const myCar = document.getElementById("myCar");
const road = document.getElementById("road");

const carList = [];
let gameOver = false;

// Set initial position
let carX = 210; // pixels from the left
myCar.style.left = carX + "px";

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        carX += 200; // move right by 10px
    } else if (e.key === "ArrowLeft") {
        carX -= 200; // move left by 10px
    }

    // Clamp within road width (optional)
    carX = Math.max(0, Math.min(carX, 506 - 80)); // road width - car width

    // Apply new position
    myCar.style.left = carX + "px";
});

let movementInterval = setInterval(() => {
    if (gameOver) return;

    for (let car of carList) {
        // Get bounding boxes
        let myCarRect = myCar.getBoundingClientRect();
        let comingRect = car.getBoundingClientRect();

        // Check collision
        if (isColliding(myCarRect, comingRect)) {

            gameOver = true;
            clearInterval(movementInterval); // Stop the loop
            clearInterval(spawnInterval);
            clearInterval(moveInterval);
            alert("💥 Crash!");
            // Optionally stop the game
            location.reload(); // or clearInterval(), etc.
            break;
        }
    }
}, 60);

// Move Car
let moveInterval = setInterval(() => {
    for (let car of carList) {
        let currentTop = parseInt(car.style.top) || 0;
        car.style.top = (currentTop + 150) + "px";
    }
}, 1000)

// Add Coming cars
let spawnInterval = setInterval(() => {
    let comingCar = document.createElement("div");
    const randomChoice = [1, 2, 3][Math.floor(Math.random() * 3)];
    comingCar.id = "comingCar" + randomChoice;

    const randomPosition = [0, 200, 400][Math.floor(Math.random() * 3)];
    comingCar.style.left = randomPosition + "px";
    road.append(comingCar);
    carList.push(comingCar);
}, 3000)

function isColliding(rect1, rect2) {
    return !(
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom ||
        rect1.right < rect2.left ||
        rect1.left > rect2.right
    );
}

// game loop
let lastTime = 0;

function gameLoop(timestamp) {
    if (timestamp - lastTime >= 60) {
        lastTime = timestamp;
        // You could move game logic here if needed
    }
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
