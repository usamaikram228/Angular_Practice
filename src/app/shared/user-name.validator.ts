import { AbstractControl, ValidationErrors } from "@angular/forms";

export function ForbiddenNameValidator(control:AbstractControl):ValidationErrors |null{
    const forbidden=/admin/.test(control.value);
    console.log('Validator called', control.value, forbidden);
    return forbidden?{'forbiddenName':{value:control.value}}:null;
}