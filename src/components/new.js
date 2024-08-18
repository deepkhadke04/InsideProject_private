import React, { useState } from 'react';
import { useReducer ,useEffect,useRef} from 'react';
import pic from '../img/DonorIMG2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
/*
const ReceiverRegistration = () => {
  const initialState = {
    receiverName: { value: '', error: '', valid: false, touched: false },
    contactNumber: { value: '', error: '', valid: false, touched: false },
    location: { value: '', error: '', valid: false, touched: false },
    bloodType: { value: '', error: '', valid: false, touched: false },
    gender: { value: '', error: '', valid: false, touched: false },
    payment: { value: '', error: '', valid: false, touched: false },
    adharNumber: { value: '', error: '', valid: false, touched: false },
    age: { value: '', error: '', valid: false, touched: false },
    dob: { value: '', error: '', valid: false, touched: false },
    email: { value: '', error: '', valid: false, touched: false },
    city: { value: '', error: '', valid: false, touched: false },
    formValid: false
  };
  const [receiver, dispatch] = useReducer(reducer, initialState);
  const handleChange = (key, value) => {
    const { valid, error } = checkValid(key, value);

    let formValid = true;
    for (let k in receiver) {
      if (k !== 'formValid' && !receiver[k].valid) {
        formValid = false;
        break;
      }
    }

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

const reducer=(state,action) => {
  switch(action.type){
    case 'update':
      const{key,value,valid,error,touched,formvalid}=action.init
      return{...state,[key]:{value,error,valid,touched},formvalid}
      break;
      default:
        return state;
  }
}


  
    const[flag,setflag]=useState(false);
    const checkvalid = (key,value) => {
      let valid=true;
      let error = "";
      switch (key) {
        case 'receiverName':
          var pattern =/^[A-Z]{1}[a-z]{1,50}$ /
          if (!pattern.test(value)) {
            valid = false;
            error = 'Name should be alphabets only  ';

          }
          break;
        case 'contactNumber':
          const Pattern = /^[0-9]{10}$/;
          if (!Pattern.test(value)) {
            valid = false;
            error = 'Invalid contact number';
          }
          break;
        case 'location':

          var pattern =/^[A-Za-z0-9\s,.-]{10,100}$ /
          if (!pattern.test(value)) {
            valid = false;
            error = 'Invalid Address';

          }
          break;

          //dropdown from database
        /* case 'bloodType':
         var pattern = /^[A-Za-z0-/]+$ /
          if (value.trim() === '') {
            valid = false;
            error = 'Blood type is required';
          }
          break;*/
        /* case 'gender':
          if (value.trim() === '') {
            valid = false;
            error = 'Gender is required';
          }
          break;
          
          case 'adharNumber':
           var pattern =/^\d{11}$/
          if (!pattern.test(value)) {
            valid = false;
          error = 'Invalid Adhar Number ';

          }
          break;

          case 'dob':
            var pattern =/^\d{11}$/
           if (!pattern.test(value)) {
             valid = false;
           error = 'Invalid dob ';
 
           }
           break;

           case 'email':
            var pattern =/^[\w#\.-]{2,9}@[\w]{3,9}\.[a-z]{2,3}$/
           if (!pattern.test(value)) {
             valid = false;
           error = 'Invalid email ';
 
           }
           break;
        }
        return { valid:valid, error:error };
  }
 // onBlur={(e)=>{handlechange("contactNumber",e.target.value)}}       required />

const handlechange=(key,value)=>{
  //1. check valid status and error msg
  //write separate function for it
  const{valid,error}=checkvalid(key,value);

  //2. check form validity
  let formvalid=true;
  for(let k in receiver){
      if(receiver[k].valid==false){
          break;
      }
  }

  //3.call to dispatch
  dispatch({
      type:'update',init:{
          key,value,error,valid,touched:true,formvalid
      }
  })  
}*/
const ReceiverRegistration = () => {
  const initialState = {
    receiverName: { value: '', error: '', valid: false, touched: false },
    contactNumber: { value: '', error: '', valid: false, touched: false },
    location: { value: '', error: '', valid: false, touched: false },
    bloodType: { value: '', error: '', valid: false, touched: false },
    gender: { value: '', error: '', valid: false, touched: false },
    adharNumber: { value: '', error: '', valid: false, touched: false },
    age: { value: '', error: '', valid: false, touched: false },
    dob: { value: '', error: '', valid: false, touched: false },
    email: { value: '', error: '', valid: false, touched: false },
    city: { value: '', error: '', valid: false, touched: false },
    formValid: false
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'update':
        const { key, value, valid, error, touched, formValid } = action.init;
        return { ...state, [key]: { value, error, valid, touched }, formValid };
      default:
        return state;
    }
  };
  const [receiver, dispatch] = useReducer(reducer, initialState);
  const [cities, setCities] = useState([]);
  const refs = useRef({
    receiverName: null,
    contactNumber: null,
    location: null,
    bloodType: null,
    gender: null,
    adharNumber: null,
    age: null,
    dob: null,
    email: null,
    city: null,
  });
  

  useEffect(() => {
    // Fetch cities from the backend
    const fetchCities = async () => {
      try {
        const response = await fetch('/api/cities'); // Replace with your actual API endpoint
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setCities(data.cities); // Adjust according to your API response structure
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };

    fetchCities();
  }, []);

  const checkValid = (key, value) => {
    let valid = true;
    let error = '';

    switch (key) {
      case 'receiverName':
        const namePattern = /^[A-Z][a-z]{1,50}$/;
        if (!namePattern.test(value)) {
          valid = false;
          error = 'Name should start with an uppercase letter and only contain alphabets.';
        }
        break;
      case 'contactNumber':
        const contactPattern = /^[0-9]{10}$/;
        if (!contactPattern.test(value)) {
          valid = false;
          error = 'Invalid contact number. Must be 10 digits.';
        }
        break;
      case 'location':
        const locationPattern = /^[A-Za-z0-9\s,.-]{10,100}$/;
        if (!locationPattern.test(value)) {
          valid = false;
          error = 'Invalid location. It should be between 10 and 100 characters.';
        }
        break;
      case 'adharNumber':
        const adharPattern = /^\d{12}$/;
        if (!adharPattern.test(value)) {
          valid = false;
          error = 'Invalid Aadhar number. Must be 12 digits.';
        }
        break;
      case 'dob':
        if (value === '') {
          valid = false;
          error = 'Date of Birth is required.';
        }
        break;
      case 'email':
        const emailPattern = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(value)) {
          valid = false;
          error = 'Invalid email format.';
        }
        break;
      case 'gender':
        if (!value) {
          valid = false;
          error = 'Gender is required.';
        }
        break;
      case 'city':
        if (!value) {
          valid = false;
          error = 'City is required.';
        }
        break;
      default:
        break;
    }

    return { valid, error };
  };

  const handleChange = (key, value) => {
    const { valid, error } = checkValid(key, value);

    // Update form validity
    let formValid = true;
    for (let k in receiver) {
      if (k !== 'formValid' && !receiver[k].valid) {
        formValid = false;
        break;
      }
    }

    dispatch({
      type: 'update',
      init: {
        key,
        value,
        error,
        valid,
        touched: true,
        formValid
      }
    });
  };
/*
  const handleSubmit = (e) => {
    e.preventDefault();
    if (receiver.formValid) {
      console.log('Form Data:', receiver);
    } else {
      console.log('Form is not valid');
    }
  };*/
  const focusFirstInvalidField = () => {
    for (let key in receiver) {
      if (key !== 'formValid' && !receiver[key].valid) {
        refs.current[key]?.focus();
        break;
      }
    }
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (receiver.formValid) {
      try {
        const response = await fetch('/api/register-receiver', { // Replace with your actual API endpoint
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            receiverName: receiver.receiverName.value,
            contactNumber: receiver.contactNumber.value,
            location: receiver.location.value,
            bloodType: receiver.bloodType.value,
            gender: receiver.gender.value,
            adharNumber: receiver.adharNumber.value,
            age: receiver.age.value,
            dob: receiver.dob.value,
            email: receiver.email.value,
            city: receiver.city.value,
          })
        });

        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        console.log('Registration successful:', result);

        // Clear form or redirect user, etc.
      } catch (error) {
        console.error('Error during registration:', error);
      }
    } else {
      focusFirstInvalidField();
    }
  };

  return (
    <div
      className="receiver-registration"
      style={{
       // backgroundImage: url(${pic}),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
        color: '#000',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 1,
        }}
      ></div>

      <div
        className="form-container container p-4 rounded shadow-lg"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          width: '100%',
          maxWidth: '600px',
          zIndex: 2,
          position: 'relative',
        }}
      >
        <h2
          className="mb-4 mt-5 text-center"
          style={{
            zIndex: 2,
            color: '#000',
          }}
        >
          Receiver Registration
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="receiverName" className="form-label">
              Receiver Name:
            </label>
            <input
              type="text"
              id="receiverName"
              name="receiverName"
              className="form-control"
              value={receiver.receiverName.value}
              onChange={(e) => handleChange('receiverName', e.target.value)}
              ref={(el) => (refs.current.receiverName = el)}
              required
            />
            {receiver.receiverName.touched && !receiver.receiverName.valid && (
              <div className="text-danger">{receiver.receiverName.error}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="contactNumber" className="form-label">
              Contact Number:
            </label>
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              className="form-control"
              value={receiver.contactNumber.value}
              onChange={(e) => handleChange('contactNumber', e.target.value)}
              ref={(el) => (refs.current.contactNumber = el)}
              required
            />
            {receiver.contactNumber.touched && !receiver.contactNumber.valid && (
              <div className="text-danger">{receiver.contactNumber.error}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="location" className="form-label">
              Location:
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="form-control"
              value={receiver.location.value}
              onChange={(e) => handleChange('location', e.target.value)}
              ref={(el) => (refs.current.location = el)}
              required
            />
            {receiver.location.touched && !receiver.location.valid && (
              <div className="text-danger">{receiver.location.error}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="bloodType" className="form-label">
              Blood Type:
            </label>
            <input
              type="text"
              id="bloodType"
              name="bloodType"
              className="form-control"
              value={receiver.bloodType.value}
              onChange={(e) => handleChange('bloodType', e.target.value)}
              
              required
            />
            {receiver.bloodType.touched && !receiver.bloodType.valid && (
              <div className="text-danger">{receiver.bloodType.error}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Gender:</label>
            <div className="form-check">
              <input
                type="radio"
                id="genderFemale"
                name="gender"
                value="female"
                className="form-check-input"
                onChange={(e) => handleChange('gender', e.target.value)}
                required
              />
              <label htmlFor="genderFemale" className="form-check-label">
                Female
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                id="genderMale"
                name="gender"
                value="male"
                className="form-check-input"
                onChange={(e) => handleChange('gender', e.target.value)}
                required
              />
              <label htmlFor="genderMale" className="form-check-label">
                Male
              </label>
            </div>
            {receiver.gender.touched && !receiver.gender.valid && (
              <div className="text-danger">{receiver.gender.error}</div>
              
            )}
             <label htmlFor="genderOther" className="form-check-label">
                Other
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                id="genderOthe"
                name="gender"
                value="other"
                className="form-check-input"
                onChange={(e) => handleChange('gender', e.target.value)}
                required
              />
          </div>

          <div className="mb-3">
            <label htmlFor="adharNumber" className="form-label">
              Aadhar Number:
            </label>
            <input
              type="text"
              id="adharNumber"
              name="adharNumber"
              className="form-control"
              value={receiver.adharNumber.value}
              onChange={(e) => handleChange('adharNumber', e.target.value)}
              required
            />
            {receiver.adharNumber.touched && !receiver.adharNumber.valid && (
              <div className="text-danger">{receiver.adharNumber.error}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="dob" className="form-label">
              Date of Birth:
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="form-control"
              value={receiver.dob.value}
              onChange={(e) => handleChange('dob', e.target.value)}
              required
            />
            {receiver.dob.touched && !receiver.dob.valid && (
              <div className="text-danger">{receiver.dob.error}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age:
            </label>
            <input
              type="number"
              id="age"
              name="age"
              className="form-control"
              value={receiver.age.value}
              onChange={(e) => handleChange('age', e.target.value)}
              required
            />
            {receiver.age.touched && !receiver.age.valid && (
              <div className="text-danger">{receiver.age.error}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={receiver.email.value}
              onChange={(e) => handleChange('email', e.target.value)}
              required
            />
            {receiver.email.touched && !receiver.email.valid && (
              <div className="text-danger">{receiver.email.error}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="city" className="form-label">
              City:
            </label>
            <select
              id="city"
              name="city"
              className="form-select"
              value={receiver.city.value}
              onChange={(e) => handleChange('city', e.target.value)}
              required
            >
              <option value="">Select a city</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
            {receiver.city.touched && !receiver.city.valid && (
              <div className="text-danger">{receiver.city.error}</div>
            )}
          </div>
          <button type="submit" className="btn btn-primary w-100"  onClick={handleSubmit}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReceiverRegistration;