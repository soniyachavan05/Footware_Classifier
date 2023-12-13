function predict() {
    const fileInput = document.getElementById('fileInput');
    const resultDiv = document.getElementById('result');

    if (fileInput.files.length > 0) {
        const formData = new FormData();
        formData.append('file', fileInput.files[0]);

        $.ajax({
            type: 'POST',
            url: 'predict',
            data: formData,
            contentType: false,
            processData: false,
            success: function(response) {
                resultDiv.innerText = `Prediction: ${response.prediction}`;
            },
            error: function() {
                resultDiv.innerText = 'Error predicting image.';
            }
        });
    } else {
        resultDiv.innerText = 'Please select an image.';
    }
}
