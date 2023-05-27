import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    exports: [
        ButtonModule,
        InputTextModule,
        ToastModule,
        ProgressSpinnerModule
    ]
})
export class SharedModule { }
