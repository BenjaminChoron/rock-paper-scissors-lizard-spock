const mainController = {
    homePage: (req, res) => {
        if(!req.session.score){
            req.session.score = 0;
        }
        res.render('home', { score: req.session.score });
    },

    scissorsPage: (req, res) => {
        const playerChoice = "scissors"
        const houseChoices = ["scissors", "spock", "paper", "lizard", "rock"];
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        const randomChoice = houseChoices[getRandomInt(houseChoices.length)];

        if(randomChoice === playerChoice) {
            res.render('versus', { player: playerChoice, house: randomChoice, message: "TIE GAME", score: req.session.score });
        } else if(randomChoice === "rock" || randomChoice === "spock") {
            req.session.score--;
            res.render('versus', { player: playerChoice, house: randomChoice, message: "YOU LOSE", score: req.session.score });
        } else {
            req.session.score++;
            res.render('versus', { player: playerChoice, house: randomChoice, message: "YOU WIN", score: req.session.score });
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
            res.render('versus', { player: playerChoice, house: randomChoice, message: "TIE GAME", score: req.session.score });
        } else if(randomChoice === "lizard" || randomChoice === "paper") {
            req.session.score--;
            res.render('versus', { player: playerChoice, house: randomChoice, message: "YOU LOSE", score: req.session.score });
        } else {
            req.session.score++;
            res.render('versus', { player: playerChoice, house: randomChoice, message: "YOU WIN", score: req.session.score });
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
            res.render('versus', { player: playerChoice, house: randomChoice, message: "TIE GAME", score: req.session.score });
        } else if(randomChoice === "scissors" || randomChoice === "lizard") {
            req.session.score--;
            res.render('versus', { player: playerChoice, house: randomChoice, message: "YOU LOSE", score: req.session.score });
        } else {
            req.session.score++;
            res.render('versus', { player: playerChoice, house: randomChoice, message: "YOU WIN", score: req.session.score });
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
            res.render('versus', { player: playerChoice, house: randomChoice, message: "TIE GAME", score: req.session.score });
        } else if(randomChoice === "rock" || randomChoice === "scissors") {
            req.session.score--;
            res.render('versus', { player: playerChoice, house: randomChoice, message: "YOU LOSE", score: req.session.score });
        } else {
            req.session.score++;
            res.render('versus', { player: playerChoice, house: randomChoice, message: "YOU WIN", score: req.session.score });
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
            res.render('versus', { player: playerChoice, house: randomChoice, message: "TIE GAME", score: req.session.score });
        } else if(randomChoice === "paper" || randomChoice === "spock") {
            req.session.score--;
            res.render('versus', { player: playerChoice, house: randomChoice, message: "YOU LOSE", score: req.session.score });
        } else {
            req.session.score++;
            res.render('versus', { player: playerChoice, house: randomChoice, message: "YOU WIN", score: req.session.score });
        }
    },
}

module.exports = mainController;