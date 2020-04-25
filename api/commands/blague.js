var request = require('request');

const blagueCmd = (args, author, attachment, message) => {
    request({
        url: "https://blague.xyz/api/joke/random",
        method: "GET",
        headers: {
            "Authorization": "KoVtQFH7cCrIG2l5zMMz_8YNcLj5uPMqGbCbcW.d-hbdDShlbwB2G2.GCkP2-pe-",
        }
    }, function (error, response, body){
        if (!error && response.statusCode == 200) {
            const joke = JSON.parse(body);
            message.channel.send("**"+joke.joke.question+"**\n"+joke.joke.answer);
        }
    });
};

module.exports=exports=blagueCmd;
