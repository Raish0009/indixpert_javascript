// Get form and elements
const form = document.getElementById("admissionForm");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const genderSelect = document.getElementById("gender");
const courseSelect = document.getElementById("course");
const emailInput = document.getElementById("email");
const messageBox = document.getElementById("messageBox");

// Form submit event
form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page refresh

    // Get input values
    const name = nameInput.value.trim();
    const age = ageInput.value.trim();
    const gender = genderSelect.value;
    const course = courseSelect.value;
    const email = emailInput.value.trim();

    // Simple validation
    if (!name || !age || !gender || !course || !email) {
        showMessage("⚠️ Please fill out all fields.", "red");
        return;
    }

    if (isNaN(age) || age < 16 || age > 60) {
        showMessage("❌ Please enter a valid age between 16 and 60.", "red");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        showMessage("❌ Please enter a valid email address.", "red");
        return;
    }

    // Success message
    showMessage(`✅ Thank you, ${name}! Your admission form for ${course} is submitted.`, "green");

    // Clear form after success
    form.reset();
});

// Function to show messages
function showMessage(text, color) {
    messageBox.textContent = text;
    messageBox.style.color = color;
}
