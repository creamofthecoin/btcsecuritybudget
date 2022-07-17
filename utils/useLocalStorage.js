import { useCallback, useEffect, useState } from "react";

// modified from https://usehooks.com/useLocalStorage/
// https://github.com/uidotdev/usehooks
export function useLocalStorage(key, initialValue, onLoadFromStorage) {
  const [storedValue, setStoredValue] = useState(initialValue);

  // Only support setValue(value) instead of setValue(fn(value))
  // so that useCallback is called just once
  const setValue = useCallback((toStorage) => {
    if (!toStorage) {
      return setStoredValue;
    }
    return (value) => {
      try {
        setStoredValue(value);
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
      const item = window.localStorage.getItem(key);
      if (item) {
        const parsed = JSON.parse(item);
        if (onLoadFromStorage) {
          onLoadFromStorage(parsed, setStoredValue);
        } else {
          setStoredValue(parsed);
        }
      }
    } catch (error) {}
  }, []);

  return [storedValue, setValue];
}
