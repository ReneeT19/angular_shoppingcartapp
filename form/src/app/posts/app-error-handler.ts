import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler {
    handleError(error) {
        alert('An expected error occurred.');
        console.log(error);
    }
}