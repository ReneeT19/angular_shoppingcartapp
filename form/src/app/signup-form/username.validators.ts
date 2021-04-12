import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
    //outside this class call UsernameValidators.cannotContainSpace method so we call it static below
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if((control.value as string).indexOf(' ') >= 0)  
            return { cannotContainSpace: true };

        return null;
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value === 'renee')
                    resolve ({ shouldBeUnique: true });
                else resolve(null);
            }, 2000);

        });
    }
}