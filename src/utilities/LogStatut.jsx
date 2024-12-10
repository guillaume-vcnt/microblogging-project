import { useState } from "react";
import RegistrerForm from "../components(off)/RegistrerForm";
import LoginForm from "../components/LoginForm";

const LoginSatut = () => {
  const [signUpModal, setSignUpModal] = useState(true);
  const [signInModal, setSignInModal] = useState(false);

  const handleModals = (e) => {
    if (e.target.id === "register") {
      setSignInModal(false);
      setSignUpModal(true);
    } else if (e.target.id === "login") {
      setSignUpModal(false);
      setSignInModal(true);
    }
  };

  return (
    <div className="log-connection">
      <div className="container-form"></div>
      <ul>
        <li
          OnClick={handleModals}
          id="login"
          className={signInModal ? "active-btn" : null}
        >
          LoginForm
        </li>
        <li
          OnClick={handleModals}
          id="resgistrer"
          className={signUpModal ? "active-btn" : null}
        >
          RegistrerForm
        </li>
      </ul>
      {signUpModal && <RegistrerForm />}
      {signInModal && <LoginForm />}
    </div>
  );
};

export default LoginSatut;
