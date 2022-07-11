import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function useMemeToast(memeSrc, rating) {
  const [currRating, setCurrRating] = useState(rating);

  const toastIdRef = React.useRef();

  function addToast() {
    if (toastIdRef.current) {
      toast.dismiss(toastIdRef.current);
    }
    toastIdRef.current = toast(memeSrc[rating][1]);
  }

  useEffect(() => {
    if (currRating !== rating) {
      setCurrRating(rating);
      addToast();
    }
  }, [rating]);
}
