const https = require('https');
const users = process.argv.slice(2);

function getProfile(username) {
    try {
        const request = https.get(`https://teamtreehouse.com/profiles/${username}.json`, function(res){
            let body = "";
            if (res.statusCode == 200) {
                res.on('data', data => body+=data);
                res.on('end',()=>{
                    let data = JSON.parse(body);
                    printProfile(data);
                });
            } 
        });

        request.on('error',error=>console.log(error));
    } catch (error) {
        console.log(error.message);
    }
}

function printProfile(data) {
    const message = `${data.profile_name} has ${data.badges.length} total badge(s) and ${data.points.JavaScript} points in JavaScript`;
    console.log(message);
}

users.forEach(user=>getProfile(user));
