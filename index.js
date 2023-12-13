async function classifyImage() {
    const fileInput = document.getElementById('fileInput');
    const resultDiv = document.getElementById('result');

    const file = fileInput.files[0];
    if (!file) {
        alert('Please select an image.');
        return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('<https://soniyachavan05.github.io/Footware_Classifier/>', {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();
        resultDiv.innerHTML = `<p>Prediction: ${result.prediction}</p>`
    } catch (error) {
        console.error('Error:', error);
        resultDiv.innerHTML = '<p>Error occurred. Please try again.</p>';
    }
}
