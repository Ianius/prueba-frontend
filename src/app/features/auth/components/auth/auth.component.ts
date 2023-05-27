import { Component, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    providers: [MessageService]
})
export class AuthComponent {
    @Input() type: 'login' | 'signup' = 'login';

    isBig = false;
    invalid = { username: false, password: false };

    username = "";
    password = "";

    constructor(
        private router: Router,
        private authService: AuthService,
        private messageService: MessageService
    ) { }

    showToast(severity: string, summary: string, detail: string) {
        this.messageService.add({ severity, summary, detail });
    }

    onInputChange(type: 'username' | 'password') {
        if (this.invalid[type]) this.invalid[type] = false;
    }

    onSubmit() {
        // Cambia el estado de los elementos invalidos para mostrar al usuario un error en los input fields
        this.invalid = {
            username: this.username.length === 0,
            password: this.password.length === 0
        };

        // Si el usuario no escribio nada en algun input field, retornar y enviar un toast
        if (this.invalid.username || this.invalid.password) {
            return this.showToast("warn", "Advertencia", "Por favor arregle los errores antes de proceder");
        }

        // Comprobamos que tipo de autentication usar (inicio de sesion o registro), y utilizamos el servicio
        // AuthService para enviar un request al servidor y validar los datos.
        // Si no hay ningun error, se redirecciona al usuario a /users, de lo contrario se muestra un toast con un error.
        if (this.type === 'login') {
            this.authService.validateCredentials(this.username, this.password)
                .subscribe({
                    next: result => {
                        if (result) {
                            this.router.navigate(['/users']);
                        } else {
                            this.showToast("error", "Error", "Nombre de usuario o contraseña incorrecta");
                        }
                    },
                    error: () => {
                        this.showToast("error", "Error", "Algo salio mal. Por favor, intentelo de nuevo");
                    }
                });
        } else {
            this.authService.signUp(this.username, this.password)
                .subscribe({
                    next: () => {
                        this.router.navigate(['/users']);
                    },
                    error: () => {
                        this.showToast("error", "Error", "Algo salio mal. Por favor, intentelo de nuevo");
                    }
                })
        }
    }
}
