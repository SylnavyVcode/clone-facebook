/**
 * Created by Sylnavy V. Mabika M.
 */
import React from "react";

interface InputProps {
  id: string;
  message: string | undefined;
}

const ErrorInput = React.forwardRef<
  HTMLInputElement | HTMLSelectElement,
  InputProps
>(({ id = "input_error", message = "" }) => {
  return (
    <>
      {message && (
        <div id={id} className="invalid-feedback text-red-600 text-sm">
          {message}
        </div>
      )}
    </>
  );
});

export default ErrorInput;
