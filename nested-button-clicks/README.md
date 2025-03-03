# Nested Buttons Assignment

This is a simple React application that demonstrates how event propagation works with nested buttons. It features two buttons: an inner button nested inside an outer button. Clicking on the inner button stops the event from propagating to the outer button, ensuring that only the inner button's event handler is triggered.

## Features

- **Nested Buttons**: An inner button nested inside an outer button.
- **Event Handlers**: Separate click event handlers for both the inner and outer buttons.
- **Stopping Propagation**: Clicking the inner button prevents the event from propagating to the outer button.
- **Feedback**: Displays a message indicating which button's handler was triggered.

## Technologies Used

- React
- JavaScript (ES6+)
- CSS

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/itsvee0120/AD320.git
   ```

2. Navigate to the project directory:

   ```bash
   cd event-propagation-assignment
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   This will open the app in your default browser.

## How It Works

- The **outer button** has an event handler that displays a message when clicked.
- The **inner button** has its own event handler, but it prevents the event from bubbling up to the outer button by calling `event.stopPropagation()`.

## Example of `NestedButtons.js`

```jsx
// src/NestedButtons.js

import React, { useState } from "react";

const NestedButtons = () => {
  const [message, setMessage] = useState("");

  const handleOuterClick = () => {
    setMessage("Outer button clicked!");
  };

  const handleInnerClick = (event) => {
    event.stopPropagation(); // Prevent event propagation to the outer button
    setMessage("Inner button clicked!");
  };

  return (
    <div>
      <button
        onClick={handleOuterClick}
        style={{ padding: "20px", margin: "10px", fontSize: "16px" }}
      >
        Outer Button
        <button
          onClick={handleInnerClick}
          style={{ padding: "10px", fontSize: "14px", marginLeft: "10px" }}
        >
          Inner Button
        </button>
      </button>
      <p>{message}</p>
    </div>
  );
};

export default NestedButtons;
```

### Customization

- To modify the behavior, you can change the event handlers or adjust the styles.
- Add more nested buttons or change the event logic to suit your needs.

## License

This project is open-source and available under the MIT License. See the [LICENSE](LICENSE) file for more information.
