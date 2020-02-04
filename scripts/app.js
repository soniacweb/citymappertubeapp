function init() {
  let tubes = []
  const tubeList = document.querySelector('.tubes')
  function getTubes() {
    fetch('https://api.tfl.gov.uk/line/mode/tube/status')
      .then(response => response.json())
      .then(response => {
        tubes = response
        displayTubes(tubes)
        console.log(tubes)
      })
      .catch(err => console.log(err))
  }
  function displayTubes(tubesToDisplay) {
    const htmlArray = tubesToDisplay.map(tube => {
      return `<div class="eachTube" > <li>${tube.id}</li> <li id="small">${tube.lineStatuses.map(el => {
        return el.statusSeverityDescription
      })}</li>
    </div>`
    
    })
    tubeList.innerHTML = htmlArray.join('')
  }
  getTubes()
  setInterval(function() {
    getTubes()
  }, 5000)
}
window.addEventListener('DOMContentLoaded', init)


// function init() {
//   let tubes = []
//   const tubeList = document.querySelector('.tubes')
//   function getTubes() {
//       fetch('https://api.tfl.gov.uk/line/mode/tube/status') // fetch everuthing 
//           .then(response => response.json()) // to json
//           .then(response => {
//               tubes = response // fill an empty array let tubes = []
//               displayTubes(tubes) // function
//               console.log(tubes)
//           })
//           .catch(err => console.error(err)) // errors
//   }
//   function displayTubes(tubesToDisplay) {
//       const htmlArray = tubesToDisplay.map(tube => {
//           return `<div class="eachTube" > <li>${tube.id} <snap id ="small"> ${tube.lineStatuses.map(el => {
//           return el.statusSeverityDescription
//         })}</snap></li> </div>` // create and add info to the HTML (using map to choose correct info in fetched objects/arrays)
//       })
//       tubeList.innerHTML = htmlArray.join('') 
//   }
//   getTubes()
//   setInterval(function() {
//       getTubes()
//   }, 5000)
// }
// window.addEventListener('DOMContentLoaded', init)