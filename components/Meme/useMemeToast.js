import { useToast } from "@chakra-ui/react";
import { useState } from "react";

import React, { useEffect } from "react";

export default function useMemeToast(memeSrc, rating) {
  const [currRating, setCurrRating] = useState(rating);

  const toast = useToast();
  const toastIdRef = React.useRef();

  function addToast() {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
    toastIdRef.current = toast({
      title: memeSrc[rating][1],
      duration: 5000,
      isClosable: false,
      position: "top",
    });
  }

  useEffect(() => {
    if (currRating !== rating) {
      setCurrRating(rating);
      addToast();
    }
  }, [rating]);
}
