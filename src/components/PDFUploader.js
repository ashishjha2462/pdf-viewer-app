import React, { useState } from 'react';

const PDFUploader = ({ onFileSelect }) => {
    const [error, setError] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (!file) {
            setError('No file selected.');
            return;
        }

        if (file.type !== 'application/pdf') {
            setError('Please upload a valid PDF file');
            return;
        }

        setError('');
        onFileSelect(file);
    };

    return (
        <div className="pdf-uploader">
            <input type="file" accept="application/pdf" onChange={handleFileChange} />
            {error && <p className="error" style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default PDFUploader;
