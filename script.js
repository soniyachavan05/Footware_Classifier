function predict() {
    const fileInput = document.getElementById('fileInput');
    const resultDiv = document.getElementById('result');

    if (fileInput.files.length > 0) {
        const formData = new FormData();
        formData.append('file', fileInput.files[0]);

        // Update the URL to match your Flask server's address
        const url = 'http://127.0.0.1:5000/predict';

        $.ajax({
            type: 'POST',  // Use POST instead of GET
            url: 'http://127.0.0.1:5000/predict',
            data: formData,
            contentType: false,
            processData: false,
            success: function(response) {
                console.log(response);  // Add this line for debugging
                if ('prediction' in response) {
                    resultDiv.innerText = `Prediction: ${response.prediction}`;
                } else {
                    resultDiv.innerText = 'Prediction not available';
                }
            },

            error: function() {
                resultDiv.innerText = 'Error predicting image.';
            }
        });
    } else {
        resultDiv.innerText = 'Please select an image.';
    }
}
