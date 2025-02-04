// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective (string = "*"){
    return function (param = "special"){
        return `You are ${string}${param}${string}!`
    }
}

const Calculator = {
    add: function(a,b){
        return a + b
    },
    subtract: function(a,b){
        return a - b
    },
    multiply: function (a,b){
        return a * b
    },
    divide: function (a,b){
        return a / b
    }
}

function actionApplyer(int, array){
    let x = int
    array.forEach(funct => {
        x = funct(x)
    });
    return x
}