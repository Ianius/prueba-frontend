import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
    user: User | undefined;
    loading = true;

    constructor(
        public usersService: UsersService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        const username = this.route.snapshot.paramMap.get('username')!;

        // GET request para obtener los detalles del usuario que se encuentra en los parametros de la URL
        this.usersService.getUser(username)
            .subscribe({
                next: result => {
                    this.user = result;
                    this.loading = false;
                },
                error: () => {
                    this.loading = false;
                }
            });
    }

    // Cambia la primera letra de una string a mayuscula y agrega espacios entre las letras mayusculas.
    // Por ejemplo: lastName se convertiria en Last Name
    convertKeyToCorrectFormat(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1)
            .split(/(?=[A-Z])/g)
            .join(' ');
    }

    // Retorna true si la key no se encuentra en el arreglo de keys excluidas.
    // Esto se usa para excluir ciertas keys al recorrer un objeto con *ngFor
    excludeKeys(key: string, ...excluded: string[]) {
        return excluded.find(k => k === key) === undefined;
    }
}
