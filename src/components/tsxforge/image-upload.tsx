import { forwardRef, useImperativeHandle, useState } from "react";
import { formatBytes, useFileUpload } from "@/hooks/use-file-upload";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AlertCircleIcon,
  Delete01Icon,
  Image01Icon,
  Upload01Icon,
} from "@hugeicons/core-free-icons";

interface ImageUploadProps {
  onFileChange?: (file: File | null) => void;
  onFilesChange?: (files: Array<File | string>) => void;
  maxSize?: number;
  accept?: string;
  disabled?: boolean;
  initialFile?: File | null;
  initialImage?: string;
  initialImages?: string[];
  multiple?: boolean;
}

export interface ImageUploadRef {
  clearFile: () => void;
  getFile: () => File | null;
}

const ImageUpload = forwardRef<ImageUploadRef, ImageUploadProps>(
  (
    {
      onFileChange,
      onFilesChange,
      maxSize = 10 * 1024 * 1024,
      accept = "image/svg+xml,image/png,image/jpeg,image/jpg,image/gif,image/webp",
      disabled = false,
      initialFile = null,
      initialImage = null,
      initialImages = [],
      multiple = false,
    },
    ref,
  ) => {
    const [initialImageCleared, setInitialImageCleared] = useState(false);

    const [
      { files, isDragging, errors },
      {
        handleDragEnter,
        handleDragLeave,
        handleDragOver,
        handleDrop,
        openFileDialog,
        removeFile,
        getInputProps,
      },
    ] = useFileUpload({
      maxSize,
      accept,
      multiple,
      initialFiles: initialFile
        ? [
            {
              name: initialFile.name,
              size: initialFile.size,
              type: initialFile.type,
              url: "",
              id: `${initialFile.name}-${Date.now()}`,
            },
          ]
        : initialImages?.length
          ? initialImages.map((url, index) => ({
              name: url.split("/").pop() || `image-${index}`,
              size: 0,
              type: "image/*",
              url,
              id: `${url}-${index}`,
            }))
          : [],
      onFilesChange: (newFiles) => {
        if (multiple) {
          const mixedFiles = newFiles.map((f) => {
            if (f.file instanceof File) return f.file;
            // If it's metadata, try to get the url (which we stored as preview too)
            return (f.file as any).url || f.preview || "";
          });
          onFilesChange?.(mixedFiles);

          const filesOnly = newFiles
            .map((f) => (f.file instanceof File ? f.file : null))
            .filter((f): f is File => !!f);
          if (filesOnly.length) onFileChange?.(filesOnly[0]);
        } else {
          const filesOnly = newFiles
            .map((f) => (f.file instanceof File ? f.file : null))
            .filter((f): f is File => !!f);
          const file = filesOnly.length ? filesOnly[0] : null;
          onFileChange?.(file);
        }
      },
    });

    useImperativeHandle(ref, () => ({
      clearFile: () => {
        if (files.length > 0) {
          removeFile(files[0].id);
        } else if (initialImage) {
          setInitialImageCleared(true);
          onFileChange?.(null);
        }
      },
      getFile: (): File | null => {
        if (!files.length) return null;
        const file = files[0].file;
        return file instanceof File ? file : null;
      },
    }));

    const file = files[0];
    const previewUrl = multiple
      ? null
      : file?.preview || (initialImageCleared ? null : initialImage) || null;
    const maxSizeMB = Math.round(maxSize / (1024 * 1024));

    return (
      <div className="flex flex-col gap-2">
        <div className="relative">
          {/* Drop area */}
          <div
            role="button"
            onClick={disabled ? undefined : openFileDialog}
            onDragEnter={disabled ? undefined : handleDragEnter}
            onDragLeave={disabled ? undefined : handleDragLeave}
            onDragOver={disabled ? undefined : handleDragOver}
            onDrop={disabled ? undefined : handleDrop}
            data-dragging={isDragging || undefined}
            className={`hover:bg-accent/50 data-[dragging=true]:bg-accent/50 relative flex min-h-46 flex-col items-center justify-center overflow-hidden border-2 border-dashed border-main-600 rounded-[15px]  p-4 transition-colors has-disabled:pointer-events-none has-disabled:opacity-50 ${
              disabled ? "pointer-events-none opacity-50" : ""
            }`}
          >
            <input
              {...getInputProps()}
              className="sr-only"
              aria-label="Upload image file"
              disabled={
                disabled ||
                (!multiple &&
                  (Boolean(file) ||
                    (Boolean(initialImage) && !initialImageCleared)))
              }
              accept={accept}
              multiple={multiple}
            />

            {previewUrl ? (
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <img
                  src={previewUrl}
                  alt={file?.file?.name || initialImage || "Uploaded image"}
                  className="mx-auto max-h-46 rounded object-contain"
                />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center px-4 py-3 text-center">
                <HugeiconsIcon
                  icon={Upload01Icon}
                  className="size-9 text-main-600"
                />
                <p className="my-1.5 text-sm font-medium">
                  {file || (initialImage && !initialImageCleared)
                    ? multiple
                      ? "Images selected"
                      : "Image selected"
                    : multiple
                      ? "Drop your images here"
                      : "Drop image here"}
                </p>
                <p className="text-muted-foreground text-xs">
                  {file || (initialImage && !initialImageCleared)
                    ? multiple
                      ? "Click to upload more"
                      : "Click to change"
                    : `File format info: ${maxSizeMB}`}
                </p>
              </div>
            )}
          </div>

          {/* Remove button overlay for preview */}
          {previewUrl && !disabled && (
            <div className="absolute top-4 right-4">
              <button
                type="button"
                className="focus-visible:border-ring focus-visible:ring-ring/50 z-50 flex size-8 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white transition-[color,box-shadow] outline-none hover:bg-black/80 focus-visible:ring-[3px]"
                onClick={() => {
                  if (file) {
                    removeFile(file.id);
                  } else if (initialImage) {
                    // Clear the initial image and allow new uploads
                    setInitialImageCleared(true);
                    onFileChange?.(null);
                  }
                }}
                aria-label={"Remove image"}
              >
                <HugeiconsIcon
                  icon={Delete01Icon}
                  className="size-4"
                  aria-hidden="true"
                />
              </button>
            </div>
          )}
        </div>

        {errors.length > 0 && (
          <div
            className="text-destructive flex items-center gap-1 text-xs"
            role="alert"
          >
            <HugeiconsIcon icon={AlertCircleIcon} className="size-3 shrink-0" />
            <span>{errors[0]}</span>
          </div>
        )}

        {multiple && files.length > 0 && (
          <div className="grid xs:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
            {files.map((f) => (
              <div key={f.id} className="relative rounded-lg border p-2">
                <img
                  src={f.preview || ""}
                  alt={f.file?.name || "Uploaded image"}
                  className="w-full h-24 rounded object-cover"
                />
                <div className="mt-2 flex items-center justify-between gap-2">
                  <p className="truncate text-[12px] font-medium">
                    {f.file instanceof File ? f.file.name : f.file?.name}
                  </p>
                  <span className="text-muted-foreground text-[11px]">
                    {formatBytes(
                      f.file instanceof File ? f.file.size : f.file?.size || 0,
                    )}
                  </span>
                </div>
                {!disabled && (
                  <Button
                    size="icon"
                    variant="destructive"
                    type="button"
                    className="absolute top-2 right-2 size-7"
                    onClick={() => removeFile(f.id)}
                    aria-label="Remove image"
                  >
                    <HugeiconsIcon
                      icon={Delete01Icon}
                      className="size-4"
                      aria-hidden="true"
                    />
                  </Button>
                )}
              </div>
            ))}
          </div>
        )}

        {!multiple && file && !previewUrl && (
          <div className="space-y-2">
            <div
              key={file.id}
              className="flex items-center justify-between gap-2 rounded-xl border px-4 py-2"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <HugeiconsIcon
                  icon={Image01Icon}
                  className="size-4 shrink-0 opacity-60"
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <p className="truncate text-[13px] font-medium">
                    {file.file instanceof File
                      ? file.file.name
                      : file.file.name}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {formatBytes(
                      file.file instanceof File
                        ? file.file.size
                        : file.file.size,
                    )}
                  </p>
                </div>
              </div>

              {!disabled && (
                <Button
                  size="icon"
                  variant="ghost"
                  type="button"
                  className="text-muted-foreground/80 hover:text-foreground -me-2 size-8 hover:bg-transparent"
                  onClick={() => removeFile(file.id)}
                  aria-label="Remove image"
                >
                  <HugeiconsIcon
                    icon={Delete01Icon}
                    className="size-4"
                    aria-hidden="true"
                  />
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    );
  },
);

ImageUpload.displayName = "ImageUpload";

export default ImageUpload;
export type { ImageUploadProps };
