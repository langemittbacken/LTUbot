const stringSimilarity = require('string-similarity')

function commandBestMatch(bot, channelID, secondCommand, commandsArray) {

    let matches = stringSimilarity.findBestMatch(secondCommand, commandsArray)
    let suggestedMatch = ""
    if (matches.bestMatch.rating > 0.25) {
        suggestedMatch = "Did you mean: " + matches.bestMatch.target + "?"

        requestSuggestedMatch(bot, channelID, suggestedMatch)
  
    }
    else {
        output = "Could not find the command [" + secondCommand + "] and no suggestion was found"
        requestMessage(bot, channelID, output)
    }

    return matches.bestMatch.target
}

function requestSuggestedMatch(bot, channelID, suggestedMatch){
    
    // request({
    //     url: 'https://api.zoom.us/v2/im/chat/messages',
    //     method: 'POST',
    //     json: true,
    //     body: {
    //         'robot_jid': process.env.bot_jid,
    //         'to_jid': event.payload.toJid,
    //         'account_id': event.payload.accountId,
    //         'content': {
    //             'head': {
    //                 'text': 'Suggested command'
    //             },
    //             'body': [{
    //                     'type': 'message',
    //                     'text': suggestedMatch
    //                 },
    //                 {
    //                     'type': 'actions',
    //                     'items': [{
    //                             'text': 'Yes',
    //                             'value': 'yesCommandsBestMatch',
    //                             'style': 'Primary'
    //                         },
    //                         {
    //                             'text': 'No',
    //                             'value': 'noCommandsBestMatch',
    //                             'style': 'Danger'
    //                         },
    //                     ]
    //                 }
    //             ]
    //         }
    //     },
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer ' + chatbotToken
    //     }
    // }, (error, httpResponse, body) => {
    //     if (error) {
    //         console.log('Error sending chat.', error)
    //     } else {
    //         console.log(body)
    //     }
    // })
}

function requestMessage(bot, channelID, output){
    // request({
    //     url: 'https://api.zoom.us/v2/im/chat/messages',
    //     method: 'POST',
    //     json: true,
    //     body: {
    //         'robot_jid': process.env.bot_jid,
    //         'to_jid': event.payload.toJid,
    //         'account_id': event.payload.accountId,
    //         'content': {
    //             'head': {
    //                 'text': 'Suggested command'
    //             },
    //             'body': [{
    //                     'type': 'message',
    //                     'text': output
    //                 },
    //             ]
    //         }
    //     },
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer ' + chatbotToken
    //     }
    // }, (error, httpResponse, body) => {
    //     if (error) {
    //         console.log('Error sending chat.', error)
    //     } else {
    //         console.log(body)
    //     }
    // })
}
module.exports = commandBestMatch