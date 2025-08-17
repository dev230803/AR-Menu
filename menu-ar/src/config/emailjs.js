// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const emailjsConfig = {
  serviceId: "service_0q5ft0q", // Your EmailJS service ID
  templateId: "template_xenqd65", // Your EmailJS template ID
  publicKey: "SQt_CQttH8yV6IxFB", // Your EmailJS public key
};

// Example of how to use:
// import { emailjsConfig } from '../config/emailjs';
//
// Then in your component:
// emailjs.sendForm(
//   emailjsConfig.serviceId,
//   emailjsConfig.templateId,
//   formRef.current,
//   emailjsConfig.publicKey
// );
