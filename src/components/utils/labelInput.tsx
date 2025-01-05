/**
 * Created by Sylnavy V. Mabika M.
 */
import React from "react";

interface LabelProps {
  htmlFor: string;
  label: string;
  required: boolean;
}

const labelInput = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ htmlFor, label, required = false }) => {
    return (
      <>
        <label htmlFor={htmlFor} className="text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      </>
    );
  }
);

export default labelInput;
