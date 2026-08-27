// Scroll to section

function scrollToSection(sectionId) {

    document
        .getElementById(sectionId)
        .scrollIntoView({
            behavior: "smooth"
        });

}


// Open booking modal

function openBooking(centerName) {

    document
        .getElementById("bookingModal")
        .style.display = "flex";

    document
        .getElementById("selectedCenter")
        .innerText = "Selected Center: " + centerName;

}


// Close modal

function closeModal() {

    document
        .getElementById("bookingModal")
        .style.display = "none";

}


// Booking form

document
    .getElementById("bookingForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        closeModal();

        showToast(
            "Booking successful! Your token is #126 🎟️"
        );

    });


// Toast message

function showToast(message) {

    const toast =
        document.getElementById("toast");

    toast.innerText = message;

    toast.style.display = "block";

    setTimeout(function() {

        toast.style.display = "none";

    }, 4000);

}


// Notification button

function showNotification() {

    showToast(
        "🔔 Your procurement slot is scheduled soon!"
    );

}


// Simulated live queue

let currentToken = 110;

setInterval(function() {

    if (currentToken < 125) {

        currentToken++;

        let farmersAhead =
            125 - currentToken;

        let waitingTime =
            farmersAhead * 3;

        let progress =
            ((currentToken - 110) / 15) * 100;


        document
            .getElementById("currentToken")
            .innerText = "#" + currentToken;


        document
            .getElementById("farmersAhead")
            .innerText =
            farmersAhead;


        document
            .getElementById("waitingTime")
            .innerText =
            waitingTime + " min";


        document
            .getElementById("progressText")
            .innerText =
            Math.round(progress) + "%";


        document
            .getElementById("progressBar")
            .style.width =
            progress + "%";

    }

}, 8000);
// ADMIN DASHBOARD - CALL NEXT TOKEN

function nextToken() {

    const currentTokenElement =
        document.getElementById("adminCurrentToken");

    const nextTokenElement =
        document.getElementById("nextTokenNumber");

    const waitingElement =
        document.getElementById("adminWaiting");

    const totalWaitingElement =
        document.getElementById("waitingFarmers");


    if (!currentTokenElement) {
        return;
    }


    let currentToken =
        parseInt(
            currentTokenElement.innerText.replace("#", "")
        );

    let waiting =
        parseInt(
            waitingElement.innerText
        );


    currentToken++;

    waiting--;


    currentTokenElement.innerText =
        "#" + currentToken;


    nextTokenElement.innerText =
        "#" + (currentToken + 1);


    waitingElement.innerText =
        waiting;


    if (totalWaitingElement) {

        totalWaitingElement.innerText =
            waiting;

    }

}


// UPDATE FARMER STATUS

function updateStatus(button) {

    const row =
        button.parentElement.parentElement;


    const status =
        row.querySelector(".status");


    status.innerText =
        "Completed";


    status.classList.remove(
        "waiting",
        "verification"
    );


    status.classList.add(
        "completed"
    );


    button.innerText =
        "Completed";


    button.disabled = true;


    button.style.opacity =
        "0.6";

}


// SEARCH FARMER

function searchFarmer() {

    const input =
        document
            .getElementById("farmerSearch");


    const filter =
        input.value.toUpperCase();


    const table =
        document
            .getElementById("farmerTable");


    const rows =
        table
            .getElementsByTagName("tr");


    for (let i = 1; i < rows.length; i++) {

        const farmerName =
            rows[i]
                .getElementsByTagName("td")[1];


        if (farmerName) {

            const text =
                farmerName.textContent ||
                farmerName.innerText;


            if (
                text.toUpperCase()
                    .indexOf(filter) > -1
            ) {

                rows[i].style.display = "";

            }

            else {

                rows[i].style.display = "none";

            }

        }

    }

}