# React

## What is React
React is a JavaScript library used to build user interfaces.
It helps developers create interactive websites and web applications.
React allows parts of a web page to update without reloading the entire page.

Examples:
- Social media feeds
- Dashboards
- Chat applications
- Dynamic websites

---

# Requirements Before Creating React App

## 1. Install Node.js
React requires Node.js to run.

Check if Node.js is installed:

```bash
node -v
npm -v
```

If versions appear, Node.js is installed successfully.

---

# Creating a React Project

## Step 1: Open VS Code
1. Open Visual Studio Code
2. Open a folder where you want to create your project
3. Open the terminal

Shortcut:
```
Ctrl + `
```

---

## Step 2: Create React App Using Vite

Run the command:

```bash
npm create vite@latest
```

---

## Step 3: Setup Project

You will see questions in the terminal.

Example:

Project Name:
```
my-react-app
```

Select Framework:
```
React
```

Select Variant:
```
JavaScript
```

---

## Step 4: Move into Project Folder

```bash
cd my-react-app
```

---

## Step 5: Install Dependencies

```bash
npm install
```

This installs all required packages for the React project.

---

## Step 6: Run the React Application

```bash
npm run dev
```

After running the command, you will see something like:

```
Local: http://localhost:5173/
```

Open this link in your browser.

Your React app will start.

---

# React Project Folder Structure

```
my-react-app
│
├── node_modules
├── public
├── src
│   ├── App.jsx
│   ├── main.jsx
│   └── assets
│
├── index.html
├── package.json
├── vite.config.js
```

---

# Important Files

## App.jsx
Main component of the application.

## main.jsx
Entry point of the React app.

## index.html
Main HTML file of the project.

---

# Writing Your First React Code

Open this file:

```
src/App.jsx
```

Example code:

```jsx
function App() {
  return (
    <h1>Hello React</h1>
  );
}

export default App;
```

Save the file and the browser will update automatically.

---

# Stopping the Server

Press:

```
Ctrl + C
```

in the terminal to stop the React server.

---

# Summary

Steps to create a React project:

1. Install Node.js
2. Open VS Code
3. Run `npm create vite@latest`
4. Select React
5. Go to project folder
6. Run `npm install`
7. Run `npm run dev`
8. Open the local server link
