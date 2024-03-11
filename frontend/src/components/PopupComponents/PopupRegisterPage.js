import React, { useState } from "react";
import "./PopupRegisterPage.css";
import axios from "axios";

function PopupRegisterPage(props) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    company: "",
    gender: "",
    phoneLand: "",
    mobileNumber: "",
    email: "",
    address: "",
    zipcode: "",
    district: "",
    profilePicture: null,
    role: "",
    username: "",
    password: "",
    confirmPassword: "",
    //paymentMethods: [], // array to store payment methods
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file" && files && files[0]) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreview(reader.result); // Set the image preview URL
      };

      reader.readAsDataURL(files[0]); // Read the file as a data URL
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  // State for form submission and error message
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validateCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return validateStep1();
      case 2:
        return validateStep2();
      case 3:
        return validateStep3();
      //case 4:
      //return validateStep4();
      default:
        return true;
    }
  };

  const validateStep1 = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.birthday &&
      // formData.company && (optional)
      formData.role &&
      formData.gender &&
      formData.phoneMobile &&
      formData.email
    );
  };

  const validateStep2 = () => {
    return formData.address && formData.zipcode && formData.district;
  };

  const validateStep3 = () => {
    return (
      formData.profilePicture &&
      formData.username &&
      formData.password &&
      formData.confirmPassword
    );
  };

  // const validateStep4 = () => {
  //  return formData.bankName; // Assuming bankName is the only required field in step 4
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateCurrentStep()) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    let url;
    switch (formData.role) {
      case "Farmer":
        url = "http://localhost:8070/farmer";
        break;
      case "Seller":
        url = "http://localhost:8070/seller";
        break;
      case "Deliveryman":
        url = "http://localhost:8070/deliveryman";
        break;
      default:
        setErrorMessage("Invalid role selected.");
        return;
    }

    try {
      await axios.post(url, formData);
      setIsRegistered(true);
    } catch (error) {
      console.log(error);
      setErrorMessage("Failed to register. Please try again later.");
    }
  };
  const nextStep = () => {
    if (
      currentStep === 1 &&
      (!formData.firstName ||
        !formData.lastName ||
        !formData.birthday ||
        !formData.nicNumber ||
        !formData.gender ||
        !formData.mobileNumber)
    ) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    if (
      currentStep === 2 &&
      (!formData.address || !formData.zipcode || !formData.district)
    ) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    if (
      currentStep === 3 &&
      (!formData.profilePicture ||
        !formData.username ||
        !formData.password ||
        !formData.confirmPassword)
    ) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setCurrentStep((prevStep) => prevStep + 1);
  };
  const prevStep = () => setCurrentStep((prevStep) => prevStep - 1);

  const [imagePreview, setImagePreview] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);

  return props.trigger ? (
    <div className="popup">
      <div className="nothing-register"></div>
      <div className="popup-inner">
        <p>Register Form - Step {currentStep}</p>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="register-container">
          <form onSubmit={handleSubmit}>
            {/* Personal Information Section */}
            {currentStep === 1 && (
              <>
                <div className="name-container">
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <input
                  type="date"
                  placeholder="Birthday"
                  name="birthday"
                  value={formData.birthday}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  //required
                />
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>

                {/*<input
                  type="tel"
                  placeholder="Landline Number"
                  name="phoneLand"
                  value={formData.phoneLand}
                  onChange={handleChange}
            />*/}

                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Role</option>
                  <option value="farmer">Farmer</option>
                  <option value="seller">Seller</option>
                  <option value="Delivery">Deliveryman</option>
                </select>

                <input
                  type="tel"
                  placeholder="Mobile Number"
                  name="phoneMobile"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  placeholder="Email (Optional)"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <button type="button" onClick={nextStep}>
                  Next
                </button>
                <button
                  type="button"
                  onClick={() => {
                    props.setTrigger(false);
                  }}
                >
                  Close
                </button>
              </>
            )}
            {/* Living Details Section */}
            {currentStep === 2 && (
              <>
                <textarea
                  placeholder="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                ></textarea>
                <input
                  type="text"
                  placeholder="Zipcode"
                  name="zipcode"
                  value={formData.zipcode}
                  onChange={handleChange}
                  required
                />
                <select
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select District</option>
                  <option value="galle">Galle</option>
                  <option value="hambantota">Hambantota</option>
                  <option value="matara">Matara</option>
                  <option value="colombo">Colombo</option>
                </select>

                <button type="button" onClick={nextStep}>
                  Next
                </button>
                <button type="button" onClick={prevStep}>
                  Previous
                </button>
              </>
            )}
            {/* Profile Settings Section */}
            {currentStep === 3 && (
              <>
                <input
                  type="file"
                  name="profilePicture"
                  onChange={handleChange}
                  required
                />
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    style={{
                      maxWidth: "100px",
                      maxHeight: "100px",
                      marginTop: "10px",
                      marginBottom: "20px",
                    }}
                  />
                )}

                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <button type="submit">Register</button>

                <button type="button" onClick={prevStep}>
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => {
                    props.setTrigger(false);
                  }}
                >
                  Cancel
                </button>
              </>
            )}
          </form>
        </div>
        {/* Congratulatory Message */}
        {isRegistered && (
          <div className="congratulations-message">
            <p>Congratulations!</p>
            <p>You are now a CropXchange {formData.role} member.</p>
            {/* Add your attractive animation or design here */}
          </div>
        )}
      </div>
    </div>
  ) : null;
}

export default PopupRegisterPage;
