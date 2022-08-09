// Wait for the DOM to finish loading before setting input values to 0

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("resistance-value").value = "0";
    document.getElementById("capacitance-value").value = "0";
    document.getElementById("cut-off-frequency").value = "0";
})

/**
 * Called by the Calculate button
 * Retreives the 6 input values required to perform the calculation
 * If/Else statement determines value to be calculated
 */

function receiveValues() {
    let resistanceValue = document.getElementById("resistance-value").value;
    let resistanceScale = document.getElementById("resistance-scale").value;
    let capacitanceValue = document.getElementById("capacitance-value").value;
    let capacitanceScale = document.getElementById("capacitance-scale").value;
    let frequencyValue = document.getElementById("cut-off-frequency").value;
    let frequencyScale = document.getElementById("frequency-scale").value;

    console.log(`${resistanceValue},
    ${resistanceScale},
    ${capacitanceValue},
    ${capacitanceScale},
    ${frequencyValue},
    ${frequencyScale}`);

    if (resistanceValue === "0" && capacitanceValue !== "0" && frequencyValue !== "0") {
        calculateActualResistance();
    } else if (resistanceValue !== "0" && capacitanceValue === "0" && frequencyValue !== "0") {
        calculateActualCapacitance();
    } else if (resistanceValue !== "0" && capacitanceValue !== "0" && frequencyValue === "0") {
        calculateActualFrequency();
    } else {
        console.log("Please complete two values")
    };
}

/**
 * Takes the values provided to receiveValues and calculates the actual resistanceValue
 */

function calculateActualResistance() {
    console.log("Calculating Resistance")
}

/**
 * Takes the values provided to receiveValues and calculates the cactual apacitanceValue
 */

function calculateActualCapacitance() {
    console.log("Calculating Capacitance")
}

/**
 * Takes the values provided to receiveValues and calculates the actual frequencyValue
 */

function calculateActualFrequency() {
    console.log("Calculating Frequency")
}

