import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from 'src/app/shared/interfaces/user';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    users: User[] = [];
    error = false;
    loading = true;

    constructor(
        private usersService: UsersService
    ) { }

    ngOnInit() {
        // Obtiene todos los usuarios, los agrega en caso de exito, y cambia los booleans 'error' y 'loading' utilizados
        // para mostrar de forma condicional distintos elementos en el html.
        this.usersService.getUsers()
            .subscribe({
                next: result => {
                    this.users = result;
                    this.loading = false;
                },
                error: () => {
                    this.loading = false;
                    this.error = true;
                }
            })
    }
}
