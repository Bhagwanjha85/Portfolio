const calculateButton = document.getElementById("calculateButton");
const resultContainer = document.getElementById("result");
const loveScoreText = document.getElementById("loveScoreText");
const newGameButton = document.getElementById("newGameButton");

calculateButton.addEventListener("click", () => {
    const yourName = document.getElementById("yourName").value;
    const partnerName = document.getElementById("partnerName").value;

    if (yourName.trim() === "" || partnerName.trim() === "") {
        alert("Please enter both names.");
    } else {
        const loveScore = calculateLoveScore(yourName, partnerName);
        displayLoveScore(loveScore);
    }
});

newGameButton.addEventListener("click", () => {
    // Reset the form and hide the result
    document.getElementById("yourName").value = "";
    document.getElementById("partnerName").value = "";
    resultContainer.style.display = "none";
});

function calculateLoveScore(yourName, partnerName) {
    // A simple algorithm to generate a "love score"
    const combinedNames = (yourName + partnerName).toLowerCase();
    let loveScore = 0;

    for (let i = 0; i < combinedNames.length; i++) {
        loveScore += combinedNames.charCodeAt(i);
    }

    return loveScore % 101; // Ensure the score is between 0 and 100
}

function displayLoveScore(loveScore) {
    loveScoreText.textContent = `Love Score: ${loveScore}%`;
    resultContainer.style.display = "block";
}
