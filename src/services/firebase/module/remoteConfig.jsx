import { remoteConfig } from "../config/firebase";

// Set default values for your remote config parameters
remoteConfig.defaultConfig = {
    "welcome_message": "Welcome to my app!"
  };
  
  // Fetch remote config values
  remoteConfig.fetchAndActivate()
    .then(() => {
      // Use the remote config values in your app
      const welcomeMessage = remoteConfig.getString("welcome_message");
      console.log(welcomeMessage); // "Welcome to my app!"
    })
    .catch((error) => {
      console.error(error);
    });