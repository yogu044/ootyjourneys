// /mail/PopupDetails.js
import emailjs from "@emailjs/browser";
import { use } from "react";

const ContactDetails = async (submitData) => {
  const navigate=useNavigate();
  try {
    const response = await emailjs.send(
      "service_wkggwzi", 
      "template_ijuajtk", 
      {
        name: submitData.name,
        email: submitData.email,
        subject: submitData.subject,
        message: submitData.message,
      },
      "4YIZTVXa4OPjLO6by" 
    );
    alert(" Message sent successfully! We'll contact you soon.");

    console.log(" Email sent successfully:", response.status, response.text);

    return { data: { message: "Booking details sent successfully!" } };
    navigate("/home");
  } catch (error) {
    console.error(" Email sending failed:", error);
    throw { response: { data: { message: "Email sending failed!" } } };
  }
};

export default ContactDetails;
