"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Label as ShadLabel } from "@/components/ui/label";
import { HugeiconsIcon } from "@hugeicons/react";
import { EyeIcon, EyeOff } from "@hugeicons/core-free-icons";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  type?: string;
  label?: string;
  showContentDivider?: boolean;
  animatedLabel?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  description?: React.ReactNode;
  required?: boolean;
  isLoading?: boolean;
  showPasswordToggle?: boolean;
  classNames?: {
    startContent?: string;
    endContent?: string;
    description?: string;
    label?: string;
    wrapper?: string;
    main?: string;
  };
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      startContent,
      label,
      endContent,
      isLoading,
      description,
      required,
      animatedLabel = false,
      showContentDivider = false,
      showPasswordToggle = true,
      classNames,
      ...props
    },
    ref,
  ) => {
    const isPassword = type === "password";
    const [showPassword, setShowPassword] = React.useState(false);

    const actualType = isPassword && showPassword ? "text" : type;

    const togglePassword = () => setShowPassword((p) => !p);

    return (
      <div className={cn("text-start w-full", classNames?.main)}>
        {label && !animatedLabel && (
          <ShadLabel
            className={cn(
              "text-base text-muted-foreground",
              classNames?.label,
              props?.["aria-invalid"] && "text-destructive",
            )}
          >
            {label} {required && <span className="text-red-600">*</span>}
          </ShadLabel>
        )}

        <div
          className={cn(
            "flex items-center relative border border-border bg-background rounded-full px-2",
            classNames?.wrapper,
            label ? "mt-3" : "",
            props?.["aria-invalid"] && "border-destructive",
          )}
        >
          {startContent && (
            <div
              className={cn("flex items-center ms-3", classNames?.startContent)}
            >
              {startContent}
              {showContentDivider && <div className="h-7 w-px bg-muted ms-3" />}
            </div>
          )}

          <input
            type={actualType}
            ref={ref}
            id="animated"
            data-slot="input"
            className={cn(
              "file:text-foreground placeholder:text-muted-foreground/50 flex h-13 w-full min-w-0 rounded-full bg-transparent px-2.5 py-1 text-base outline-none",
              "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
              className,
              animatedLabel &&
                "peer placeholder:text-transparent focus:placeholder:text-muted-foreground/50 pt-3.5!",
            )}
            {...props}
          />
          {label && animatedLabel && (
            <ShadLabel
              htmlFor="animated"
              className={cn(
                props?.["aria-invalid"]
                  ? "text-destructive animate-pulse"
                  : "text-muted-foreground",
                "text-xs absolute start-3 top-3 transition-all peer-placeholder-shown:top-[35%] peer-focus:top-[5%]",
                classNames?.label,
                (startContent || endContent) && "start-15",
                "peer-not-placeholder-shown:top-0.5 peer-not-placeholder-shown:text-sm",
              )}
            >
              {label} {required && <span className="text-red-600">*</span>}
            </ShadLabel>
          )}
          {/* PASSWORD TOGGLE */}
          {isPassword && showPasswordToggle && !isLoading && (
            <button
              type="button"
              onClick={togglePassword}
              className="me-2 text-muted-foreground cursor-pointer"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              <HugeiconsIcon icon={showPassword ? EyeOff : EyeIcon} />
            </button>
          )}

          {/* END CONTENT */}
          {!isLoading && endContent && !isPassword && (
            <div
              className={cn(
                "flex items-center me-3 text-muted-foreground",
                classNames?.endContent,
              )}
            >
              {endContent}
            </div>
          )}

          {isLoading && (
            <svg
              className="animate-spin me-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                fill="currentColor"
              />
            </svg>
          )}
        </div>
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
