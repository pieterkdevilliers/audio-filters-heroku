// Wait for the DOM to finish loading before setting input values to 0
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("resistance-value").value = "0";
    document.getElementById("capacitance-value").value = "0";
    document.getElementById("cut-off-frequency").value = "0";
});

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

    let scaledResistance = parseFloat(
        calculateScaledResistance(resistanceValue, resistanceScale)
        );
    let scaledCapacitance = parseFloat(
        calculateScaledCapacitance(capacitanceValue, capacitanceScale)
        );
    let scaledFrequency = parseFloat(
        calculateScaledFrequency(frequencyValue, frequencyScale)
        );

        if (resistanceValue === "0" && capacitanceValue !== "0" && frequencyValue !== "0") {
        calculateFinalResistance(scaledCapacitance, scaledFrequency);
    } else if (resistanceValue !== "0" && capacitanceValue === "0" && frequencyValue !== "0") {
        calculateFinalCapacitance(scaledFrequency, scaledResistance);
    } else if (resistanceValue !== "0" && capacitanceValue !== "0" && frequencyValue === "0") {
        calculateFinalFrequency(scaledCapacitance, scaledResistance);
    } else {
        alert("Please complete two values in order to calculate the third");
        deliverAlertMessage();
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

    deliverResistanceValue(convertedResistance, resultScale);
}

/**
 * Takes the scaled values and calculates the final capacitance value
 */
 function calculateFinalCapacitance (scaledFrequency, scaledResistance) {
    finalCapacitance = 1 / ((2 * Math.PI) * scaledResistance * scaledFrequency);
/*
Checks result type to determine the scale value of the result ex: pico, nano, micro etc...
*/ 
    resultString = finalCapacitance.toString();

    picoValues = [
        "e-12",
        "e-11",
        "e-10"
    ];
    picoValues.forEach(comparePicoArray);

    nanoValues = [
        "e-9",
        "e-8",
        "e-7"
    ];
    nanoValues.forEach(compareNanoArray);

    microValues = [
        "0.000001",
        "0.000002",
        "0.000003",
        "0.000004",
        "0.000005",
        "0.000006",
        "0.000007",
        "0.000008",
        "0.000009",
        "0.00001",
        "0.00002",
        "0.00003",
        "0.00004",
        "0.00005",
        "0.00006",
        "0.00007",
        "0.00008",
        "0.00009",
        "0.0001",
        "0.0002",
        "0.0003",
        "0.0004",
        "0.0005",
        "0.0006",
        "0.0007",
        "0.0008",
        "0.0009"
    ];
    microValues.forEach(compareMicroArray);

    milliValues = [
        "0.001",
        "0.002",
        "0.003",
        "0.004",
        "0.005",
        "0.006",
        "0.007",
        "0.008",
        "0.009",
        "0.01",
        "0.02",
        "0.03",
        "0.04",
        "0.05",
        "0.06",
        "0.07",
        "0.08",
        "0.09",
        "0.1",
        "0.2",
        "0.3",
        "0.4",
        "0.5",
        "0.6",
        "0.7",
        "0.8",
        "0.9"
    ];
    milliValues.forEach(compareMilliArray);
}

/** Compares the result string to the items in the array - picoValues. If resultTypePico is true, the the function capacitanceScaleCalculation is called */
function comparePicoArray(item) {
    resultTypePico = resultString.includes(item);

    if (resultTypePico) {
        capacitanceScaleCalculation(resultString);
    }
}

/** Compares the result string to the items in the array - nanoValues. If resultTypeNano is true, the the function capacitanceScaleCalculation is called */
function compareNanoArray(item) {
    resultTypeNano = resultString.includes(item);

    if (resultTypeNano) {
        capacitanceScaleCalculation(resultString);
    }
}

/** Compares the result string to the items in the array - microValues. If resultTypeMicro is true, the the function capacitanceScaleCalculation is called */
function compareMicroArray(item) {
    resultTypeMicro = resultString.includes(item);

    if (resultTypeMicro) {
        capacitanceScaleCalculation(resultString);
    }
}

/** Compares the result string to the items in the array - milliValues. If resultTypeMilli is true, the the function capacitanceScaleCalculation is called */
function compareMilliArray(item) {
    resultTypeMilli = resultString.includes(item);

    if (resultTypeMilli) {
        capacitanceScaleCalculation(resultString);
    }
}

/** If Else statements for correctly identifying the final capacitance value and unit */
function capacitanceScaleCalculation () {
    if (resultTypePico) {
        convertedCapacitance = (finalCapacitance * 1000000000000).toFixed(2);
        resultScale = "pF"
    } else if (resultTypeNano) {
        convertedCapacitance = (finalCapacitance * 1000000000).toFixed(2);
        resultScale = "nF"
    } else if (resultTypeMicro) {
        convertedCapacitance = (finalCapacitance * 1000000).toFixed(2);
        resultScale = "μF"
    } else if (resultTypeMilli) {
        convertedCapacitance = (finalCapacitance * 1000).toFixed(2);
        resultScale = "mF"
    } else {
        convertedCapacitance = (finalCapacitance * 1).toFixed(2);
        resultScale = "F"
    }
    deliverCapacitanceValue(convertedCapacitance, resultScale);
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

deliverFrequencyValue(convertedFrequency, resultScale);
}

/**
 * Resets all values to 0 after returning the result
 */
function resetValues () {
    document.getElementById("resistance-value").value = "0";
    document.getElementById("capacitance-value").value = "0";
    document.getElementById("cut-off-frequency").value = "0";
}

/**
 * Deliver Resistance Value On-Screen 
 */

function deliverResistanceValue () {
    document.getElementById("answer").innerText = `Result: ${convertedResistance}${resultScale} `;
    resetValues();
}

/**
 * Deliver Capacitance Value On-Screen 
 */

 function deliverCapacitanceValue () {
    document.getElementById("answer").innerText = `Result: ${convertedCapacitance}${resultScale} `;
    resetValues();
}

/**
 * Deliver Frequency Value On-Screen 
 */

 function deliverFrequencyValue () {
    document.getElementById("answer").innerText = `Result: ${convertedFrequency}${resultScale} `;
    resetValues();
}

/**
 * Deliver The ALert Message On-Screen 
 */

 function deliverAlertMessage () {
    document.getElementById("alert").innerText = "Please complete two values in order to calculate the third";
    console.log("error message generated");
    // resetValues();
}