
// players we already have
const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]

const listOfPlayers = []
const blueTeam = []
const redTeam = []
let customPlayers = []

class player {
  constructor(id, name, age, skillSet, placeBorn){
    this.id = id
    this.name = name
    this.age = age
    this.skillSet = skillSet
    this.placeBorn = placeBorn
  }
}

class customPlayer extends player{
  constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeball, hasPaid, isHealthy, yearsExperience){
    super(id, name, age, skillSet, placeBorn)
    this.canThrowBall = true
    this.canDodgeball = true
    this.hasPaid = true
    this.isHealthy = true
    this.yearsExperience = 5
  }
}

class blueTeammate extends player {
  constructor(id, name, age, skillSet, placeBorn, teamColor, mascot){
    super(id, name, age, skillSet, placeBorn)
    this.teamColor = "Blue"
    this.mascot = "Sabertooth Tiger"
    
  }
}

class redTeammate extends player{
  constructor(id, name, age, skillSet, placeBorn, teamColor, mascot){
    super(id, name, age, skillSet, placeBorn)
    this.mascot = "Rooster"
    this.teamColor = "Red"
  }
}

const listPeopleChoices = () => {
  const listElement = document.getElementById('people')
  arrOfPeople.map(person => {
   let tempPlayer = new player(person.id, person.name, person.age, person.skillSet, person.placeBorn)
    listOfPlayers.push(tempPlayer)
    const li = document.createElement("li")
    li.id = `${person.id}`
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.id = 'listbutton'
    button.addEventListener('click', function() {makePlayer(person)} )
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
    li.appendChild(button)
  })
  document.getElementById("listpeople").remove()
}
// console.log(listOfPlayers)

const makePlayer = (person) => {
  //console.log(person)
  let tempCustom = new customPlayer(person.id, person.name, person.age, person.skillSet, person.placeBorn, person.canThrowBall, person.canDodgeball, person.hasPaid, person.isHealthy, person.yearsExperience)
    customPlayers.push(tempCustom)
    const playerElement = document.getElementById('players')
    const li = document.createElement("li")
    const buttonRed = document.createElement("button")
    buttonRed.innerHTML = "Red Team"
    buttonRed.addEventListener('click', function() {makeRedTeam(person)} )
    buttonRed.id = 'redbutton'
    li.id = `${person.id}`
    const buttonBlue = document.createElement("button")
    buttonBlue.innerHTML = "Blue Team"
    buttonBlue.addEventListener('click', function() {makeBlueTeam(person)} )
    buttonBlue.id = 'bluebutton'
    li.id = `${person.id}`
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet ))
    const breakhere = document.createElement("br")
    li.appendChild(breakhere)
    li.appendChild(buttonBlue)
    li.appendChild(buttonRed)
    playerElement.append(li)
    let removeLi = document.getElementById(`${person.id}`)
    removeLi.remove()
}

function makeRedTeam(person){
  let tempRedTeam = new redTeammate(person.id, person.name, person.age, person.skillSet, person.placeBorn, person.canThrowBall, person.canDodgeball, person.hasPaid, person.isHealthy, person.yearsExperience, person.teamColor, person.mascot)
    redTeam.push(tempRedTeam)
    let removeLi = document.getElementById(`${person.id}`)
    removeLi.remove()
    const playerElement = document.getElementById('red')
    const li = document.createElement("li")
    li.id = `${person.id}`
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet ))
    playerElement.append(li)
   //console.log(redTeam)
}

function makeBlueTeam(person) {
  let tempBlueTeam = new blueTeammate(person.id, person.name, person.age, person.skillSet, person.placeBorn, person.canThrowBall, person.canDodgeball, person.hasPaid, person.isHealthy, person.yearsExperience, person.teamColor, person.mascot)
    blueTeam.push(tempBlueTeam)
    console.log(blueTeam)
    let removeLi = document.getElementById(`${person.id}`)
    removeLi.remove()
    const playerElement = document.getElementById('blue')
    const li = document.createElement("li")
    li.id = `${person.id}`
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet ))
    playerElement.append(li)
}


/*   TESTS
 *
 *    Check that listPeopleChoices is increasing the size of listOfPlayers
 *    Check that the makePlayer function is adding the correct person to the customPlayers array
 *    Check that when the makePlayer button is pressed, the li from List Of People is removed. 
 *    Check that customPlayers array is increasing in size when MakePlayer is called
 *    Check that the red team and blue team dont have any of the same persons
 * 
 */