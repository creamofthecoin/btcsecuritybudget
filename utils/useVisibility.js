import { useEffect, useState } from "react";

export default function useVisibility(condition) {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const updateMedia = () => {
      if (window === undefined) {
        return;
      }

      if (condition(window)) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    updateMedia();
    if (window === undefined) {
      return;
    }
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return isVisible;
}
