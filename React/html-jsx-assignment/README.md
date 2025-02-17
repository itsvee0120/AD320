# Changes from HTML to JSX

This document outlines the changes made to the original HTML snippet to convert it into valid JSX for use in a React component.

## Changes Overview

The original HTML snippet has been modified to follow JSX-specific syntax rules. The following changes were applied:

1. **Replaced `class` with `className`:**
   In JSX, the `class` attribute is replaced with `className` to avoid conflicts with the JavaScript `class` keyword.

   - **Before:** `<div class="profile-card">`
   - **After:** `<div className="profile-card">`

2. **Self-closing Tags:**
   In JSX, self-closing tags (like `<img />`) must be explicitly closed with a slash.

   - **Before:** `<img src="https://example.com/user-photo.jpg" alt="User Photo" class="photo"/>`
   - **After:** `<img src="https://example.com/user-photo.jpg" alt="User Photo" className="photo" />`

3. **Enclosing All Elements in a Single Parent:**
   In React, all JSX elements must be enclosed in a single parent element. The original HTML snippet was already correct in this regard, as it has a wrapping `<div>` element.

4. **Added a Functional Component:**
   The JSX was wrapped inside a functional React component (`UserProfile`) to demonstrate how it can be used in a React application.

## Updated JSX

Here is the updated JSX code after applying the above changes:

```jsx
function UserProfile() {
  return (
    <div className="profile-card">
      <h2>User Profile</h2>
      <img
        src="https://example.com/user-photo.jpg"
        alt="User Photo"
        className="photo"
      />
      <p>Name: Jane Doe</p>
      <p>Email: jane.doe@example.com</p>
      <a href="mailto:jane.doe@example.com">Send Email</a>
    </div>
  );
}
```

## Summary of Key Changes

- **Attribute Names:** `class` becomes `className`.
- **Self-closing Tags:** Tags like `<img />` are properly self-closed.
- **Single Parent Element:** JSX requires all elements to be wrapped in a single parent element (already done in the original HTML).
- **React Component:** The JSX code was enclosed in a React functional component for easy usage in a React application.

This converted JSX can now be used as part of a React app, making it compatible with the React framework's rendering process.
