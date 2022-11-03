import { useState } from "react";
import StepTwo from "./StepTwo";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [passwordOK, setPasswordOk] = useState(true);
  const [registered, setRegistered] = useState(false);

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const handlePasswordConfirmationChange = (event) => {
    const value = event.target.value;
    setPasswordConfirmation(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== passwordConfirmation) {
      setPasswordOk(false);
    } else {
      setPasswordOk(true);
      setRegistered(true);
    }
  };

  return (
    <div>
      {registered ? (
        ""
      ) : (
        <>
          {" "}
          <h1>Create account</h1>
          <form className="form" onSubmit={handleSubmit}>
            <span>Name</span>
            <input
              type="text"
              placeholder="Your name"
              name="firstname"
              value={name}
              onChange={handleNameChange}
            />
            <span>Email</span>
            <input
              type="email"
              placeholder="your-email@mail.com"
              name="eamail"
              value={email}
              onChange={handleEmailChange}
            />
            <span>Password</span>
            <input
              type="password"
              placeholder="P@ssW0rd"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <span>Confirm your passord</span>
            <input
              type="password"
              placeholder="P@ssW0rd"
              name="password-confirmation"
              value={passwordConfirmation}
              onChange={handlePasswordConfirmationChange}
            />
            {passwordOK ? (
              ""
            ) : (
              <p className="error">Les mots de passe ne sont pas identiques</p>
            )}
            <button type="submit" value="submit">
              Register
            </button>
          </form>
        </>
      )}
      <StepTwo
        name={name}
        email={email}
        password={password}
        registered={registered}
        setRegistered={setRegistered}
      />
    </div>
  );
};

export default Form;
