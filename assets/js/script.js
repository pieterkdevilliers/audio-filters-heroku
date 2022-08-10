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

    let scaledResistance = parseFloat(calculateScaledResistance(resistanceValue, resistanceScale));
    let scaledCapacitance = parseFloat(calculateScaledCapacitance(capacitanceValue, capacitanceScale));
    let scaledFrequency = parseFloat(calculateScaledFrequency(frequencyValue, frequencyScale));

        if (resistanceValue === "0" && capacitanceValue !== "0" && frequencyValue !== "0") {
        calculateFinalResistance(scaledCapacitance, scaledFrequency);
    } else if (resistanceValue !== "0" && capacitanceValue === "0" && frequencyValue !== "0") {
        calculateFinalCapacitance(scaledFrequency, scaledResistance);
    } else if (resistanceValue !== "0" && capacitanceValue !== "0" && frequencyValue === "0") {
        calculateFinalFrequency(scaledCapacitance, scaledResistance);
    } else {
        alert("Please complete two values in order to calculate the third")
    }

}

/**
 * Takes the values provided to receiveValues and calculates the scaled resistanceValue
 */

function calculateScaledResistance(resistanceValue, resistanceScale) {
    if (resistanceScale === "kohm") {
        let scaledResistance  = resistanceValue * 1000;
        return scaledResistance;
    } else if (resistanceScale === "mohm") {
        let scaledResistance = resistanceValue * 1000000;
        return scaledResistance;
    } else {
        let scaledResistance = resistanceValue;
        return scaledResistance;
    }
}

/**
 * Takes the values provided to receiveValues and calculates the scaled apacitanceValue
 */

function calculateScaledCapacitance(capacitanceValue, capacitanceScale) {
    if (capacitanceScale === "mF") {
        let scaledCapacitance = capacitanceValue / 1000;
        return scaledCapacitance;
    } else if (capacitanceScale === "uF") {
        let scaledCapacitance = capacitanceValue / 1000000;
        return scaledCapacitance;
    } else if (capacitanceScale === "nF") {
        let scaledCapacitance = capacitanceValue / 1000000000;
        return scaledCapacitance;
    } else if (capacitanceScale === "pF") {
        let scaledCapacitance = capacitanceValue / 1000000000000;
        return scaledCapacitance;
    } else {
        let scaledCapacitance = capacitanceValue;
        return scaledCapacitance;
    }
}

/**
 * Takes the values provided to receiveValues and calculates the scaled frequencyValue
 */

function calculateScaledFrequency(frequencyValue, frequencyScale) {
    if (frequencyScale === "kHz") {
        let scaledFrequency = frequencyValue * 1000;
        return scaledFrequency;
    } else if (frequencyScale === "mHz") {
        let scaledFrequency = frequencyValue * 1000000;
        return scaledFrequency;
    } else {
        let scaledFrequency = frequencyValue;
        return scaledFrequency;
    }
}

/**
 * Takes the scaled values and calculates the final resistance value
 */

function calculateFinalResistance (scaledCapacitance, scaledFrequency) {
    let finalResistance = 1 / ((2 * Math.PI) * scaledFrequency * scaledCapacitance);
    console.log("Calculating final resistance");
    console.log(finalResistance);
    document.getElementById("answer").innerText = `Result in Ohm: ${finalResistance}`
}

/**
 * Takes the scaled values and calculates the final capacitance value
 */

 function calculateFinalCapacitance (scaledFrequency, scaledResistance) {
    let finalCapacitance = 1 / ((2 * Math.PI) * scaledResistance * scaledFrequency);
    console.log("Calculating final capacitance");
    console.log(finalCapacitance);
    document.getElementById("answer").innerText = `Result in Farad: ${finalCapacitance}`
}

/**
 * Takes the scaled values and calculates the final frequency value
 */

 function calculateFinalFrequency (scaledCapacitance, scaledResistance) {
    let finalFrequency = 1 / ((2 * Math.PI) * scaledResistance * scaledCapacitance);
    console.log("Calculating final frequency");
    console.log(finalFrequency);
    document.getElementById("answer").innerText = `Result in Hz: ${finalFrequency}`
}

