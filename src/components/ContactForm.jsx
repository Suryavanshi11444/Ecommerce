import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    services: [],
  });

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [errors, setErrors] = useState({});

  const services = [
    "Prescription Glasses",
    "Sunglasses",
    "Blue Light Glasses",
    "Kids Eyewear",
    "Contact Lenses",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleCheckboxChange = (service) => (e) => {
    const { checked } = e.target;
    setFormData({
      ...formData,
      services: checked
        ? [...formData.services, service]
        : formData.services.filter((item) => item !== service),
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await axios.post(
        "https://theuniquesbackend.vercel.app/api/contact",
        formData
      );
      if (response.data.success) {
        setAlert({
          open: true,
          message: "Thank you! Your message has been sent successfully.",
          severity: "success",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          services: [],
        });
      } else {
        throw new Error(response.data.message || "Submission failed.");
      }
    } catch (error) {
      setAlert({
        open: true,
        message:
          error.response?.data?.message || "Something went wrong. Please try again.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="Contact" className="grid place-items-center min-h-screen bg-gray-50 dark:bg-[#0b1727] p-6">
      <div className="lg:p-8 md:p-8 p-3 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold text-black dark:text-white mb-2">
            Get in Touch with Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Got any questions about our eyewear collection or your order?
            We’re here to assist you.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <TextField
                label="First name"
                fullWidth
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                error={!!errors.firstName}
                helperText={errors.firstName}
                required
              />
              <TextField
                label="Last name"
                fullWidth
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                error={!!errors.lastName}
                helperText={errors.lastName}
                required
              />
            </div>
            <div className="space-y-4">
              <TextField
                label="Email"
                fullWidth
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                required
              />
              <TextField
                label="Phone"
                fullWidth
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <TextField
                label="Message"
                fullWidth
                multiline
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
              {services.map((service) => (
                <FormControlLabel
                  key={service}
                  control={
                    <Checkbox
                      checked={formData.services.includes(service)}
                      onChange={handleCheckboxChange(service)}
                    />
                  }
                  label={service}
                />
              ))}
            </div>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              className="mt-4"
              disabled={loading}
              style={{
                backgroundColor: loading ? "#ddd" : "#d3d3d3",
                color: "#333",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
              }}
              sx={{
                '&:hover': {
                  backgroundColor: "#b0b0b0",
                  boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                <b>Send Message</b>
              )}
            </Button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
            <span className="font-bold">ZENNI</span>
          </h2>
          <h3 className="text-2xl font-semibold mb-2 text-black dark:text-white">
            Connect with Us
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Reach out on your favorite platform.
          </p>
          <div className="space-y-3">
            <a
              href="https://www.instagram.com/theuniquesofficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-2 text-gray-700 hover:underline">
                <InstagramIcon />
                <span>Instagram</span>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/company/theuniquesofflicial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-2 text-gray-700 hover:underline">
                <LinkedInIcon />
                <span>LinkedIn</span>
              </div>
            </a>
            <a
              href="https://chat.whatsapp.com/HYOloogGXKcIkR83DnOjFj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-2 text-gray-700 hover:underline">
                <WhatsAppIcon />
                <span>WhatsApp</span>
              </div>
            </a>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-2 text-black dark:text-white">
            Our Store Location
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            SVIET, Banur, Punjab-140601
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.82409273242!2d76.70145491128464!3d30.55434119412627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc3b350bbf2e7%3A0xece92a925f664640!2sThe%20uniques!5e1!3m2!1sen!2sin!4v1740583636506!5m2!1sen!2sin"
            width="100%"
            height="220"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Eyeglass Store Location"
          ></iframe>
        </div>
      </div>

      <Snackbar
        open={alert.open}
        autoHideDuration={6000}
        onClose={() => setAlert({ ...alert, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setAlert({ ...alert, open: false })}
          severity={alert.severity}
          sx={{ width: "100%" }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ContactForm;