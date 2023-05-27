import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { User } from 'src/app/shared/interfaces/user';
import { API_URL } from 'src/app/shared/constants/api';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        private http: HttpClient
    ) { }

    // Se envia un GET request para obtener el usuario y se comprueba si el usuario y contrasena son correctos
    validateCredentials(username: string, password: string) {
        return this.http
            .get<User[]>(`${API_URL}/users?username=${username}`)
            .pipe(
                map(result => {
                    if (result.length === 0) return false;
                    const user = result[0];
                    return user.username === username && user.password === password;
                })
            );
    }

    // POST request para agregar un nuevo usuario
    signUp(username: string, password: string) {
        return this.http
            .post<User>(`${API_URL}/users`, {
                username, password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                },
            });
    }
}
