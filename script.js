(function() {
    const outputBox = document.getElementById('output');
    const changeButton = document.getElementById('changeButton');
    const textInput = document.getElementById('textInput');
    let inputAccepted = false;

    // Add event listener for the change button
    changeButton.addEventListener('click', function() {
        if (!inputAccepted) {
            // Allow input after first change button press
            inputAccepted = true;
            const value = textInput.value;
            outputBox.textContent = '';

            if (value === '1' || value === '2') {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = `option${value}`;

                const label = document.createElement('label');
                label.appendChild(checkbox);
                label.appendChild(document.createTextNode(` option ${value}`));

                outputBox.appendChild(label);
                outputBox.appendChild(document.createElement('br'));
            }
        } else {
            // If checkbox is checked, display 'nice'
            const checkbox = document.querySelector('input[type="checkbox"]');
            if (checkbox && checkbox.checked) {
                outputBox.textContent = 'nice';
            }
        }
    });
})();