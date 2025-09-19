# AI Smartwatch Health Tracker

This project is a health tracking app integrated with a smartwatch. It fetches real-time data like heart rate, steps, and temperature, and displays the health history. The project uses Firebase for data storage, and you will need to set up your own Firebase project for this to work.

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites

1. **Node.js and npm**: You need to have Node.js and npm installed on your machine. You can download them from [here](https://nodejs.org/).
2. **Firebase Account**: You will need a Firebase account to set up a Firebase project and get API credentials.
3. **API URL**: You need to replace the dummy API URL with your actual API to fetch health data from your smartwatch.

### Setting Up Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Create a new Firebase project.
3. In your Firebase project, enable **Firebase Firestore** and **Firebase Authentication**.
4. Add your app to Firebase:
   - Go to **Project Settings** and get your Firebase **config object** for use in the app.
5. Replace the Firebase configuration in your project with the one from your Firebase console.
```js
In src/firebase.js, replace with your Firebase config
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
```
Available Scripts
In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: this is a one-way operation. Once you eject, you can't go back!
If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. 
At this point you're on your own.
You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

Learn More
You can learn more in the Create React App documentation.

To learn React, check out the React documentation.

Code Splitting
This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

Analyzing the Bundle Size
This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

Making a Progressive Web App
This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

Advanced Configuration
This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

Deployment
This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

npm run build fails to minify
This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

Important Notes:

Replace the API URL with the real endpoint from your smartwatch.

Set up Firebase in your project to handle data storage and authentication.
