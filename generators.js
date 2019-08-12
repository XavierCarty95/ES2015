const testingTeam =  {
  lead : "stacy",
  tester : "ron"
}

const EngineeringTeam = {
  
  testingTeam ,
  name : 'Xavier', 
  size : 3 , 
  lead : 'Jill', 
  manager: 'Alex', 
  engineer: 'Dave', 
  
}; 

function* TeamIterator(team) {
  yield team.lead; 
  yield team.manager; 
  yield team.engineer; 
  yield team.size
  const testingTeamGenerator = TestingTeamIterator(team.testingTeam)
  yield* testingTeamGenerator;
  
  
}



function* TestingTeamIterator(team) {
  yield team.lead ; 
  yield team.tester; 
}

const names = []
for (let name of TeamIterator(EngineeringTeam) )
{ names.push(name)
 
}

names; 
