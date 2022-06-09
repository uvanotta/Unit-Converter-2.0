
let button = document.getElementById("button")


function convert() {

    let number = document.getElementById("number").value

    console.log(number)

    let metricLengthNumber = number
    let ImperialLengthNumber = (number * 3.28084).toFixed(3)

    let lengthPhrase = metricLengthNumber + " meters = " + ImperialLengthNumber + " feet | " + number + " feet = " +  (number / 3.28084).toFixed(3) + " meters"

    document.getElementById("meter-feet-conversion").textContent = lengthPhrase;



    let metricVolumeNumber = number
    let ImperialVolumeNumber = (number * 0.2641722).toFixed(3)

    let volumePhrase = metricVolumeNumber + " liters = " + ImperialVolumeNumber + " gallons | " + number + " gallons = " +  (number / 0.2641722).toFixed(3) + " liters"

    document.getElementById("liters-gallons-conversion").textContent = volumePhrase;



    let metricMassNumber = number
    let ImperialMassNumber = (number * 2.20462262185).toFixed(3)

    let massPhrase = metricMassNumber + " kilos = " + ImperialMassNumber + " pounds | " + number + " pounds = " +  (number / 2.20462262185).toFixed(3) + " kilos"

    document.getElementById("kilo-pound-conversion").textContent = massPhrase;
}
