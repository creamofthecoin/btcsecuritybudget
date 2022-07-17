import { useCallback, useEffect, useState } from "react";

// modified from https://usehooks.com/useLocalStorage/
// https://github.com/uidotdev/usehooks
export function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(initialValue);

  // Only support setValue(value) instead of setValue(fn(value))
  // so that useCallback is called just once
  const setValue = useCallback((toStorage) => {
    if (toStorage) {
      return setStoredValue;
    }
    return (value) => {
      try {
        // Save state
        setStoredValue(value);
        // Save to local storage
        if (typeof window !== "undefined") {
          window.localStorage.setItem(key, JSON.stringify(value));
        }
      } catch (error) {}
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {}
  }, []);

  return [storedValue, setValue];
}
