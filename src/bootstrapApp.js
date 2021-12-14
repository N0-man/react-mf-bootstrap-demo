import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export const bootstrapApp = () => {
  // const bahmniOldMedicationContainerSelector =
  //   'treatment-page treatment-page-container order-list clearfix';
  const bahmniOldMedicationContainerSelector = '[rip-ui="medication"]';

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    resolveMedicationContainer()
  );

  function resolveMedicationContainer() {
    const consultationContainer = document.querySelectorAll(
      '[mf-container="medication"]'
    );
    // const consultationContainer = document.getElementsByClassName(
    //   'consultation-content'
    // );
    if (consultationContainer.length > 0) {
      removeOldMedicationContainer();
      return createNewMedicationContainer();
    }

    return document.getElementById('bahmni-medication');

    function createNewMedicationContainer() {
      const newMedicationContainer = document.createElement('div');
      newMedicationContainer.setAttribute('id', 'bahmni-medication');
      consultationContainer[0].appendChild(newMedicationContainer);
      return newMedicationContainer;
    }

    function removeOldMedicationContainer() {
      // const oldMedicationContainer = document.getElementsByClassName(
      //   bahmniOldMedicationContainerSelector
      // );
      const oldMedicationContainer = document.querySelectorAll(
        bahmniOldMedicationContainerSelector
      );
      if (oldMedicationContainer.length > 0) oldMedicationContainer[0].remove();
    }
  }
};
