import { AbstractControl,ValidationErrors } from "@angular/forms";

export class PasswordValidators {
static validOldPassword(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
            if(control.value !== '1234')
                resolve ({ invalidOldPassword: true });
            else resolve(null);
        });
    };

static passwordShouldMatch(control: AbstractControl) {
    let newPassword = control.get('newPassword');
    let confirmPassword = control.get('newPassword');

    return new Promise((resolve) => {
            if(newPassword.value !== confirmPassword.value)
                resolve ({ passwordShouldMatch: true });
            else resolve(null);
        });
    };
}
