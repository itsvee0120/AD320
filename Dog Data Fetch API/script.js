let allBreeds = []; // Store all breeds globally

//Console
// Fetch the list of dog breeds from the Dog API
fetch("https://dogapi.dog/api/v2/breeds")
  .then((response) => response.json()) // Parse response to JSON
  .then((data) => {
    // Log the list of dog breeds
    console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching dog breeds:", error);
  });

// Fetch Dog Groups and Display in List
const fetchDogGroups = async () => {
  try {
    const response = await fetch("https://dogapi.dog/api/v2/groups");
    const data = await response.json();

    if (Array.isArray(data.data)) {
      const groupList = document.getElementById("group-list");
      groupList.innerHTML = "";

      data.data.forEach((group) => {
        const groupName = group.attributes?.name;

        if (groupName) {
          const groupItem = document.createElement("li");
          groupItem.textContent = groupName;
          groupItem.dataset.groupId = group.id;
          groupItem.addEventListener("click", () =>
            filterBreedsByGroup(group.id, groupName)
          );
          groupList.appendChild(groupItem);
        }
      });
    } else {
      console.error("Expected data to be an array, but received:", data);
    }
  } catch (error) {
    console.error("Error fetching dog groups:", error);
  }
};

// Fetch All Breeds
const fetchAllBreeds = async () => {
  try {
    const response = await fetch("https://dogapi.dog/api/v2/breeds");
    const data = await response.json();

    if (Array.isArray(data.data)) {
      allBreeds = data.data; // Store breeds globally
    } else {
      console.error("Expected breed data to be an array, but received:", data);
    }
  } catch (error) {
    console.error("Error fetching breeds:", error);
  }
};

// Filter Breeds by Group
const filterBreedsByGroup = (groupId, groupName) => {
  const breedsList = document.getElementById("breeds-list");
  const selectedGroup = document.getElementById("selected-group");
  breedsList.innerHTML = "";
  selectedGroup.textContent = groupName;

  const filteredBreeds = allBreeds.filter(
    (breed) => breed.relationships?.group?.data?.id === groupId
  );

  if (filteredBreeds.length > 0) {
    filteredBreeds.forEach((breed) => {
      const breedItem = document.createElement("li");
      breedItem.textContent = breed.attributes.name;
      breedItem.dataset.breedId = breed.id;
      breedItem.addEventListener("click", async () => {
        await fetchBreedDetails(breed.id);
      });
      breedsList.appendChild(breedItem);
    });
  } else {
    breedsList.innerHTML = "<li>No breeds found for this group.</li>";
  }
};

// Fetch Breed Details
const fetchBreedDetails = async (breedId) => {
  try {
    const breedResponse = await fetch(
      `https://dogapi.dog/api/v2/breeds/${breedId}`
    );
    const breedData = await breedResponse.json();

    if (breedData?.data?.attributes) {
      const breedName = document.getElementById("breed-name");
      const breedDescription = document.getElementById("breed-description");
      const breedDetails = document.getElementById("breed-details");

      breedName.textContent = breedData.data.attributes.name || "Unknown Breed";
      breedDescription.textContent =
        breedData.data.attributes.description || "No description available.";
      breedDetails.innerHTML = `
        <strong>Life Expectancy:</strong> ${
          breedData.data.attributes.life?.min ?? "N/A"
        } - ${breedData.data.attributes.life?.max ?? "N/A"} years<br>
        <strong>Weight:</strong> Male - ${
          breedData.data.attributes.male_weight?.min ?? "N/A"
        }kg to ${breedData.data.attributes.male_weight?.max ?? "N/A"}kg, 
        Female - ${
          breedData.data.attributes.female_weight?.min ?? "N/A"
        }kg to ${breedData.data.attributes.female_weight?.max ?? "N/A"}kg<br>
        <strong>Hypoallergenic:</strong> ${
          breedData.data.attributes.hypoallergenic ? "Yes" : "No"
        }
      `;
    }
  } catch (error) {
    console.error("Error fetching breed details:", error);
  }
};

// Fetch Random Dog Fact
fetch("https://dogapi.dog/api/v2/facts")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("random-facts").textContent =
      data.data[0].attributes.body;
  })
  .catch((error) => {
    console.error("Error fetching dog facts:", error);
  });

// Load Data on Page Load
const initializeApp = async () => {
  await fetchAllBreeds(); // Fetch all breeds first
  fetchDogGroups(); // Fetch breed groups
};

initializeApp();
