import React, { FC, useState, useEffect } from 'react';
import QRCode from 'qrcode';

interface QRCodeProps {
  text: string;
}

const GenerateQRCode: FC<QRCodeProps> = ({ text }) => {
  const [qrCodeText, setQrCodeText] = useState('');

  useEffect(() => {
    QRCode.toDataURL(text).then((url) => setQrCodeText(url));
  }, []);

  return (
    <div>
      <img src={qrCodeText} alt="QR Code" />
    </div>
  );
};

export default GenerateQRCode;
