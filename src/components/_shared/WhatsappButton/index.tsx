import { FaWhatsapp } from "react-icons/fa";

import "./styles.css";

export default function WhatsappButton() {
  return (
    <a
      className="whatsapp-button"
      href="https://wa.me/+5561985680433"
      target="_blank"
    >
      <FaWhatsapp size={40} />
    </a>
  );
}
