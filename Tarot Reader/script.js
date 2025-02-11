document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const hamburger = document.querySelector(".hamburger");
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  document.body.appendChild(overlay);

  function toggleNavbar() {
    navbar.classList.toggle("show");
    overlay.classList.toggle("show");
  }

  hamburger.addEventListener("click", toggleNavbar);
  overlay.addEventListener("click", toggleNavbar);
});

let generateBtn = document.getElementById("button");

if (generateBtn) {
  generateBtn.addEventListener("click", generateCard); // Add event listener for button click
}

function generateCard() {
  fetch("https://tarotapi.dev/api/v1/cards/random?n=1")
    .then((response) => response.json())
    .then((data) => {
      const card = data.cards[0]; // Access the first card in the array

      console.log(card); // Log the card object for debugging

      document.getElementById("card-title").innerHTML = card.name;
      document.getElementById(
        "card-number"
      ).innerHTML = `Card Number: ${card.value_int}`; // Display card value

      // Correct check for undefined card.suit

      document.getElementById(
        "card-suit"
      ).innerHTML = `Card Suit: ${card.suit}`; // Display card suit

      document.getElementById(
        "card-type"
      ).innerHTML = `Card Arcana Type: ${card.type}`; // Display card type if no suit is present

      document.getElementById(
        "card-meaning"
      ).innerHTML = `<h3>Upright meaning:</h3> ${card.meaning_up}`; // Display upright meaning
      document.getElementById(
        "card-reversed-meaning"
      ).innerHTML = `<h3>Reversed meaning:</h3> ${card.meaning_rev}`;
      // For reversed meaning
    })
    .catch((error) => console.log("Error fetching card data:", error)); // Added error handling
}

document.getElementById("searchButton").addEventListener("click", function () {
  let query = document.getElementById("searchInput").value.trim();
  let resultsDiv = document.getElementById("searchResults");

  if (query === "") {
    resultsDiv.innerHTML = "Please enter a tarot card name.";
    return;
  }

  let apiUrl = `https://tarotapi.dev/api/v1/cards/search?q=${encodeURIComponent(
    query
  )}`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      if (data.cards && data.cards.length > 0) {
        resultsDiv.innerHTML = data.cards
          .map(
            (card) => `
                <div class="card-result">
                  <h2>${card.name}</h2>
                  <p><strong>Meaning (Up):</strong> ${card.meaning_up}</p>
                  <p><strong>Meaning (Reversed):</strong> ${card.meaning_rev}</p>
                  <p><strong>Description:</strong> ${card.desc}</p>
                </div>
              `
          )
          .join("");
      } else {
        resultsDiv.innerHTML = "No matching tarot cards found.";
      }
    })
    .catch((error) => {
      console.error("Error fetching tarot data:", error);
      resultsDiv.innerHTML = "Error fetching data. Please try again.";
    });
});
