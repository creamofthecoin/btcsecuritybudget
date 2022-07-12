import _ from "lodash";
import { useEffect, useState } from "react";

export function useFadeInOut(inObject, duration) {
  const [loaded, setLoaded] = useState(false);
  const [currObject, setCurrObject] = useState(inObject);
  const [timeoutId, setTimeoutId] = useState(null);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) {
      return;
    }
    setFade(false);
    clearTimeout(timeoutId);
    setTimeoutId(
      setTimeout(() => {
        setCurrObject(inObject);
        setFade(true);
      }, duration + 25)
    );
  }, _.values(inObject));

  return [currObject, fade];
}

export function getFadeStyle(fade, duration) {
  return {
    transition: `opacity ${duration}ms ease`,
    opacity: fade ? 1 : 0,
  };
}
