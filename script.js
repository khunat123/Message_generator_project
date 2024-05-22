// const randomWords = ['Sleep at home', 'Go for walks', 'Watching tv', 'Get up and do some exercises' ];

function getRandomMessage() {
    const randomWords = ['Sleep at home', 'Go for walks', 'Watching tv', 'Get up and do some exercises', 'Do something that you likes', 'Dance!!!' ];
    const randomIndex = Math.floor(Math.random() * randomWords.length);
    // console.log(randomIndex);
    return console.log('Today you should: ' + randomWords[randomIndex] + '.');
}

getRandomMessage();