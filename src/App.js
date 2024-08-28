import React, { useState } from 'react';
import PDFUploader from './components/PDFUploader';
import PDFViewer from './components/PDFViewer';
import './styles.css';

function App() {
    const [file, setFile] = useState(null);

    return (
        <div className="App">
            <h1>PDF Uploader and Viewer</h1>
            <PDFUploader onFileSelect={setFile} />
            {file && <PDFViewer file={file} />}
        </div>
    );
}

export default App;
