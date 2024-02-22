// change color and bg color by id 
function addColorById(eleOfID) {
    const element = document.getElementById(eleOfID);
    element.style.color = 'white';
    element.style.backgroundColor = '#1DD100';
}
//ticket priceeatName
function ticketPriceById(eleOfID) {
    const ticketPriceElement = document.getElementById(eleOfID);
    const ticketPriceElementText = ticketPriceElement.innerText;
    const ticketPriceValue = parseInt(ticketPriceElementText);
    return ticketPriceValue;
}
// get element value by Id
function getInnerValueById(eleOfID) {
    const element = document.getElementById(eleOfID);
    const elementText = element.innerText;
    const elementValue = parseInt(elementText);
    return elementValue;
}
//set element value by id
function setInnerValueById(eleOfID, value) {
    const element = document.getElementById(eleOfID);
    element.innerText = value;
}

//increase counter value by Id
function increaseCounterValueById(eleOfID) {
    const element = document.getElementById(eleOfID);
    const elementText = element.innerText;
    const elementValue = parseInt(elementText);
    const elementNewValue = elementValue + 1;
    return elementNewValue;
}

// adding selected seat by id

function seat_classById(eleOfID, seatName, seatPrice) {
    const container = document.getElementById(eleOfID);

    const div = document.createElement('div');

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    const p2 = document.createElement('p');
    p2.innerText = 'Economoy';
    const p3 = document.createElement('p');
    p3.innerText = seatPrice;

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);

    div.style.display = 'flex';
    div.style.justifyContent = 'space-between';
    container.appendChild(div);
}

// total price 
function updateElementValueById(elementId, ticketPrice) {
    const currentTotalPriceElement = document.getElementById(elementId);
    const currentTotalPriceText = currentTotalPriceElement.innerText;
    const currentTotalPrice = parseInt(currentTotalPriceText);
    const finalPrice = currentTotalPrice + ticketPrice;
    return finalPrice;
}
//Grand Total Price 
function updateGrandTotalPrice(finalPrice) {
    const finalGrandPrice = finalPrice;
    return finalGrandPrice;
}

