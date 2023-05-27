import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './pages/users/users.component';
import { DetailsComponent } from './pages/details/details.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        UsersComponent,
        DetailsComponent
    ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        SharedModule
    ]
})
export class UsersModule { }
