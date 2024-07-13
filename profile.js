function goBack() {
    window.history.back();
}

function submitForm() {
    alert("Profile submitted successfully!");
}

function previewImage(event) {
    var reader = new FileReader();
    reader.onload = function() {
        var output = document.getElementById('profilePic');
        output.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
}
