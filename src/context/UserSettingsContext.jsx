import { createContext, useContext, useState } from 'react';

const UserSettingsContext = createContext();

export const UserSettingsProvider = ({ children }) => {
  const [userSettings, setUserSettings] = useState({
    notifications: true, // Replace with your default value
  });

  const toggleNotifications = () => {
    setUserSettings((prevSettings) => ({
      ...prevSettings,
      notifications: !prevSettings.notifications,
    }));
  };

  return (
    <UserSettingsContext.Provider value={{ userSettings, toggleNotifications }}>
      {children}
    </UserSettingsContext.Provider>
  );
};

export const useUserSettings = () => {
  return useContext(UserSettingsContext);
};