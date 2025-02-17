function UserProfile() {
  return (
    <div className="profile-card">
      <h2>User Profile</h2>
      <img
        src="https://example.com/user-photo.jpg"
        alt="User Profile Card"
        className="photo"
      />
      <p>Name: Jane Doe</p>
      <p>Email: jane.doe@example.com</p>
      <a href="mailto:jane.doe@example.com">Send Email</a>
    </div>
  );
}

export default UserProfile;
