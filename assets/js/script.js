// Wait for the DOM to finish loading before setting input values to 0

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("resistance-value").value = "0";
    document.getElementById("capacitance-value").value = "0";
    document.getElementById("cut-off-frequency").value = "0";
})

/**
 * Called by the Calculate button
 * Retreives the 6 input values required to perform the calculation
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
};

