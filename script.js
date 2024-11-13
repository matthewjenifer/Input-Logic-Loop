(function() {
    // Get references to key elements from the DOM
    const outputBox = document.getElementById('output'); // The div where checkboxes and messages will be displayed
    const changeButton = document.getElementById('changeButton'); // The button that the user presses to proceed
    const textInput = document.getElementById('textInput'); // The text input area where the user inserts an option
    let step = 1; // Step tracker to manage the state of the interaction

    // Add event listener for the change button
    changeButton.addEventListener('click', function() {
        if (step === 1) {
            // Step 1: User presses button after inputting an option (1, 2, or 3)
            const value = textInput.value; // Get the value from the text input box
            outputBox.textContent = ''; // Clear the output box to prepare for new content

            // Check if the input value is one of the expected options (1, 2, or 3)
            if (value === '1' || value === '2' || value === '3') {
                // Loop through options 1, 2, and 3
                for (let i = 1; i <= 3; i++) {
                    // Create checkboxes for options that are not the user input
                    if (i !== parseInt(value)) {
                        const checkbox = document.createElement('input'); // Create a checkbox element
                        checkbox.type = 'checkbox'; // Set type to checkbox
                        checkbox.id = `option${i}`; // Set a unique ID for the checkbox
                        checkbox.value = i; // Set the value of the checkbox

                        const label = document.createElement('label'); // Create a label element for the checkbox
                        label.appendChild(checkbox); // Append the checkbox to the label
                        label.appendChild(document.createTextNode(` option ${i}`)); // Append descriptive text to the label

                        outputBox.appendChild(label); // Add the label (with the checkbox) to the output box
                        outputBox.appendChild(document.createElement('br')); // Add a line break for spacing
                    }
                }
                step = 2; // Move to the next step
            }
        } else if (step === 2) {
            // Step 2: User presses button after selecting a checkbox
            const checkboxes = document.querySelectorAll('input[type="checkbox"]'); // Get all checkboxes from the output box
            let selectedOption = null; // Variable to store the selected option

            // Iterate over all checkboxes to find the checked one
            checkboxes.forEach((checkbox) => {
                if (checkbox.checked) {
                    selectedOption = checkbox.value; // Store the value of the selected checkbox
                }
            });

            if (selectedOption) {
                textInput.value = selectedOption; // Update the text input with the selected option
                outputBox.textContent = ''; // Clear the output box for the next set of checkboxes

                // Display the remaining two options as checkboxes
                for (let i = 1; i <= 3; i++) {
                    if (i !== parseInt(selectedOption)) {
                        const checkbox = document.createElement('input'); // Create a new checkbox element
                        checkbox.type = 'checkbox'; // Set type to checkbox
                        checkbox.id = `option${i}`; // Set a unique ID for the checkbox
                        checkbox.value = i; // Set the value of the checkbox

                        const label = document.createElement('label'); // Create a label element for the checkbox
                        label.appendChild(checkbox); // Append the checkbox to the label
                        label.appendChild(document.createTextNode(` option ${i}`)); // Append descriptive text to the label

                        outputBox.appendChild(label); // Add the label (with the checkbox) to the output box
                        outputBox.appendChild(document.createElement('br')); // Add a line break for spacing
                    }
                }
                step = 2; // Keep the step at 2 for continuous interaction
            }
        }
    });
})();
