import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import * as pdfjsLib from 'pdfjs-dist';

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.js`;

const PDFViewer = ({ file }) => {
    const [pdf, setPdf] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const pdfViewerRef = useRef();
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const [totalNumberOfPages, setTotalNumberOfPages] = useState(0);

    const setRenderRange = useCallback((visiblePagesRange) => {
        return {
            startPage: Math.max(0, visiblePagesRange.startPage - 1),
            endPage: visiblePagesRange.endPage + 1,
        };
    }, []);

    useEffect(() => {
        const loadPdf = async () => {
            const reader = new FileReader();
            reader.readAsArrayBuffer(file);
            reader.onloadend = () => {
                const pdfData = new Uint8Array(reader.result);
                setPdf(pdfData);
                
                pdfjsLib.getDocument(pdfData).promise.then((pdfDocument) => {
                    setTotalNumberOfPages(pdfDocument.numPages);
                });
            };
        };

        if (file) {
            loadPdf();
        }
    }, [file]);

    return (
        <div className="pdf-viewer-container" style={{ position: 'relative', width: '100%', height: '100vh' }}>
            <div className="loading-bar" style={{ top: 0, width: `${((currentPage + 1) / totalNumberOfPages) * 100}%` }}></div>
            <div className="pdf-viewer" ref={pdfViewerRef} style={{ height: '80%', overflowY: 'auto' }}>
                {pdf && (
                    <Worker workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.js`}>
                        <Viewer
                            fileUrl={pdf}
                            enableSmoothScroll={false}
                            plugins={[defaultLayoutPluginInstance]}
                            scrollMode="vertical"
                            onPageChange={({ currentPage }) => setCurrentPage(currentPage)}
                            setRenderRange={setRenderRange}
                        />
                    </Worker>
                )}
            </div>
        </div>
    );
};

export default PDFViewer;
