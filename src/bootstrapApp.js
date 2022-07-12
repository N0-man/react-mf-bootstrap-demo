import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

export const bootstrapApp = () => {
  const mfContainerId = 'mf-root'

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    resolveMfContainer(),
  )

  function resolveMfContainer() {
    if (!isMFContainerPresent()) return createNewMedicationContainer()

    return document.getElementById(mfContainerId)

    function createNewMedicationContainer() {
      const body = document.getElementsByTagName('body')[0]
      const mfContainer = document.createElement('div')
      mfContainer.setAttribute('id', mfContainerId)
      body.appendChild(mfContainer)
      return mfContainer
    }

    function isMFContainerPresent() {
      return document.getElementById(mfContainerId)
    }
  }
}
