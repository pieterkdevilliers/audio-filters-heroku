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

    calculateScaledResistance(resistanceValue, resistanceScale);
    calculateScaledCapacitance(capacitanceValue, capacitanceScale);
    calculateScaledFrequency(frequencyValue, frequencyScale);

    if (resistanceValue === "0" && capacitanceValue !== "0" && frequencyValue !== "0") {
        calculateFinalResistance(scaledCapacitance, scaledFrequence);
    } else if (resistanceValue !== "0" && capacitanceValue === "0" && frequencyValue !== "0") {
        calculateFinalCapacitance(scaledResistance, scaledFrequence);
    } else if (resistanceValue !== "0" && capacitanceValue !== "0" && frequencyValue === "0") {
        calculateFinalFrequency(scaledCapacitance, scaledResistance);
    } else {
        console.log("Please complete two values")
    };
}

/**
 * Takes the values provided to receiveValues and calculates the scaled resistanceValue
 */

function calculateScaledResistance(resistanceValue, resistanceScale) {
    console.log("Calculating Resistance");
    console.log(resistanceValue, resistanceScale);
    if (resistanceScale === "kohm") {
        let scaledResistance  = resistanceValue * 1000;
    } else if (resistanceScale === "mohm") {
        console.log("Resistance Scale is mHz");
        let scaledResistance = resistanceValue * 1000000;
    } else {
        console.log("Resistance Scale is Hz");
        let scaledResistance = resistanceValue;
    }
    
}

/**
 * Takes the values provided to receiveValues and calculates the scaled apacitanceValue
 */

function calculateScaledCapacitance(capacitanceValue, capacitanceScale) {
    console.log("Calculating Capacitance");
    console.log(capacitanceValue, capacitanceScale);
    if (capacitanceScale === "mF") {
        let scaledCapacitance = capacitanceValue / 1000;
    } else if (capacitanceScale === "uF") {
        let scaledCapacitance = capacitanceValue / 1000000;
    } else if (capacitanceScale === "nF") {
        let scaledCapacitance = capacitanceValue / 1000000000;
    } else if (capacitanceScale === "pF") {
        let scaled = capacitanceValue / 1000000000000;
    } else {
        let scaledCapacitance = capacitanceValue;
    }
}

/**
 * Takes the values provided to receiveValues and calculates the scaled frequencyValue
 */

function calculateScaledFrequency(frequencyValue, frequencyScale) {
    console.log("Calculating Frequency");
    console.log(frequencyValue, frequencyScale);
    if (frequencyScale === "kHz") {
        let scaledFrequence = frequencyValue * 1000;
    } else if (frequencyScale === "mHz") {
        let scaledFrequence = frequencyValue * 1000000;
    } else {
        let scaledFrequence = frequencyValue;
    }
}

/**
 * Takes the scaled values and calculates the final resistance value
 */

function calculateFinalResistance (scaledCapacitance, scaledFrequence) {
    console.log("Calculating final resistance");
}

/**
 * Takes the scaled values and calculates the final capacitance value
 */

 function calculateFinalCapacitance (scaledResistance, scaledFrequence) {
    console.log("Calculating final capacitance");
}

/**
 * Takes the scaled values and calculates the final frequency value
 */

 function calculateFinalFrequency (scaledCapacitance, scaledResistance) {
    console.log("Calculating final frequency");
}