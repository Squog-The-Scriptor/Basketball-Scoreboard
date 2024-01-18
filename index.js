let homeScore = 0
let guestScore = 0

let homeEl = document.getElementById("home-score")
let guestEl = document.getElementById("guest-score")

function plusOne() {
    homeScore += 1
    homeEl.textContent = homeScore
    
}

function plusTwo() {
    homeScore += 2
    homeEl.textContent = homeScore
    
}


function plusThree() {
    homeScore += 3
    homeEl.textContent = homeScore
}

/* Guest Tracker*/
function plusOneG() {
    guestScore += 1
    guestEl.textContent = guestScore
    
}

function plusTwoG() {
    guestScore += 2
    guestEl.textContent = guestScore
    
}

function plusThreeG() {
    guestScore += 3
    guestEl.textContent = guestScore
}


/* reset function */
function reset() {
    guestScore = 0
    homeScore = 0
    guestEl.textContent = 0
    homeEl.textContent = 0
}
