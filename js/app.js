let seatCount = 0,
    totalPrice = 0;

const seats = document.querySelectorAll("#bookingBtn");

seats.forEach((seat) => {
    seat.addEventListener("click", (e) => {
        if (seatCount < 4) {
            // The Calculation
            seatCount += 1;
            totalPrice += 550;

            //Dynamic Style
            e.target.style.background = "#1DD100";
            e.target.style.color = "#FFFFFF";

            getId("unselected").classList.replace("flex", "hidden");
            getId("selected").classList.replace("hidden", "flex");

            // Appending
            createdLI("selectedSeat", e.target.innerText, "okay");
            createdLI("selectedSeat", "Economy", "center");
            createdLI("selectedSeat", 550, "right");

            // Changing The Value
            alterInnerText("seatCount", seatCount);
            alterInnerText("seatsLeft", 16 - seatCount);
            alterInnerText("totalPrice", totalPrice);
            alterInnerText("grandTotal", totalPrice);

            //Enabling The Button
            if (seatCount === 4) removeDisabled("couponSubmit");
        } else {
            alert(
                "Our system currently only supports up to four bookings at once."
            );
        }
    });
});

getId("passengerNumb").addEventListener("keyup", (e) => {
    if (e.target.value !== "" && seatCount > 0) {
        removeDisabled("nextBtn");
    } else {
        addDisabled("nextBtn");
    }
});

getId("couponSubmit").addEventListener("click", (e) => {
    if (checkInput("couponInput", "NEW15")) {
        const discountedPrice = totalPrice * 0.15;
        createdLI("theprice", "Discount Price", "okay");
        createdLI("theprice", discountedPrice, "end");
        alterInnerText("grandTotal", totalPrice - discountedPrice);
        getId("removable").remove();
    } else if (checkInput("couponInput", "Couple20")) {
        const discountedPrice = totalPrice * 0.2;
        createdLI("theprice", "Discount Price", "okay");
        createdLI("theprice", discountedPrice, "end");
        alterInnerText("grandTotal", totalPrice - discountedPrice);
        getId("removable").remove();
    } else {
        alert(
            "To get a discount, please use the following two coupons: 'NEW15' and 'Couple 20'."
        );
    }
});