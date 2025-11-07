# Emoji Translator

Your task is to complete a simple React + Node.js web app.

## Part 1 — Core Feature

### Backend (`backend/server.js`)
Complete the `/api/translate` POST endpoint:
1. Get the word from the request body
2. Find the emoji in `emojiDict`
3. Return `{ result: emoji }` if found, otherwise return `{ result: "🤷‍♂️" }` as JSON

### Frontend (`frontend/src/App.jsx`)
Build the user interface:
1. Add a form with an input field and a submit button
2. Connect the form to the `handleSubmit` function
3. Complete the `handleSubmit` function to send the word to the backend
4. Show the result in the frontend

### Test
Type a single word (e.g. "happy") and verify you see the emoji.

Example:
- Input: `happy`
- Output: `😊`

## Optional Extension (if time allows)
Upgrade the translator to handle multiple words in a single input.

For example:
Input: "happy coffee dog"
Output: "😊 ☕ 🐶"

Each unknown word should be replaced with 🤷‍♂️.

## ⚙️ Running the App

### Backend
`cd backend` -> `npm install` -> `npm run dev`

### Frontend
`cd frontend` -> `npm install` -> `npm run start`
