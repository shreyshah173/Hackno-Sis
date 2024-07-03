import React from 'react';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <Header />
      <Sidebar />
      <BasicInfo />
    </div>
  );
}

const Header = () => {
  return (
    <div className="header">
      <img src="profile-picture.jpg" alt="Profile" className="profile-picture" />
      <h1>QXyTP8Wlu8</h1>
    </div>
  );
}

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li className="active">Basic Info</li>
        <li>Points</li>
        <li>Account</li>
        <li>Lab</li>
        <li>Privacy</li>
        <li>Notifications</li>
        <li>Billing</li>
      </ul>
    </div>
  );
}

const BasicInfo = () => {
  const fields = [
    { name: 'Name', value: 'Your name' },
    { name: 'Gender', value: 'Not provided' },
    { name: 'Location', value: 'Your location' },
    { name: 'Birthday', value: 'Your birthday' },
    { name: 'Summary', value: 'Tell us about yourself (interests, experience, etc.)' },
    { name: 'Website', value: 'Your blog, portfolio, etc.' },
    { name: 'Github', value: 'Your Github username or url' },
    { name: 'LinkedIn', value: 'Your LinkedIn username or url' },
  ];

  return (
    <div className="basic-info">
      <h2>Basic Info</h2>
      <table>
        <tbody>
          {fields.map((field, index) => (
            <tr key={index}>
              <td>{field.name}</td>
              <td>{field.value}</td>
              <td>
                <button className="edit-button">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProfilePage;