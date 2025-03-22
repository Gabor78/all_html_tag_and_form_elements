//1. érték: Csapat neve (nev)
//2. érték: Csapat helyezése (helyezes)
//3. érték: Csapat helyének változása (valtozas)
//4. érték: Csapat Pontszama (pont)

const csapatAdat = [
"Anglia;4;0;1662", 
"Argentína;10;0;1614", 
"Belgium;1;0;1752", 
"Brazília;3;-1;1719", 
"Chile;17;-3;1576", 
"Dánia;14;-1;1584", 
"Franciaország;2;1;1725", 
"Hollandia;13;3;1586", 
"Horvátország;8;-1;1625", 
"Kolumbia;9;-1;1622", 
"Mexikó;12;0;1603", 
"Németország;16;-1;1580", 
"Olaszország;15;1;1583", 
"Peru;19;0;1551", 
"Portugália;5;1;1643", 
"Spanyolország;7;2;1631", 
"Svájc;11;0;1604", 
"Svédország;18;0;1560", 
"Szenegál;20;0;1546", 
"Uruguay;6;-1;1639"
];

function ParseData(data){
	const objectsArr = [];
	for(let i = 0; i < data.length; i++){
		let oneObject = {};
		const splittedData = data[i].split(";");
		oneObject.name = splittedData[0];
		oneObject.place = Number(splittedData[1]);
		oneObject.change = Number(splittedData[2]);
		oneObject.score = Number(splittedData[3]);
		objectsArr.push(oneObject);
	}
	return objectsArr;
}

const dreamTeam = ParseData(csapatAdat);
console.log(dreamTeam);

//F01 - Adja meg aktuálisan hány csapat szerepel a ranglistán
function SummTeams(teamsArr){
	return teamsArr.length;
}

function SummTeamsWriteOut(SummTeams){
	document.write("Aktuálisan " + SummTeams + " csapat szerepel a ranglistán<br><br>");
}

SummTeamsWriteOut(SummTeams(dreamTeam));

//F02 - Írja ki mennyi a résztvevő csapatok átlagpontszáma
function AverageScore(teamsArr){
	let summScore = 0;
	let averageScore = 0;
	for(let i = 0; i < teamsArr.length; i++){
		summScore += teamsArr[i].score;
	}
	averageScore = summScore / teamsArr.length;
	return averageScore;
}

function AverageScoreWriteOut(averageScore){
	document.write("A résztvevő csapatok átlagpontszáma " + averageScore + "<br><br>");
}

AverageScoreWriteOut(AverageScore(dreamTeam));

//F03 - Listázza ki azokat a csapatokat, akik az átlagnál több pontot értek el!
function ListTeamsThatMorePointsThanAverage(teamsArr,averageScore){
	let teamsThatMorePointsThanAverage = [];
	for(let i = 0; i < teamsArr.length; i++){
		if(teamsArr[i].score > averageScore){
			teamsThatMorePointsThanAverage.push(teamsArr[i]);
		}
	}
	return teamsThatMorePointsThanAverage;
}

function ListTeamsThatMorePointsThanAverageWriteOut(teamsThatMorePointsThanAverage){
	document.write("Azok a csapatok, akik az átlagnál több pontot értek el:");
	document.write("<table border='1'><tr><th>Csapat neve</th><th>Csapat helyezése</th><th>Csapat helyének változása</th><th>Csapat Pontszama</th></tr>")
	for(let i = 0; i < teamsThatMorePointsThanAverage.length; i++){
		document.write("<tr>");
		document.write("<td>" + teamsThatMorePointsThanAverage[i].name + "</td>");
		document.write("<td align='center'>" + teamsThatMorePointsThanAverage[i].place + "</td>");
		document.write("<td align='center'>" + teamsThatMorePointsThanAverage[i].change + "</td>");
		document.write("<td align='center'>" + teamsThatMorePointsThanAverage[i].score + "</td>");
		document.write("</tr>");
	}
	document.write("</table><br>");
}

ListTeamsThatMorePointsThanAverageWriteOut(ListTeamsThatMorePointsThanAverage(dreamTeam,AverageScore(dreamTeam)));

//F04 - Írja ki a legtöbbet javító csapat adatait: Helyezés, CsapatNeve, Pontszáma
function TeamThatImprovedTheMost(teamsArr){
	let teamThatImprovedTheMost = {};
	let maxImprove = 0;
	let maxImproveIndex = 0;
	for(let i = 0; i < teamsArr.length; i++){
		if(teamsArr[i].change > maxImprove){
			maxImprove = teamsArr[i].change;
			maxImproveIndex = i;
		}
	}
	teamThatImprovedTheMost = teamsArr[maxImproveIndex];
	return teamThatImprovedTheMost;
}

function TeamThatImprovedTheMostWriteOut(teamThatImprovedTheMost){
	document.write("A legtöbbet javító csapat adatai:<br>");
	document.write("Helyezés: " + teamThatImprovedTheMost.place + "<br>");
	document.write("Név: " + teamThatImprovedTheMost.name + "<br>");
	document.write("Pontszám: " + teamThatImprovedTheMost.score + "<br><br>");
}

TeamThatImprovedTheMostWriteOut(TeamThatImprovedTheMost(dreamTeam));

//F05 - Határozza meg a adatok közöt megtalálható-e Magyarország csapata!
function CanItBeFound(teamsArr,teamName){
	let canItBeFound = false;
	for(let i = 0; i < teamsArr.length; i++){
		if(teamsArr[i].name == teamName){
			canItBeFound = true;
		}
	}
	return canItBeFound;
}

function CanItBeFoundWriteOut(teamsArr,teamName){
	if(CanItBeFound(teamsArr,teamName)){
		document.write(teamName + " megtalálható a csapatok között<br><br>");
	} else {
		document.write(teamName + " NEM található meg a csapatok között<br><br>");
	}
}

CanItBeFoundWriteOut(dreamTeam,"Magyarország");

CanItBeFoundWriteOut(dreamTeam,"Anglia");

CanItBeFoundWriteOut(dreamTeam,"Oceánia");

CanItBeFoundWriteOut(dreamTeam,"Belgium");

//F06 - Készítsen statisztikát a helyezések változása (Valtozas) alapján csoportosítva a csapatok számáról
//Csak azok a helyezésváltozások jelenjenek meg a képernyőn, amelyek esetében a csapatok száma több mint egy volt!
function RatesOfChanges(teamsArr){
	let ratesOfChanges = [];
	for(let i = 0; i < teamsArr.length; i++){
		alreadyIncludes = false;
		for(let j = 0; j < ratesOfChanges.length; j++){
			if(teamsArr[i].change == ratesOfChanges[j]){
				alreadyIncludes = true;
			}
		}
		if(!alreadyIncludes){
			ratesOfChanges.push(teamsArr[i].change);
		}
	}
	return ratesOfChanges;
}

let typesOfChanges = RatesOfChanges(dreamTeam);
console.log(typesOfChanges);

function NumberOfChanges(teamsArr, ratesOfChanges){
	let numberOfChanges = [];
	for(let i = 0; i < ratesOfChanges.length; i++){
		numberOfChanges.push(0);
	}
	for(let i = 0; i < teamsArr.length; i++){
		for(let j = 0; j < ratesOfChanges.length; j++){
			if(ratesOfChanges[j] == teamsArr[i].change){
				numberOfChanges[j]++;
			}
		}
	}
	return numberOfChanges;
}

let numberOfChanges = NumberOfChanges(dreamTeam, typesOfChanges);
console.log(numberOfChanges);

function NumberOfChangesWriteOut(numberOfChanges, typesOfChanges){
	document.write("Statisztika:<br>");
	for(let i = 0; i < numberOfChanges.length; i++){
		if(numberOfChanges[i] > 1){
			document.write("Változás: " + typesOfChanges[i] + ", csapatok darabszáma: " + numberOfChanges[i] + "<br>");
		}
	}
}

NumberOfChangesWriteOut(numberOfChanges, typesOfChanges);

//V2
document.write("<br>V2:<br>");
function StatisticsBasedOnChangesInRankings(teamsArr){
	let changeStat = {};
	for(let i = 0; i < teamsArr.length; i++){
		let teamChange = teamsArr[i].change;
		if(changeStat[teamChange]){
			changeStat[teamChange]++;
		} else {
			changeStat[teamChange] = 1;			
		}
	}
	return changeStat;
}

function StatisticsBasedOnChangesInRankingsWriteOut(changeStat){
	document.write("Statisztika a helyezések változása alapján csoportosítva, ahol a csapatok száma több mint egy:<br>");
	for (let change in changeStat) {
        if (changeStat[change] > 1) {
            document.write("Változás: " + change + ", Csapatok száma: " + changeStat[change] + "<br>");
        }
    }
	document.write("<br>");
	document.write("Statisztika a helyezések változása alapján csoportosítva, minden csapat:<br>");
	for (let change in changeStat) {
        document.write("Változás: " + change + ", Csapatok száma: " + changeStat[change] + "<br>");
	}
}

StatisticsBasedOnChangesInRankingsWriteOut(StatisticsBasedOnChangesInRankings(dreamTeam));
