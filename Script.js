function updateInputFields() {
    var conversionType = document.getElementById("conversionType").value;
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");

    if (conversionType === "cel-fer") {
        input1.placeholder = "Celsius";
        input2.placeholder = "Fahrenheit";
    } 
    else if (conversionType === "cel-kel") {
        input1.placeholder = "Celsius";
        input2.placeholder = "Kelvin";
    } 
    else if (conversionType === "fer-kel") {
        input1.placeholder = "Fahrenheit";
        input2.placeholder = "Kelvin";
    }
    else if (conversionType === "") {
        input1.placeholder = "Value 1";
        input2.placeholder = "Value 2";
    }
}

function clearInputs() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
}

function convertTemperature() {
    var conversionType = document.getElementById("conversionType").value;
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;

    if (conversionType === "cel-fer") {
        if (input1 !== "") {
            var result = (parseFloat(input1) * 9/5) + 32;
            document.getElementById("input2").value = result.toFixed(2);
        } 
        else if (input2 !== "") {
            var result = (parseFloat(input2) - 32) * 5/9;
            document.getElementById("input1").value = result.toFixed(2);
        }
    } 
    else if (conversionType === "cel-kel") {
        if (input1 !== "") {
            var result = parseFloat(input1) + 273.15;
            document.getElementById("input2").value = result.toFixed(2);
        } 
        else if (input2 !== "") {
            var result = parseFloat(input2) - 273.15;
            document.getElementById("input1").value = result.toFixed(2);
        }
    } 
    else if (conversionType === "fer-kel") {
        if (input1 !== "") {
            var result = (parseFloat(input1) - 32) * 5/9 + 273.15;
            document.getElementById("input2").value = result.toFixed(2);
        } 
        else if (input2 !== "") {
            var result = (parseFloat(input2) - 273.15) * 9/5 + 32;
            document.getElementById("input1").value = result.toFixed(2);
        }
    }
}
