// /mail/PopupDetails.js

const ContactDetails = async (submitData) => {
  try {
    const phoneNumber = "919894599399"; 

    const message = `
Hello Ooty Journeys 

Name: ${submitData.name}
Email: ${submitData.email}
Subject: ${submitData.subject}

Message:
${submitData.message}
    `;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

    return { status: 200, message: "Redirected to WhatsApp" };

  } catch (error) {
    console.error("WhatsApp redirect failed:", error);
    throw error;
  }
};

export default ContactDetails;
