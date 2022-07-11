import _ from "lodash";
import { useEffect, useState } from "react";

export function useFadeInOut(ratings) {
  const [loaded, setLoaded] = useState(false);
  const [currRatings, setCurrRatings] = useState(ratings);
  const [timeoutId, setTimeoutId] = useState(null);
  const [fade, setFade] = useState("fade-in");

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) {
      return;
    }
    setFade("fade-out");
    clearTimeout(timeoutId);
    setTimeoutId(
      setTimeout(() => {
        setCurrRatings(ratings);
        setFade("fade-in");
      }, 275)
    );
  }, _.values(ratings));

  return [currRatings, fade];
}
