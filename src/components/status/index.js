// src/status/index.js

const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('pageState', serializedState);
    } catch (err) {
      console.error('Error saving state to localStorage:', err);
    }
  };
  
  const loadState = () => {
    try {
      const serializedState = localStorage.getItem('pageState');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      console.error('Error loading state from localStorage:', err);
      return undefined;
    }
  };
  
  export { saveState, loadState };
  