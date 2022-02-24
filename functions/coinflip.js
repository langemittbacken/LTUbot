function coinflip(message, arg) {

    coin = Math.floor(Math.random() * 2); //heads == 1, tails == 0
    if(coin == 1){
        headsOrTails = 'heads'
    } else {
        headsOrTails = 'tails'
    }

    if(!arg){
      textToUser = 'It\'s ' + headsOrTails.toUpperCase() + '!'

    } else if(arg !== 'heads' && arg  !== 'tails'){
      
      textToUser = 'Please pick [heads] or [tails] (ex: coinflip heads)'

    } else {
      textToUser = 'You picked: ' + arg + '\nThe result was: ' + headsOrTails + '\n'
      if(headsOrTails === arg){
        textToUser = textToUser + 'YOU WIN!'
      } else {
        textToUser = textToUser + 'YOU LOST!'
      }

    }

    message.reply(textToUser);
}

module.exports = coinflip