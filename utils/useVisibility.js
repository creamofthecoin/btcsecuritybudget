import { useEffect, useState } from "react";

export default function useVisibility(condition) {
  const [isVisible, setVisible] = useState(undefined);

  useEffect(() => {
    const updateMedia = () => {
      if (typeof window === "undefined") {
        return;
      }

      if (condition(window)) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    updateMedia();
    if (typeof window === "undefined") {
      return;
    }
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return isVisible;
}
