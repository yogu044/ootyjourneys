// /mail/PopupDetails.js

const PopupDetails = async (submitData) => {
  try {
    const phoneNumber = "919944194878";

    const message = `
Hello Ooty Tours 

New Booking Request

Name: ${submitData.name}
Email: ${submitData.email}
Phone: ${submitData.phone}

Check-in: ${submitData.checkin}
Check-out: ${submitData.checkout}

Adults: ${submitData.adult}
Children: ${submitData.child}

Please confirm availability.
    `;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

    return { status: 200, message: "Redirected to WhatsApp successfully" };

  } catch (error) {
    console.error("WhatsApp redirect failed:", error);
    throw { message: "WhatsApp redirect failed!" };
  }
};

export default PopupDetails;
