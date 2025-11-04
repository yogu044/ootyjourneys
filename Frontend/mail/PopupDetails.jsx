// /mail/PopupDetails.js
import emailjs from "@emailjs/browser";

const PopupDetails = async (submitData) => {
  try {
    const response = await emailjs.send(
      "service_wkggwzi", 
      "template_jgzg6du", 
      {
        name: submitData.name,
        email: submitData.email,
        phone: submitData.phone,
        checkin: submitData.checkin,
        checkout: submitData.checkout,
        adult: submitData.adult,
        child: submitData.child,
      },
      "4YIZTVXa4OPjLO6by" 
    );

    console.log(" Email sent successfully:", response.status, response.text);
    return { data: { message: "Booking details sent successfully!" } };
  } catch (error) {
    console.error(" Email sending failed:", error);
    throw { response: { data: { message: "Email sending failed!" } } };
  }
};

export default PopupDetails;
