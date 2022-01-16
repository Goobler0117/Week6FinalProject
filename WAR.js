// let expect = chai.expect

// describe('myFunction', function () {
//     describe('#whoWon', function() {
//         it(`should log who won`, function() {
//             var x = whoWon(3,5);
//             expect(x).to.equal('The Computer Scored! You now have 0 points and The Computer has 1 points!!\n        You: 0\n        The Computer: 1');
//         })
//     })
// })



const suits = ['Diamonds', 'Hearts', 'Clubs', 'Spades'];
const values = ['Ace',2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
let deck = [];
let player1Deck = [];
let player2Deck = []; 
let p1Points = 0;
let p2Points = 0;
let player1Card = [];
let player2Card = []; 


startGame()


function startGame() {
    createDeck();
    shuffleDeck(deck);
    dealCards(deck);
}//starts game


function createDeck() {
    for (let i = 0; i < suits.length; i++) {
        for (let a = 0; a < values.length; a++) {
            let card = {name:`${values[a]} of ${suits[i]}`, value: a + 1}
            deck.push(card);
        }
    }
}//create deck


function shuffleDeck (deck) {
    let currentIndex = deck.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex); currentIndex--;
        [deck[currentIndex], deck[randomIndex]] = [deck[randomIndex], deck[currentIndex]];
    }
    return deck;
}
//shuffle deck


function dealCards(deck) {
   player1Deck = deck.slice(0, 26);
   player2Deck = deck.slice(26, 52);
}//Deal cards


function drawCard (playerDeck) {
    playerCard = playerDeck.pop();
    return playerCard; 
    // console.log(whoWon(player1Card, player2Card));
}//plays a card from each "player"


function takeTurn (player1Deck, player2Deck) {
    player1Card = drawCard (player1Deck)
    player2Card = drawCard (player2Deck)
    console.log(`Your card: ${player1Card.name}
    The Computer's card: ${player2Card.name}`);

    console.log(whoWon(player1Card, player2Card));

    if (player1Deck.length == 0 || player2Deck.length == 0){
    console.log (`Thanks for playing WAR!
    --------------------
    Final score: 
    You: ${p1Points}
    Computer: ${p2Points}
    `)
   
    if (p1Points == p2Points) 
        console.log('Tie Game. No winners today!')
    else if (p1Points > p2Points)
        console.log('You Win! Congratulations!')
    else console.log('The Computer Wins. Deepest sympathies for your loss!')  
    };
}


function whoWon(player1Card, player2Card) {
    if (player1Card.value == player2Card.value) {
       return `Tie; No points awarded! You now have ${p1Points} points and The Computer has ${p2Points} points!!
        You: ${p1Points}
        The Computer: ${p2Points}`;
    } else if (player1Card.value > player2Card.value){
        p1Points = p1Points + 1;
        return `You Scored! You now have ${p1Points} points and The Computer has ${p2Points} points!!
        You: ${p1Points}
        The Computer: ${p2Points}`;
    } else if (player1Card.value < player2Card.value) {
        p2Points = p2Points + 1;
        return `The Computer Scored! You now have ${p1Points} points and The Computer has ${p2Points} points!!
        You: ${p1Points}
        The Computer: ${p2Points}`;
    } else 
        return `Error`;
}//returns who wins

