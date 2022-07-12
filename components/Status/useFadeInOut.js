import _ from "lodash";
import { useEffect, useState } from "react";

export function useFadeInOut(ratings, duration) {
  const [loaded, setLoaded] = useState(false);
  const [currRatings, setCurrRatings] = useState(ratings);
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
        setCurrRatings(ratings);
        setFade(true);
      }, duration + 25)
    );
  }, _.values(ratings));

  return [currRatings, fade];
}
