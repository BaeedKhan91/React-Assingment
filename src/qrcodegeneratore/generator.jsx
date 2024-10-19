import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import './generator.css'; // Import your CSS file

function Generator() {
    const [inputValue, setInputValue] = useState('');
    const [qrCode, setQrCode] = useState('');

    const handleGenerate = () => {
        setQrCode(inputValue);
        setInputValue(''); // Clear the input after generating
    };

    return (
        <div className="container">
            <h1>QR Code Generator</h1>
            <div className="qr-code">
            <QRCode value={qrCode} />2 {/* Only render QR code if qrCode is not empty */}
            </div>
            <input
                type="text"
                className="input-field"
                placeholder="Enter Text to generate QR code"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="generate-button" onClick={handleGenerate}>
                Click to Generate
            </button>
        </div>
    );
}

export default Generator;
