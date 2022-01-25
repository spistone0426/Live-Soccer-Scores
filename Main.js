


   fetch("https://www.thesportsdb.com/api/v1/json/1/latestsoccer.php", {
    "method": "GET",
})
    .then(response => {
        console.log(response);

        if (response.ok){
            return response.json();
        }

    })

    .then(data => {
        console.log(data);
        displayScores(data);
    })

    .catch(err => {
        console.error(err);
    });

function displayScores(data) {

    for (var key in data.teams.Match) {
        var events = data.teams.Match[key];
        const eventsDiv = document.getElementById("ScoreSheet");

        //home team name
        const homeTeam = events.HomeTeam;
        const homeTeamText = document.createElement("td");
        homeTeamText.innerHTML = homeTeam;
        eventsDiv.appendChild(homeTeamText);

        //Home Team Score
        const homeScore = events.HomeGoals;
        const homeScoreText = document.createElement("td");
        homeScoreText.innerHTML = homeScore;
        eventsDiv.appendChild(homeScoreText);

        //Away Team Score
        const AwayScore = events.AwayGoals;
        const AwayScoreText = document.createElement("td");
        AwayScoreText.innerHTML = AwayScore;
        eventsDiv.appendChild(AwayScoreText);

        //Away team name
        const AwayTeam = events.AwayTeam;
        const AwayTeamText = document.createElement("td");
        AwayTeamText.innerHTML = AwayTeam;
        eventsDiv.appendChild(AwayTeamText);

        const Space = document.createElement("tr");
        eventsDiv.appendChild(Space)

    }
}





