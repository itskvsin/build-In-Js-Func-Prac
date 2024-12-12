const bgChange = document.getElementById("bodyChange")
const startBtn = document.getElementById("startBtn")
const closeBtn = document.getElementById("closeBtn")

// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

const fetchSpells = async () => {
    const res = await fetch('https://potterapi-fedeperin.vercel.app/en/characters')
    const chars = await res.json()

    if(res.ok){
      const imageUrl = chars.map(character => character.image)
      const randImage = Math.floor(Math.random() * imageUrl.length)
      const image = imageUrl[randImage]
      document.body.style.backgroundImage = `url(${image})`
      document.body.style.backgroundSize = 'contain'
      document.body.style.backgroundPosition = 'center'
    }  
}

closeBtn.addEventListener("click" , () => {
    runProgram = false
})

function changeMaker() {
    startBtn.addEventListener("click" , () => {
        runProgram = true
        const interval = setInterval( async () => {
            if (!runProgram) {
                clearInterval(interval)
            } else {
                await fetchSpells()
            }         
        } , 1*1000)
    })
}

changeMaker()