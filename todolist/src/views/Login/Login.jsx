import React, { useEffect } from "react";
import Button from "../../component/atoms/Button/Button.atom";

const Login = () => {
  useEffect(() => {
    window.addEventListener("storageChange", () => {
      console.log("cek updated storageChange");
    });

    return () =>
      window.removeEventListener("storageChange", () => {
        console.log("test updated");
      });
  }, []);

  const updateStorage = () => {
    localStorage.setItem("test", localStorage.getItem("test") + "1");
    const event = new Event("storageChange");
    window.dispatchEvent(event);
  };

  return (
    <div>
      <div>Halaman Logins</div>
      <Button onClick={updateStorage}>Submit</Button>
    </div>
  );
};

export default Login;
