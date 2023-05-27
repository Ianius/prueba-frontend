import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthComponent } from './components/auth/auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { InvalidInputDirective } from './directives/invalid-input.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AuthComponent,
        LoginComponent,
        SignupComponent,
        InvalidInputDirective
    ],
    imports: [
        CommonModule,
        SharedModule,
        AuthRoutingModule,
        FormsModule
    ]
})
export class AuthModule { }
