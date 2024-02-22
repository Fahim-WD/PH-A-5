const seats = document.querySelectorAll('.chair');
const ticketPrice = ticketPriceById('ticketPrice');

let countValue = 0;

for (const seat of seats) {
    seat.addEventListener('click', function (e) {
        const clickseat= e.target.innerText;
        const buttonCliked = document.getElementById(clickseat);
        // seat active color
        addColorById(clickseat);
        //button limit
        if (countValue >= 4) {
            alert('Sorry limit cross!');
            return;
        }
        // seat color & bg color changed 
        addColorById(clickseat);
        //remaining seat calculate
        const remainingSeatValue = getInnerValueById('seatCounter');
        const remainingSeat = remainingSeatValue - 1;
        setInnerValueById('seatCounter', remainingSeat);
        //selected seat count increase 
        const newCountValue = increaseCounterValueById('seat');
        setInnerValueById('seat', newCountValue);
        //adding selected seat details
        seat_classById('seat_class', clickseat, ticketPrice);
        //total price update
        const finalPrice = updateElementValueById('totalPrice', ticketPrice);
        setInnerValueById('totalPrice', finalPrice);
        //grand total update
        const GrandTotalPrice = updateGrandTotalPrice(finalPrice);
        setInnerValueById('grandTotal', GrandTotalPrice);
        countValue++;
        //1 time click 
        buttonCliked.setAttribute('disabled' , true)
    });
}
// coupon 
couponClaimButton.addEventListener('click' , function(){
    const couponInputValue = couponInput.value;
    if(couponInputValue === couponOneCode){
        calculateUpdateWithCouponOne();
        return;
    }
    else if(couponInputValue === couponTwoCode){
        calculateUpdateWithCouponTwo();
        return;
    }
    else{
        alert('Your Provided Coupon is not valid !!');
        return;
    }
})
