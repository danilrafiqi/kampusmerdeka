import { useState } from "react";

const useToggle = (show = false) => {
  const [isShow, setIsShow] = useState(show);

  const toggleShow = () => {
    setIsShow((prev) => !prev);
  };

  return { isShow, toggleShow };
};

export default useToggle;
