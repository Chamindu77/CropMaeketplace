import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser, faMobileAlt, faPhoneAlt, faCalendarAlt, faPlusCircle, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarRegistered from "../../NavbarRegistered/NavbarRegistered";
import FooterNew from "../../Footer/FooterNew";
import '../Seller/sellerProduct.css';

const EditDeliveryPost = () => {
  const modeloptions = ['Van', 'Small Truck', 'Stake bed Truck', 'Flatbed Truck', 'Chiller Truck'];
  const districts = ['Galle', 'Hambantota', 'Matara', 'Kalutara', 'Colombo', 'Gampaha', 'Kandy', 'Matale', 'Nuwara Eliya', 'Jaffna', 'Mannar', 'Vavuniya', 'Mullaitivu', 'Kilinochchi', 'Batticaloa', 'Ampara', 'Trincomalee', 'Kurunegala', 'Puttalam', 'Anuradhapura', 'Polonnaruwa', 'Badulla', 'Monaragala', 'Ratnapura', 'Kegalle'];

  const [selectedModel, setSelectedModel] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [price, setPrice] = useState('');
  const [landline, setLandline] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSelectChange = (event, setFunction) => {
    setFunction(event.target.value);
  };

  const handleClear = () => {
    setSelectedModel('');
    setSelectedDistrict('');
    setPrice('');
    setLandline('');
    setMobile('');
    setEmail('');
    setAddress('');
  };

  const handleSubmit = () => {
    // Implement your form submission logic here
    console.log('Form Submitted!');
    // You can also reset the form after submission if needed
    handleClear();
  };

  const handleUpdate = () => {
    console.log('Form Updated!');
    handleClear();
  };

  const handleDelete = () => {
    console.log('Form Deleted!');
    handleClear();
  };

  return (
    <div><NavbarRegistered />
    <form className="container mt-5">
      <div className="container mt-4"></div>
      <div className="border p-4 rounded">
      <div className="text-center mb-4">
        <h2>Edit Your Post</h2>
      </div>
      
      <div className="row align-items-center mb-3">
        <label htmlFor="modelDropdown" className="col-sm-3 col-form-label">Vehicle Model:</label>
        <div className="col-sm-4">
          <select id="modelDropdown" className="form-select" value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)}>
            <option value="">Select Model</option>
            {modeloptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <label htmlFor="districtDropdown" className="col-sm-3 col-form-label">District:</label>
        <div className="col-sm-4">
          <select id="districtDropdown" className="form-select" value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)}>
            <option value="">Select District</option>
            {districts.map((district, index) => (
              <option key={index} value={district}>{district}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-3 row align-items-center">
        <label htmlFor="price" className="col-sm-3 col-form-label">Price:</label>
        <div className="col-sm-4">
          <div className="input-group input-group-sm">
            <input type="number" id="price" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
            <span className="input-group-text bg-light">per km</span>
          </div>
        </div>
      </div>

      <div className="mb-3 row align-items-center">
        <label htmlFor="phone" className="col-sm-3 col-form-label">Phone No:</label>
        <div className="col-sm-4">
          <div className="input-group input-group-sm">
            <span className="input-group-text"><FontAwesomeIcon icon={faPhoneAlt} /></span>
            <input type="tel" id="landline" className="form-control" value={landline} onChange={(e) => setLandline(e.target.value)} placeholder="Landline" />
          </div>
        </div>
        <div className="col-sm-4">
          <div className="input-group input-group-sm">
            <span className="input-group-text"><FontAwesomeIcon icon={faMobileAlt} /></span>
            <input type="tel" id="mobile" className="form-control" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Mobile" />
          </div>
        </div>
      </div>

      <div className="mb-3 row align-items-center">
        <label htmlFor="email" className="col-sm-3 col-form-label">Email:</label>
        <div className="col-sm-6">
          <input type="email" id="email" className="form-control form-control-sm" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      </div>

      <div className="mb-3 row align-items-center">
        <label htmlFor="address" className="col-sm-3 col-form-label">Address:</label>
        <div className="col-sm-9">
          <input type="text" id="address" className="form-control form-control-sm" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
      </div>

      <div className="mb-3 row">
          <div className="col-sm-8 d-flex justify-content-end">
            <button type="button" className="btn btn-secondary me-3" onClick={handleClear}>
              <FontAwesomeIcon icon={faEraser} /> Clear
            </button>
            <button type="button" className="btn btn-success me-3" onClick={handleUpdate}>
              <FontAwesomeIcon icon={faEdit} /> Update
            </button>
            <button type="button" className="btn btn-danger" onClick={handleDelete}>
              <FontAwesomeIcon icon={faTrashAlt} /> Delete
            </button>
          </div>
        </div>
        </div>
    </form>
    <FooterNew/>
    </div> 
  );
};

export default EditDeliveryPost;
