const StepTwo = ({ name, email, password, registered, setRegistered }) => {
  return registered === false ? (
    ""
  ) : (
    <div className="results">
      <h1>Results</h1>
      <div className="info">
        <p>Name: {name} </p>
        <p>Email: {email}</p>
        <p>Password: {password} </p>
      </div>
      <button onClick={() => setRegistered(false)} className="return-button">
        Edit your information
      </button>
    </div>
  );
};

export default StepTwo;
