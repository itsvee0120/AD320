# Tarot Card Web App

## Overview

This is a simple Tarot card web application that allows users to draw a random tarot card and look up tarot card meanings through a search functionality. The app fetches tarot card data from an external API and displays relevant information dynamically.

## Features

- **Draw a Tarot Card**: Click the "Draw Card" button to fetch and display a random tarot card with its name, number, suit, type, upright meaning, and reversed meaning.
- **Tarot Dictionary Search**: Users can search for tarot cards by name to retrieve their meanings and descriptions.
- **Responsive Navigation Menu**: A collapsible hamburger menu for easy navigation.

## Technologies Used

- **HTML**: Structuring the pages
- **CSS**: Styling the pages
- **JavaScript**: Fetching and displaying data dynamically
- **Fetch API**: Retrieving tarot card data from `https://tarotapi.dev/api/v1/cards`

## File Structure

```
├── index.html          # Main page with card drawing functionality
├── dictionary.html     # Tarot dictionary page with search feature
├── styles.css         # Main styling for index.html
├── styles2.css        # Styling for dictionary.html
├── script.js          # JavaScript for fetching and displaying tarot data
```

## How to Use

1. **Open `index.html`** in a browser.
2. Click the **"Draw Card"** button to fetch a random tarot card.
3. Navigate to the **Tarot Dictionary** page to search for a tarot card meaning.
4. Use the hamburger menu to navigate between pages.

## API Details

- **Random Card API**: `https://tarotapi.dev/api/v1/cards/random?n=1`
- **Search API**: `https://tarotapi.dev/api/v1/cards/search?q={query}`

## Future Enhancements

- Improve UI/UX with animations and enhanced styling.
- Add more detailed descriptions and imagery for tarot cards.
- Implement a history feature to track previously drawn cards.

## License

This project is open-source and can be used freely for educational purposes.
