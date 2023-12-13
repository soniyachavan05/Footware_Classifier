function predict() {
    const fileInput = document.getElementById('fileInput');
    const resultDiv = document.getElementById('result');

    if (fileInput.files.length > 0) {
        const formData = new FormData();
        formData.append('file', fileInput.files[0]);

        $.ajax({
            type: 'POST',
            url: 'predict', // Specify the endpoint for prediction
            data: formData,
            contentType: false,
            processData: false,
            success: function(response) {
                resultDiv.innerText = `Prediction: ${response}`;
            },
            error: function() {
                resultDiv.innerText = 'Error predicting image.';
            }
        });
    } else {
        resultDiv.innerText = 'Please select an image.';
    }
}
