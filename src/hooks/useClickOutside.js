
import React, { useState, useRef, useCallback, useEffect } from "react";

function useClickoutside(ref, cb) {
    const callback = cb;
  
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target) && callback) {
          callback();
        }
      }
  
      document.addEventListener("mousedown", handleClickOutside);
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  
  export default useClickoutside;
