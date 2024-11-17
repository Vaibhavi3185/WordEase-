function selectFile() {
    const fileInput = document.getElementById("fileInput");
    fileInput.click(); // Trigger the file input click
}
window.onload = function() {
    if (performance.navigation.type === 1) { // Page was reloaded
        window.location.href = "intro.html"; // Redirect to first page
    }
};