"use client";

import { useState } from "react";
import ImageUpload from "./image-upload";

export function ImageUploadSingleDemo() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="flex flex-col items-center gap-4 w-full mx-auto p-4 border rounded-xl bg-muted/20">
      <ImageUpload
        className="w-full"
        multiple={false}
        onFileChange={setFile}
        maxSize={2 * 1024 * 1024} // 2MB
      />
      {file && (
        <p className="text-xs text-muted-foreground mt-2 text-center">
          Ready to upload:{" "}
          <span className="text-primary font-medium">{file.name}</span> (
          {(file.size / 1024).toFixed(1)} KB)
        </p>
      )}
    </div>
  );
}

export function ImageUploadMultipleDemo() {
  const [files, setFiles] = useState<Array<File | string>>([]);

  return (
    <div className="flex flex-col items-center gap-4 w-full mx-auto p-4 border rounded-xl bg-muted/20">
      <ImageUpload
        className="w-full"
        multiple={true}
        onFilesChange={(newFiles) => setFiles(newFiles)}
      />
      {files.length > 0 && (
        <p className="text-xs text-muted-foreground mt-2">
          <span className="text-primary font-medium">{files.length}</span> files
          selected
        </p>
      )}
    </div>
  );
}

export function ImageUploadInitialDemo() {
  return (
    <div className="flex flex-col items-center gap-4 w-full mx-auto p-4 border rounded-xl bg-muted/20">
      <p className="text-xs font-medium text-muted-foreground mb-2">
        Pre-filled with existing image
      </p>
      <ImageUpload
        className="w-full"
        multiple={false}
        initialImage="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop"
      />
    </div>
  );
}
