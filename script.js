(function() {
    const outputBox = document.getElementById('output');
    const changeButton = document.getElementById('changeButton');
    const textInput = document.getElementById('textInput');
    let step = 1;

    // Add event listener for the change button
    changeButton.addEventListener('click', function() {
        if (step === 1) {
            // Step 1: User presses button after inputting option
            const value = textInput.value;
            outputBox.textContent = '';

            if (value === '1' || value === '2' || value === '3') {
                for (let i = 1; i <= 3; i++) {
                    if (i !== parseInt(value)) {
                        const checkbox = document.createElement('input');
                        checkbox.type = 'checkbox';
                        checkbox.id = `option${i}`;
                        checkbox.value = i;

                        const label = document.createElement('label');
                        label.appendChild(checkbox);
                        label.appendChild(document.createTextNode(` option ${i}`));

                        outputBox.appendChild(label);
                        outputBox.appendChild(document.createElement('br'));
                    }
                }
                step = 2;
            }
        } else if (step === 2) {
            // Step 2: User presses button after selecting a checkbox
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            let selectedOption = null;
            checkboxes.forEach((checkbox) => {
                if (checkbox.checked) {
                    selectedOption = checkbox.value;
                }
            });

            if (selectedOption) {
                textInput.value = selectedOption;
                outputBox.textContent = '';
                step = 1;
            }
        }
    });
})();
