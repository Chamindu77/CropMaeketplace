import React, { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser, faMobileAlt, faPhoneAlt, faCalendarAlt, faPlusCircle, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sellerProduct.css';
import { useLocation } from "react-router-dom";
import DatePicker from 'react-datepicker'; 
import 'react-datepicker/dist/react-datepicker.css';
 

const EditSellerProduct = () => {
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [quantityType, setQuantityType] = useState('kg');
  const [quantity, setQuantity] = useState('');
  const [company, setCompany] = useState('');
  const [landline, setLandline] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [expireDate, setExpireDate] = useState(null);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [price, setPrice] = useState('');

  const districts = [
    'Galle', 'Hambantota', 'Matara', 'Kalutara', 'Colombo', 'Gampaha', 'Kandy', 'Matale', 'Nuwara Eliya',
    'Jaffna', 'Mannar', 'Vavuniya', 'Mullaitivu', 'Kilinochchi', 'Batticaloa', 'Ampara', 'Trincomalee',
    'Kurunegala', 'Puttalam', 'Anuradhapura', 'Polonnaruwa', 'Badulla', 'Monaragala', 'Ratnapura', 'Kegalle'
  ];


  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [formData, setFormData] = useState({
    productImage: queryParams.get("image") || "",
    category: queryParams.get("item") || "",
    item: queryParams.get("category") || "",
    quantity: "",
    price: "",
    district: "",
    company: "",
    mobile: "",
    land: "",
    email: "",
    address: "",
    expireDate: "",
  });

  const [items, setItems] = useState([]);
  useEffect(() => {
    // Fetch items based on selected category
    fetchItems(formData.category);
  }, [formData.category]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    // Find the selected item from items
    const selectedItem = items.find((item) => item.id === value);
    if (selectedItem) {
      // Update form data with selected item details
      setFormData((prevFormData) => ({
        ...prevFormData,
        item: selectedItem.name,
        category: selectedItem.category,
        productImage: selectedItem.image, // Assuming you have an image field in your item object
      }));
    }
  };
  const fetchItems = (category) => {
    // Fetch items based on category and update the items state
    fetch('http://localhost:8070/product?category=${category}')
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the response body as JSON
      })
      .then((data) => {
        setItems(data); // Update the items state with the parsed data
      })
      .catch((error) => console.error("Error fetching items:", error));
  };


  const handleClear = () => {
    setSelectedDistrict('');
    setQuantity('');
    setCompany('');
    setLandline('');
    setMobile('');
    setEmail('');
    setAddress('');
    setExpireDate(null);
    setPrice('');
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
    <div>
      <div className="container mt-4"></div>
      <div className="container mt-5">
      <div className="border p-4 rounded">
        <div className="text-center mb-4">
          <h2>Edit Your Order Post</h2>
            </div>
            
            <div className="mb-3 row justify_content-center">
      <div className="col-sm-12 text-center">
            {/* Space for displaying picture */}
            <img className='image' src={formData.productImage} alt="Product" />
      </div>
      </div>
          <form>
            <div className="mb-3 row align-items-center">
              <label htmlFor="quantity" className="col-sm-3 col-form-label">Quantity:</label>
              <div className="col-sm-4">
                <input type="number" id="quantity" className="form-control form-control-sm" min="0" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
              </div>
              <div className="col-sm-4 d-flex align-items-center">
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="quantityType" id="kg" value="kg" checked={quantityType === 'kg'} onChange={() => setQuantityType('kg')} />
                  <label className="form-check-label" htmlFor="kg">kg</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="quantityType" id="count" value="count" checked={quantityType === 'count'} onChange={() => setQuantityType('count')} />
                  <label className="form-check-label" htmlFor="count">count</label>
                </div>
              </div>
            </div>
            <div className="mb-3 row align-items-center">
              <label htmlFor="price" className="col-sm-3 col-form-label">Price:</label>
              <div className="col-sm-4">
                <div className="input-group input-group-sm">
                  <input type="number" id="price" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
                  <span className="input-group-text bg-light">per kg</span>
                </div>
              </div>
            </div>
            <div className="mb-3 row align-items-center">
              <label htmlFor="district" className="col-sm-3 col-form-label">District:</label>
              <div className="col-sm-4">
                <select id="district" className="form-select" value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)}>
                  <option value="">Select District</option>
                  {districts.map((district, index) => (
                    <option key={index} value={district}>{district}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mb-3 row align-items-center">
              <label htmlFor="company" className="col-sm-3 col-form-label">Company Name:</label>
              <div className="col-sm-6">
                <input type="text" id="company" className="form-control form-control-sm" value={company} onChange={(e) => setCompany(e.target.value)} />
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
            <div className="mb-3 row align-items-center">
          <label htmlFor="expireDate" className="col-sm-3 col-form-label">Expire Date:</label>
          <div className="col-sm-8">
            <div className="input-group input-group-sm">
              <DatePicker
                selected={expireDate}
                onChange={(date) => setExpireDate(date)}
                dateFormat="yyyy-MM-dd"
                showYearDropdown
                showMonthDropdown
                dropdownMode="select"
                open={calendarOpen}
                onClickOutside={() => setCalendarOpen(false)}
                className="form-control"
              />
              <span className="input-group-text" onClick={() => setCalendarOpen(!calendarOpen)}>
                <FontAwesomeIcon icon={faCalendarAlt} />
              </span>
            </div>
          </div>
        </div>
            <div className="mb-3 row">
              <div className="col-sm-12 d-flex justify-content-end">
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditSellerProduct;
