import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../store/useStore";
import { validateForm } from "../utils/validation";
import "./RegistrationForm.css";

function RegistrationForm() {
  const navigate = useNavigate();
  const { setUser } = useStore();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);

    if (!formData.terms) {
      validationErrors.terms = "Please accept the Terms & Conditions";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setUser({
      name: formData.name,
      username: formData.username,
      email: formData.email,
      mobile: formData.mobile,
    });

    localStorage.setItem(
      "user",
      JSON.stringify({
        name: formData.name,
        username: formData.username,
        email: formData.email,
        mobile: formData.mobile,
      })
    );

    navigate("/categories");
  };

  return (
    <div className="register-form-container">
      <h1 className="logo">Super app</h1>

      <p className="subtitle">Create your new account</p>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}

        <input
          type="text"
          name="username"
          placeholder="User Name"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <span className="error">{errors.username}</span>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <input
          type="text"
          name="mobile"
          placeholder="Mobile"
          value={formData.mobile}
          onChange={handleChange}
        />
        {errors.mobile && <span className="error">{errors.mobile}</span>}

        <label className="checkbox">
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
          />

          Share my registration data with Super App
        </label>

        {errors.terms && <span className="error">{errors.terms}</span>}

        <button type="submit">
          SIGN UP
        </button>

        <p className="login-text">
          By clicking on Sign Up, you agree to our Terms and Privacy Policy.
        </p>

      </form>
    </div>
  );
}

export default RegistrationForm;