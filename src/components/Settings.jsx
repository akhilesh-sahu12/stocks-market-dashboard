import React from 'react';
import { useUserSettings } from '../context/UserSettingsContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../components/UserSettings.css';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

const Settings = () => {
  const { userSettings, toggleNotifications } = useUserSettings();
  const { theme } = useTheme();
  const userLogin =useAuth();

  const handleLoginNotification = () => {
    if(userLogin){
    toast.success('User already logged in!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }else{
    toast.warning('User not logged in!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
  };

  return (
    <div className="user-settings-container" style={{ backgroundColor: theme.background, color: theme.text }}>
      <ToastContainer />
      <h2 className="user-settings-title">Notification Settings</h2>
      <div className="setting-item">
        <span className="setting-label">Enable Notifications</span>
        <div className="setting-toggle">
          <input
            type="checkbox"
            checked={userSettings.notifications}
            onChange={() => {
              toggleNotifications();
              handleLoginNotification();
            }}
          />
          <span className="toggle-label">{userSettings.notifications ? 'On' : 'Off'}</span>
        </div>
      </div>
    </div>
  );
};

export default Settings;