import { Component } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    // Este componente se utiliza simplemente para enviar el @Input() adecuado a el componente auth,
    // en este caso el input seria 'login'.
}
