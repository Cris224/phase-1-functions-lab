// Code your solution in this file!
const hq = 42
function distanceFromHqInBlocks(blocks){
    if (blocks > hq){
        return blocks - hq;
    } else {
        return hq - blocks;
    }
}

function distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks) *264;
}

function distanceTravelledInFeet(num1, num2){
    if (num1 > num2){
        return (num1 - num2) * 264;
    } else {
        return (num2 - num1) * 264;
    }
}

function calculatesFarePrice(num1, num2){
    let distance = distanceTravelledInFeet(num1, num2)
    if (distance < 400){
        return 0;
    } else if (distance < 2000){
        return (distance - 400) * .02; 
    } else if (distance <2500){
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
