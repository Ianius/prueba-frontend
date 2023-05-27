import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { API_URL } from 'src/app/shared/constants/api';
import { User } from 'src/app/shared/interfaces/user';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    constructor(
        private http: HttpClient
    ) { }

    // Obtiene todos los usuarios
    getUsers() {
        return this.http
            .get<User[]>(`${API_URL}/users`);
    }

    // Obtiene un usuario especifico por medio del username
    getUser(username: string) {
        return this.http
            .get<User[]>(`${API_URL}/users?username=${username}`)
            .pipe(
                map(result => result.length > 0 ? result[0] : undefined)
            );
    }

    // Utilizado para preservar el orden de las propiedades del objeto 'User' al iterar sobre ellos con *ngFor.
    // Tal vez deberia poner esto en otro lugar
    keepOriginalOrder() {
        return 0;
    }
}
