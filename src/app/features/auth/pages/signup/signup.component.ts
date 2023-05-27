import { Component } from '@angular/core';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
    // Este componente se utiliza simplemente para enviar el @Input() adecuado a el componente auth,
    // en este caso el input seria 'signup'.
}
