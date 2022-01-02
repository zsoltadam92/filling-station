const traditionalBtn = document.querySelector('#traditionalBtn')
const gasStations =  document.querySelectorAll('.gas-station')
const waitingCars =  document.querySelector('#waitingCars')
const electroBtn = document.querySelector('#electroBtn')
const fastCharger = document.querySelector('.dc')
const slowerCharger = document.querySelector('.ac')

let index = 0

traditionalBtn.addEventListener('click', () => {
  index++
  const tradAuto = document.createElement('div')
  tradAuto.setAttribute('class', 'trad-auto')
  tradAuto.setAttribute('id', `${index}`)
  tradAuto.innerHTML = `<i class="fas fa-car"></i> <span>${index}</span>`

  let emptyGasStation =  Array.from(gasStations).find(item => item.innerHTML === "")

  if(emptyGasStation) {
    emptyGasStation.appendChild(tradAuto)
    setTimeout(() => {
      emptyGasStation.removeChild(tradAuto)
      addRemoveTraditionalCar()
    }, 3000)
  } else {
    waitingCars.appendChild(tradAuto)
  }

  function addRemoveTraditionalCar() {
    let waitingCarsArr =  document.querySelectorAll('#waitingCars .trad-auto')
    let waitingTradAuto = Array.from(waitingCarsArr).find(item => item.classList.contains('trad-auto'))

    if(waitingTradAuto){
      emptyGasStation.appendChild(waitingTradAuto)
      setTimeout(() => {
        emptyGasStation.removeChild(emptyGasStation.firstChild)
        addRemoveTraditionalCar()
      }, 3000)
    }
  }
})

electroBtn.addEventListener('click', () => {
  index++
  const eAuto = document.createElement('div')
  eAuto.setAttribute('class', 'e-auto')
  eAuto.setAttribute('id', `${index}`)
  eAuto.innerHTML = `<i class="fas fa-car"></i>
                      <i class="fas fa-bolt"></i>
                      <span>${index}</span>`

  if(fastCharger.innerHTML === "") {
    fastCharger.appendChild(eAuto)
    setTimeout(() => {
      fastCharger.removeChild(eAuto)
      addRemoveElectricDc()
    }, 7000)
  } else if(slowerCharger.innerHTML === "") {
    slowerCharger.appendChild(eAuto)
    setTimeout(() => {
      slowerCharger.removeChild(eAuto)
      addRemoveElectricAc()
    }, 15000)
  } else {
    waitingCars.appendChild(eAuto)
  }

  function addRemoveElectricDc() {
    let waitingCarsArr =  document.querySelectorAll('#waitingCars .e-auto')
    let waitingElectricAuto = Array.from(waitingCarsArr).find(item => item.classList.contains('e-auto'))

    if(waitingElectricAuto){
      fastCharger.appendChild(waitingElectricAuto)
      setTimeout(() => {
        fastCharger.removeChild(waitingElectricAuto)
        addRemoveElectricDc()
      }, 7000)
    }
  }

  function addRemoveElectricAc() {
    let waitingCarsArr =  document.querySelectorAll('#waitingCars .e-auto')
    let waitingElectricAuto = Array.from(waitingCarsArr).find(item => item.classList.contains('e-auto'))

    if(waitingElectricAuto){
      slowerCharger.appendChild(waitingElectricAuto)
      setTimeout(() => {
        slowerCharger.removeChild(waitingElectricAuto)
        addRemoveElectricAc()
      }, 15000)
    }
  }
})


