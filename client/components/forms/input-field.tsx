import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { FieldError } from "react-hook-form";

type Props = {
  label?: string;
  name: string;
  value?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string | number | undefined | null;
  type?: string;
  error?: FieldError | undefined;
  InputProps?: any;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
  inputClassName?: string;
};

const InputField: React.FC<Props> = ({
  label,
  name,
  value,
  disabled,
  onChange,
  placeholder,
  type = "text",
  InputProps,
  error,
  startIcon,
  endIcon,
  className,
  inputClassName,
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <Label htmlFor={name} className={`${error ? "text-red-500" : ""}`}>
          {label}
        </Label>
      )}

      <div
        className={`
        relative flex rounded-md overflow-hidden
        ${error ? "border border-red-500" : "border border-input"}
        focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2
        hover:border-gray-400 transition-colors
      `}
      >
        {startIcon && (
          <div className="flex items-center px-2 border-r border-input bg-gray-50">
            <div className="text-gray-500">{startIcon}</div>
          </div>
        )}
        <Input
          id={name}
          type={type}
          name={name}
          className={`
            border-0 focus-visible:ring-0 focus-visible:ring-offset-0
            ${inputClassName}
            ${error ? "placeholder-red-400" : ""}
            w-full
          `}
          placeholder={placeholder as string}
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...InputProps}
        />
        {endIcon && (
          <div className="flex items-center px-3 border-l border-input bg-gray-50">
            <div className="text-gray-500">{endIcon}</div>
          </div>
        )}
      </div>
      {error && <p className="text-red-500 text-xs mt-0.5">{error.message}</p>}
    </div>
  );
};

export default InputField;
