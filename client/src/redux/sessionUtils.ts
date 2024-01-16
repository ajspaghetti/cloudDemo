export const isSessionValid = () => {
    const loginTimeStr = localStorage.getItem('loginTime');
    const loginTime = loginTimeStr ? new Date(JSON.parse(loginTimeStr)) : new Date(); // Initialize with the current time if not found in localStorage
    const currentTime = new Date();
    const SIX_HOURS = 6 * 60 * 60 * 1000; // 6 hours in milliseconds

    if (currentTime.getTime() - loginTime.getTime() > SIX_HOURS) {
      // Session has expired
      localStorage.removeItem('user');
      localStorage.removeItem('loginTime');
      return false;
    }

    return true;
  };
