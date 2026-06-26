import RegistrationForm from "../components/RegistrationForm";
import "./Register.css";
import register from "../assets/images/register.png";

function Register() {
  return (
    <div className="register-page">

      <div className="left-section">

        <div className="overlay">

          <h1>
            Discover new things on
            <br />
            Superapp
          </h1>

        </div>

      </div>

      <div className="right-section">

        <RegistrationForm />

      </div>

    </div>
  );
}

export default Register;