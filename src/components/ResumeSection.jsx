import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import resumePDF from "../assets/Yash_Resume.pdf";

function ResumeSection() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <section className="bg-gray-900 text-white py-16 px-4 sm:px-8" id="resume">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">My Resume</h2>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
            <div className="h-96 overflow-auto">
              <Viewer
                fileUrl={resumePDF}
                plugins={[defaultLayoutPluginInstance]}
              />
            </div>
          </Worker>
          <div className="text-center mt-4">
            <a
              href={resumePDF}
              download="Yash_Resume.pdf"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumeSection;
