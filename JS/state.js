import { documentId } from 'firebase/firestore'

function multiStateToggle(dataObj) {
  const states = new Set((dataObj.origin.states || '').split(' '))

  states.has(dataObj.target.state)
    ? states.delete(dataObj.target.state)
    : states.add(dataObj.target.state)

  const targetAll = document.querySelectorAll(dataObj.origin.target)
  targetAll.forEach((target) => {
    target.dataset.states = [...states].join(' ')
  })
}
export { multiStateToggle }

function singleStateToggle(dataObj) {
  const stateElement = document.getElementById(dataObj.origin.state)
  const targetAll = document.querySelectorAll(dataObj.origin.target)

  targetAll.forEach((target) => {
    delete target.dataset
  })

  stateElement.dataset.state = 'active'
}

export { singleStateToggle }
