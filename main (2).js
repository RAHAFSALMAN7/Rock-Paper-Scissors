const handOptions = {
    "rock":     "images/rock.png",
    "paper":    "images/paper.png",
    "scissors": "images/scissors.png",
}

let SCORE = 0;

    //hide "hands" show "contest"
const pickUserHand = (hand) => {
    let hands = document.querySelector(".hands");
    hands.style.display = "none";

    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

    // set user Image
    document.getElementById("userPickImage").src = handOptions[hand];

    pickComputerHand(hand);
};

    //getting cpu hand
const pickComputerHand = (hand) => {
    let hands = ["rock", "paper", "scissors",];
    let cpHand = hands[Math.floor(Math.random() * hands.length)];

    // set computer image 
    document.getElementById("computerPickImage").src = handOptions[cpHand]

    referee(hand, cpHand);
};

    //picking winner/looser
    //change score
const referee = (userHand, cpHand) => {
    if (userHand == "paper" && cpHand == "scissors") {
        setDecision("YOU LOSE!");
    }


    if (userHand == "paper" && cpHand == "rock") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
    }


    if (userHand == "paper" && cpHand == "paper") {
        setDecision("It's a tie!");
    }

    if (userHand == "rock" && cpHand == "paper") {
        setDecision("YOU LOSE!");
    }


    if (userHand == "rock" && cpHand == "scissors") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
    }


    if (userHand == "rock" && cpHand == "rock") {
        setDecision("It's a tie!");
    }

    if (userHand == "scissors" && cpHand == "paper") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
    }


    if (userHand == "scissors" && cpHand == "rock") {
        setDecision("YOU LOSE!");
    }



    if (userHand == "scissors" && cpHand == "scissors") {
        setDecision("It's a tie!");
    }

};

    //show "hands"  hide "contest"
const restartGame = () => {
    let contest = document.querySelector(".contest");
    contest.style.display = "none";

    let hands = document.querySelector(".hands");
    hands.style.display = "flex";
}

const setDecision = (decision) => {
    document.querySelector(".decision h1").innerText = decision;
}

    //score = new score
const setScore = (newScore) => {
    SCORE = newScore;
    document.querySelector(".score h1").innerText = newScore;
}
