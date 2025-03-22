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

function ParseDatas(datas){
	let objectsArr = [];
	for(let i = 0; i < datas.length; i++){
		let oneObject = {};
		splittedDatas = datas[i].split(";");
		oneObject.name = splittedDatas[0];
		oneObject.place = Number(splittedDatas[1]);
		oneObject.change = Number(splittedDatas[2]);
		oneObject.score = Number(splittedDatas[3]);
		objectsArr.push(oneObject);
	}
	return objectsArr;
}

const dreamTeam = ParseDatas(csapatAdat);
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
	document.write("Név: " + teamThatImprovedTheMost.name + "<br>");
	document.write("Helyezés: " + teamThatImprovedTheMost.place + "<br>");
	document.write("Változás: " + teamThatImprovedTheMost.change + "<br>");
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

function CanItBeFoundWriteOut(CanItBeFound,teamName){
	if(CanItBeFound){
		document.write(teamName + " megtalálható a csapatok között<br>");
	}
	else{
		document.write(teamName + " NEM található meg a csapatok között<br>");
	}
}

CanItBeFoundWriteOut(CanItBeFound(dreamTeam,"Magyarország"),"Magyarország");