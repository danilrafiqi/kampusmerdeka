import React, { useEffect } from "react";
import Button from "../../component/atoms/Button/Button.atom";

const Report = () => {
  // const listenLocalStorage = useCallback(()=>{

  // },[])

  useEffect(() => {
    window.addEventListener("storage", () => {});
  }, []);

  const updateStorage = () => {
    localStorage.setItem("test", localStorage.getItem("test") + "1");
  };

  return (
    <div>
      <div>Halaman Reports</div>
      <Button onClick={updateStorage}>Submit</Button>
    </div>
  );
};

export default Report;
