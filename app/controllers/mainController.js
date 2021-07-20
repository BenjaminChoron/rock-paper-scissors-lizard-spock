const mainController = {
    homePage: (req, res) => {
        res.render('home');
    },

    scissorsPage: (req, res) => {
        const playerChoice = "scissors"
        const houseChoices = ["scissors", "spock", "paper", "lizard", "rock"];
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        const randomChoice = houseChoices[getRandomInt(houseChoices.length)];

        if(randomChoice === playerChoice) {
            res.render('versus', { player: playerChoice, house: randomChoice, message: "TIE GAME" });
        } else if(randomChoice === "rock" || randomChoice === "spock") {
            res.render('versus', { player: playerChoice, house: randomChoice, message: "YOU LOSE" });
        } else {
            res.render('versus', { player: playerChoice, house: randomChoice, message: "YOU WIN" });
        }
    },

    spockPage: (req, res) => {
        const playerChoice = "spock"
        const houseChoices = ["scissors", "spock", "paper", "lizard", "rock"];
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        const randomChoice = houseChoices[getRandomInt(houseChoices.length)];

        if(randomChoice === playerChoice) {
            res.render('versus', { player: playerChoice, house: randomChoice, message: "TIE GAME" });
        } else if(randomChoice === "lizard" || randomChoice === "paper") {
            res.render('versus', { player: playerChoice, house: randomChoice, message: "YOU LOSE" });
        } else {
            res.render('versus', { player: playerChoice, house: randomChoice, message: "YOU WIN" });
        }
    },

    paperPage: (req, res) => {
        const playerChoice = "paper"
        const houseChoices = ["scissors", "spock", "paper", "lizard", "rock"];
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        const randomChoice = houseChoices[getRandomInt(houseChoices.length)];

        if(randomChoice === playerChoice) {
            res.render('versus', { player: playerChoice, house: randomChoice, message: "TIE GAME" });
        } else if(randomChoice === "scissors" || randomChoice === "lizard") {
            res.render('versus', { player: playerChoice, house: randomChoice, message: "YOU LOSE" });
        } else {
            res.render('versus', { player: playerChoice, house: randomChoice, message: "YOU WIN" });
        }
    },

    lizardPage: (req, res) => {
        const playerChoice = "lizard"
        const houseChoices = ["scissors", "spock", "paper", "lizard", "rock"];
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        const randomChoice = houseChoices[getRandomInt(houseChoices.length)];

        if(randomChoice === playerChoice) {
            res.render('versus', { player: playerChoice, house: randomChoice, message: "TIE GAME" });
        } else if(randomChoice === "rock" || randomChoice === "scissors") {
            res.render('versus', { player: playerChoice, house: randomChoice, message: "YOU LOSE" });
        } else {
            res.render('versus', { player: playerChoice, house: randomChoice, message: "YOU WIN" });
        }
    },

    rockPage: (req, res) => {
        const playerChoice = "rock"
        const houseChoices = ["scissors", "spock", "paper", "lizard", "rock"];
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        const randomChoice = houseChoices[getRandomInt(houseChoices.length)];

        if(randomChoice === playerChoice) {
            res.render('versus', { player: playerChoice, house: randomChoice, message: "TIE GAME" });
        } else if(randomChoice === "paper" || randomChoice === "spock") {
            res.render('versus', { player: playerChoice, house: randomChoice, message: "YOU LOSE" });
        } else {
            res.render('versus', { player: playerChoice, house: randomChoice, message: "YOU WIN" });
        }
    },
}

module.exports = mainController;