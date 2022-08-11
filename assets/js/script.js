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
    let finalResistance = (1 / ((2 * Math.PI) * scaledFrequency * scaledCapacitance)).toFixed(2);
    
/*
Checks result type to determine the scale value of the result ex: Ohm, kOhm or mOhm.
*/ 

    if (finalResistance > 999 && finalResistance < 999999) {
        convertedResistance = (finalResistance / 1000).toFixed(2);
        resultScale = "kΩ";
    } else if (finalResistance > 999999) {
        convertedResistance = (finalResistance / 1000000).toFixed(2);
        resultScale = "mΩ"
    } else {
        convertedResistance = (finalResistance / 1).toFixed(2);
        resultScale = "Ω";
    }
    
    document.getElementById("answer").innerText = `Result: ${convertedResistance}${resultScale} `;
}

/**
 * Takes the scaled values and calculates the final capacitance value
 */

 function calculateFinalCapacitance (scaledFrequency, scaledResistance) {
    let finalCapacitance = 1 / ((2 * Math.PI) * scaledResistance * scaledFrequency);

/*
Checks result type to determine the scale value of the result ex: pico, nano, micro etc...
*/    
    let resultString = finalCapacitance.toString();
    console.log(resultString);

    let resultTypePico = resultString.includes("e-12") || resultString.includes("e-11") || resultString.includes("e-10");
    console.log("Result Type Pico, ", resultTypePico);

    let resultTypeNano = resultString.includes("e-9") || resultString.includes("e-8") || resultString.includes("e-7");
    console.log("Result Type Nano, ", resultTypeNano);

    let resultTypeMicro = resultString.includes("0.000001") || resultString.includes("0.000002") || resultString.includes("0.000003") || resultString.includes("0.000004") || resultString.includes("0.000005") || resultString.includes("0.000006") || resultString.includes("0.000007") || resultString.includes("0.000008") || resultString.includes("0.000009") || resultString.includes("0.00001") || resultString.includes("0.00002") || resultString.includes("0.00003") || resultString.includes("0.00004") || resultString.includes("0.00005") || resultString.includes("0.00006") || resultString.includes("0.00007") || resultString.includes("0.00008") || resultString.includes("0.00009") || resultString.includes("0.0001") || resultString.includes("0.0002") || resultString.includes("0.0003") || resultString.includes("0.0004") || resultString.includes("0.0005") || resultString.includes("0.0006") || resultString.includes("0.0007") || resultString.includes("0.0008") || resultString.includes("0.0009");
    console.log("Result Type Micro, ", resultTypeMicro);

    let resultTypeMilli = resultString.includes("0.001") || resultString.includes("0.002") || resultString.includes("0.003") || resultString.includes("0.004") || resultString.includes("0.005") || resultString.includes("0.006") || resultString.includes("0.007") || resultString.includes("0.008") || resultString.includes("0.009") || resultString.includes("0.01") || resultString.includes("0.02") || resultString.includes("0.03") || resultString.includes("0.04") || resultString.includes("0.05") || resultString.includes("0.06") || resultString.includes("0.07") || resultString.includes("0.08") || resultString.includes("0.09") || resultString.includes("0.1") || resultString.includes("0.2") || resultString.includes("0.3") || resultString.includes("0.4") || resultString.includes("0.5") || resultString.includes("0.6") || resultString.includes("0.7") || resultString.includes("0.8") || resultString.includes("0.9");
    console.log("Result Type Milli, ", resultTypeMilli);


    if (resultTypePico) {
        console.log("pF result");
        convertedCapacitance = (finalCapacitance * 1000000000000).toFixed(2);
        resultScale = "pF"
        console.log(convertedCapacitance);
    } else if (resultTypeNano) {
        console.log("nF result");
        convertedCapacitance = (finalCapacitance * 1000000000).toFixed(2);
        resultScale = "nF"
        console.log(convertedCapacitance);
    } else if (resultTypeMicro) {
        console.log("μF result");
        convertedCapacitance = (finalCapacitance * 1000000).toFixed(2);
        resultScale = "μF"
        console.log(convertedCapacitance);
    } else if (resultTypeMilli) {
        console.log("mF result");
        convertedCapacitance = (finalCapacitance * 1000).toFixed(2);
        resultScale = "mF"
        console.log(convertedCapacitance);
    } else {
        console.log("F result");
        convertedCapacitance = (finalCapacitance * 1).toFixed(2);
        resultScale = "F"
    }
    document.getElementById("answer").innerText = `Result: ${convertedCapacitance}${resultScale} `;
}

/**
 * Takes the scaled values and calculates the final frequency value
 */

 function calculateFinalFrequency (scaledCapacitance, scaledResistance) {
    let finalFrequency = (1 / ((2 * Math.PI) * scaledResistance * scaledCapacitance)).toFixed(2);

/*
Checks result type to determine the scale value of the result ex: Ohm, kOhm or mOhm.
*/ 

if (finalFrequency > 999 && finalFrequency < 999999) {
    convertedFrequency = (finalFrequency / 1000).toFixed(2);
    resultScale = "kHz";
} else if (finalFrequency > 999999) {
    convertedFrequency = (finalFrequency / 1000000).toFixed(2);
    resultScale = "mHz"
} else {
    convertedFrequency = (finalFrequency / 1).toFixed(2);
    resultScale = "Hz";
}
    
    document.getElementById("answer").innerText = `Result: ${convertedFrequency}${resultScale} `;
}

