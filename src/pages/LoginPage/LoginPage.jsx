import React from "react";
import Signup from "../../Components/Signup/Signup";
import Login from "../../Components/Login/Login";

function LoginPage() {
  const [signUpToggle, setSignUpToggle] = useState(true);
  return (
    <>
      {signUpToggle ? (
        <Signup setSignUpToggle={setSignUpToggle} />
      ) : (
        <Login setSignUpToggle={setSignUpToggle} />
      )}
    </>
  );
}

export default LoginPage;
