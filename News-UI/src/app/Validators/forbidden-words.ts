import { AbstractControl, ValidatorFn } from "@angular/forms";

export function forbiddenValidator(terms : RegExp) : ValidatorFn{

   return  (control : AbstractControl) : {[key : string] : any} | null => {

        const forbiddenWord = terms.test(control.value);
    
        return forbiddenWord? {'forbiddenTerms' : {value : control.value}} : null;    
    
    }
}