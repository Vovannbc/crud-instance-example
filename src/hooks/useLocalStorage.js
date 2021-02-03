import { useState } from 'react';

function useLocalStorage(key, initialValue) {
  const storageKey = key; // it could become more difficult, using some other variables in template

  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    // Get from local storage by key
    const item = window.localStorage.getItem(storageKey);
    // Parse stored json or if none return initialValue
    return item ? JSON.parse(item) : initialValue;
  });

  // Return a wrapped version of useState's setter function that persists the new value to localStorage.
  const setValue = (value) => {
    // Allow value to be a function so we have same API as useState
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    // Save state
    setStoredValue(valueToStore);
    // Save to local storage
    window.localStorage.setItem(storageKey, JSON.stringify(valueToStore));
  };

  return [storedValue, setValue];
}

export { useLocalStorage };
