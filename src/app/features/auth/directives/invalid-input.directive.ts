import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appInvalidInput]'
})
export class InvalidInputDirective {
    @HostBinding('class') get getHostClass() {
        return this.appInvalidInput ? "ng-invalid ng-dirty" : "";
    }

    @Input() appInvalidInput = false;
}
