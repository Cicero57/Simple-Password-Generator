
let passGen = ["#","$","*","@","A","B","C","D",1,5,8,6,3,9,0,7,2,4,"E","F","G","Q","I","V","Z","S","R","T","J","L","a","b","c","d","u","n","w","m","&","k","Z","s","r","t","j","p"]
let displayMain = document.getElementById("display-main")


function GeneratePassword() {
    var getRandomNumber1 = Math.floor(Math.random() * passGen.length)
     var getRandomNumber2 = Math.floor(Math.random() * passGen.length)
      var getRandomNumber3 = Math.floor(Math.random() * passGen.length)
       var getRandomNumber4 = Math.floor(Math.random() * passGen.length)
     displayMain.textContent = passGen[getRandomNumber1] + " " +  passGen[getRandomNumber2] + " " + passGen[getRandomNumber3] + " " + passGen[getRandomNumber4]
}