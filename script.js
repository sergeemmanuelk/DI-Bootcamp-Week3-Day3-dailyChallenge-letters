const input = document.getElementById("onlyLetters")

input.addEventListener("keyup", function(event) {
    // Get the value of the input field
    let value = input.value

    // Remove any non-letter characters
    value = value.replace(/[^a-zA-Z]/g, "")

    // Update the value of the input field
    input.value = value
})
