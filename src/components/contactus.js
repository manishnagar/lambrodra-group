import React, { useState } from 'react';
import EmailImg from '../assets/images/email.png';
import PhoneImg from '../assets/images/phone.png';
import ContactUsImg from '../assets/images/contact-us.png';
import { ToastContainer, toast } from 'react-toastify';



function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""

  });

  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (!/^[A-Za-z]+$/.test(formData.firstName)) {
      newErrors.firstName = "Only alphabets allowed";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (!/^[A-Za-z]+$/.test(formData.lastName)) {
      newErrors.lastName = "Only alphabets allowed";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

if (!formData.phone.trim()) {
  newErrors.phone = "Phone number is required";
} else if (!/^\d{10}$/.test(formData.phone)) {
  newErrors.phone = "Phone must be exactly 10 digits";
}
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    validate(); // live validation
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
        toast.success("Message successfully sent!", {
      position: "top-right",
      autoClose: 3000,
      theme: "colored",
    });

     setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
    setErrors({});
    setIsValid(false);
    }
  };

  return (
    <div className="min-h-screen w-full">
      <div className="flex items-center justify-center p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">

          {/* Left Side - Contact Support */}
          <div className="rounded-lg p-4">
            <h2 className="text-xl font-bold text-orange-600 mb-4">Contact Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div className="flex items-center space-x-3">
                <img src={PhoneImg} alt="Phone Icon" className="w-8 h-auto" />
                <p className="text-gray-700">
                  <span className="font-normal text-sm">Customer Care No:</span><br />
                  <a href="tel:+918813968320" className="text-xs text-blue-600 hover:underline">
                    +233 55 11 222 33
                  </a>
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <img src={EmailImg} alt="Email Icon" className="w-8 h-auto" />
                <p className="text-gray-700">
                  <span className="font-normal text-sm">Support Email:</span>{" "}
                  <a href="mailto:electricindiago@gmail.com" className="text-xs text-blue-600 hover:underline">
                    info@lambodragroup.com
                  </a>
                </p>
              </div>
            </div>
            <div className="mt-6">
              <img src={ContactUsImg} alt="Contact us" className="w-full h-96" />
            </div>
          </div>

          {/* Right Side - Enquiry Form */}
          <div className="shadow-lg rounded-lg p-4 border-orange-300 border-2">
            <h2 className="text-xl font-bold text-orange-600 mb-1">Enquiry Form</h2>
            <p className="text-gray-600 mb-4 text-xs">Fill this form and send it to us.</p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name *"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-orange-400 text-sm"
                  />
                  {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name *"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-orange-400 text-sm"
                  />
                  {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleChange}
                    className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-orange-400 text-sm"
                  />
                  {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone *"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={validate}  
                    className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-orange-400 text-sm"
                  />
                  {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
                </div>
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-orange-400 text-sm"
              />

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message *"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-orange-400 text-sm"
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
              </div>

              {/* Button changes color based on validation */}
              <button
                type="submit"
                disabled={!isValid}
                className={`text-sm font-semibold px-6 py-2 rounded-full transition 
                  ${isValid ? "bg-orange-600 text-white hover:bg-orange-700" : "bg-gray-400 text-gray-200 cursor-not-allowed"}`}
              >
                Submit
              </button>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
