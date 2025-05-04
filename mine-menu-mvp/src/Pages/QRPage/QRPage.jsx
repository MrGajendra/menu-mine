import { Link } from "react-router-dom";
import QRCode from "react-qr-code";

const QRPage = () => {
  const menuUrl = window.location.origin + "/menu";
  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl mb-4">Scan to View Menu</h2>
      <QRCode value={menuUrl} size={200} />
      <p className="mt-4">Share this QR code with others.</p>
      <Link to="/menu" className="text-blue-500">Back to Menu</Link>
    </div>
  );
};

export default QRPage;
