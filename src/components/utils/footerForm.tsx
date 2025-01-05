/**
 * Created by Sylnavy V. Mabika M.
 */
import React from "react";
import { Link } from "react-router-dom";

interface LabelProps {
  title: string;
  className: string;
  to: string;
  id?: string;
  orElement: boolean;
}

const FooterForm = React.forwardRef<HTMLElement, LabelProps>(
  ({ title, className, orElement = false, to, id }) => {
    return (
      <>
        <div className="flex text-sm flex-col space-y-2">
          {orElement && (
            <span className="flex items-center justify-center space-x-2">
              <span className="h-px mt-2 bg-gray-300 w-1/2"></span>
              <span className=" font-normal text-gray-400 mt-2">ou</span>
              <span className="h-px mt-2 bg-gray-300 w-1/2"></span>
            </span>
          )}

          {orElement && (
            <div className="pt-2 my-2 text-center lg:mb-3">
              <p className="mt-2 mb-6">
                <Link id={id} className={className} to={to}>
                  {title}
                </Link>
              </p>
            </div>
          )}
          {!orElement && (
            <div className="flex items-center justify-center">
              
                <Link  id={id} className={className} to={to}>
                  {title}
                </Link>
              
            </div>
          )}
        </div>
      </>
    );
  }
);

export default FooterForm;
