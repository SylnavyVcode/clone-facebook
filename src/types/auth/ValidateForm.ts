export class ValidateForm {
   code: number;
   errorCode: boolean;
      constructor() {
        this.code= 0;
        this.errorCode = false;
      }
    
      /**
       *
       * @param {*} code
       * @returns
       */
      setCode(code: number) {
        this.code = code;
    
        if (this.code.toString() == "" || this.code <= 999) {
          this.errorCode = true;
        } else {
          this.errorCode = false;
        }
    
        return this;
      }

    
      builderValidateForm() {
        return {
          errorCode: this.errorCode,
        };
      }
    }
    