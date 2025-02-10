# Dog Fetch API

This project utilizes the Dog API to display dog breed data, including breed groups, breed lists, breed details, and fun dog facts. It allows users to interact with the data by selecting breed groups and viewing details about specific breeds.

## Features

- **Breed Groups**: Displays a list of dog breed groups. Clicking on a group shows the breeds associated with that group.
- **Breed List**: Displays a list of dog breeds within a selected group. Clicking on a breed shows its details.
- **Breed Details**: Displays detailed information about a breed, including description, life expectancy, weight, and hypoallergenic status.
- **Dog Facts**: Fetches and displays a random dog fact.

## Technologies Used

- HTML5
- CSS3
- JavaScript (Fetch API)
- Dog API (https://dogapi.dog)

## Project Structure

- `index.html`: The main HTML file, which contains the structure of the app.
- `stylesheet.css`: The external CSS file that styles the app.
- `script.js`: The JavaScript file that handles the Fetch API requests and interactions.

## How to Use

1. Clone or download this repository.
2. Open the `index.html` file in a web browser.
3. The page will load the dog breed groups and display a list of breeds once a group is clicked.
4. Click on a breed to see its details, including name, description, life expectancy, weight, and hypoallergenic status.
5. The page will also display a random dog fact in the sidebar.

## How It Works

- On page load, the application fetches all dog breeds and breed groups from the Dog API.
- When a user clicks on a breed group, the application fetches and displays the breeds that belong to that group.
- When a user clicks on a breed, the application fetches and displays detailed information about that breed.
- A random dog fact is fetched and displayed on the page.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/itsvee0120/AD320/dog-fetch-api.git
   ```

2. Open the `index.html` file in your web browser.
