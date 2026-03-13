import React, { useState } from "react";
import "../styles/Documents.css";

function DocumentsPage() {
  const [file, setFile] = useState(null);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="documents-container">
      <h2>Document Chamber</h2>
      <input type="file" accept="application/pdf" onChange={handleFile} />
      {file && (
        <div className="preview">
          <p><strong>Uploaded File:</strong> {file.name}</p>
        </div>
      )}
    </div>
  );
}

export default DocumentsPage;