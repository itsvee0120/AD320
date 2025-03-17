// UserProfileWithImmer.js
import React from "react";
import { useImmer } from "use-immer";

const UserProfileWithImmer = () => {
  // Initialize state with useImmer
  const [userProfile, updateUserProfile] = useImmer({
    name: "John Doe",
    email: "john.doe@example.com",
    contactDetails: {
      phone: "123-456-7890",
      address: "123 Main St, Springfield, IL",
    },
    preferences: {
      newsletter: false,
      notifications: true,
    },
  });

  // Function to update contact details
  const updateContactDetails = (field, value) => {
    updateUserProfile((draft) => {
      draft.contactDetails[field] = value;
    });
  };

  // Function to toggle newsletter subscription
  const toggleNewsletterSubscription = () => {
    updateUserProfile((draft) => {
      draft.preferences.newsletter = !draft.preferences.newsletter;
    });
  };

  // Function to toggle notifications preference
  const toggleNotifications = () => {
    updateUserProfile((draft) => {
      draft.preferences.notifications = !draft.preferences.notifications;
    });
  };

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <h3>Name: {userProfile.name}</h3>
        <h3>Email: {userProfile.email}</h3>
      </div>

      <div>
        <h3>Contact Details</h3>
        <p>Phone: {userProfile.contactDetails.phone}</p>
        <p>Address: {userProfile.contactDetails.address}</p>
        <input
          type="text"
          value={userProfile.contactDetails.phone}
          onChange={(e) => updateContactDetails("phone", e.target.value)}
          placeholder="Update Phone"
        />
        <input
          type="text"
          value={userProfile.contactDetails.address}
          onChange={(e) => updateContactDetails("address", e.target.value)}
          placeholder="Update Address"
        />
      </div>

      <div>
        <h3>Preferences</h3>
        <label>
          <input
            type="checkbox"
            checked={userProfile.preferences.newsletter}
            onChange={toggleNewsletterSubscription}
          />
          Subscribe to Newsletter
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={userProfile.preferences.notifications}
            onChange={toggleNotifications}
          />
          Enable Notifications
        </label>
      </div>

      <div>
        <h3>Current State:</h3>
        <pre>{JSON.stringify(userProfile, null, 2)}</pre>
      </div>
    </div>
  );
};

export default UserProfileWithImmer;
