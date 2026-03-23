"use client";

import { useState } from "react";
import DocumentFileUpload from "./document-upload";

export function DocumentUploadBasicDemo() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="flex flex-col items-center gap-4 w-full mx-auto p-4 border rounded-xl bg-muted/20">
      <DocumentFileUpload
        onFileChange={setFile}
        maxSize={5 * 1024 * 1024} // 5MB
        accept=".pdf,.doc,.docx,.jpg,.png"
        className="w-full"
      />
      {file && (
        <p className="text-xs text-muted-foreground mt-2 text-center">
          Selected:{" "}
          <span className="text-primary font-medium">{file.name}</span> (
          {(file.size / 1024).toFixed(1)} KB)
        </p>
      )}
    </div>
  );
}

export function DocumentUploadInitialDemo() {
  return (
    <div className="flex flex-col items-center gap-4 w-full mx-auto p-4 border rounded-xl bg-muted/20">
      <p className="text-xs font-medium text-muted-foreground mb-2">
        Existing document preview
      </p>
      <DocumentFileUpload
        onFileChange={() => {}}
        initialUrl="https://example.com/sample-document.pdf"
        className="w-full"
      />
      <p className="text-[10px] text-muted-foreground mt-1 italic">
        * Note: `initialUrl` displays the filename from the URL.
      </p>
    </div>
  );
}
