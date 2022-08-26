import { useEffect } from "react";

const useOutsideClick = (dropdown, callback) => {
  const handleClick = e => {
    if (dropdown.current && !dropdown.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default useOutsideClick;
