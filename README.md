# 📘 React Comments Dashboard & Profile Viewer

This project is a React-based application built to fulfill the assignment requirements within a 48-hour timeline. It consists of two primary screens: a *Profile Screen* (using dummy user API data) and a *Comments Dashboard*

---

## 🚀 Features

### 🔹 Profile Screen
- Loads and displays the first user from the dummy user API.
- Profile fields are *read-only*.
- By clicking user profile on navbar redirect to profile*.
- Integrated *React Router* for navigation between screens.

### 🔹 Comments Dashboard
- Fetches and displays *500 comment records* from the dummy API.
- Implements a *fully custom pagination system* (no third-party pagination libraries).
- Implements *searching* (partial match) by *name, email, and comments*.
- Includes *custom sorting logic* on:
  - Post ID
  - Name
  - Email
- Sorting behavior:
  - *No sort → Ascending → Descending → No sort* cycle.
  - Only *one column can be sorted at a time*.

---

## 🧪 Technical Stack

- *React.js* for building UI
- *React Router* for navigation
- *Plain JavaScript*
- *CSS*
- Fully responsive and *mobile-optimized*
- Compatible with *Chrome, **Firefox, and **Edge*

---

## Project Structure
src/
│
├── components/
│   ├── Header.jsx
│
├── pages/
│   ├── dashboard.jsx
│   ├── profile.jsx
|
├──styles/
    ├──dashboard.css
    ├──global.css
    ├──header.css
    ├──profile.css
├── App.js
├── index.js
└── styles.css

## 🛠 Installation & Setup

1. *Clone the repository:*
   ```bash
   git clone https://github.com/Ashokkadubandi/swift-assignment.git
   cd swift-assignment