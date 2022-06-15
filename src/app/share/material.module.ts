import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    declarations: [],
    imports: [
        MatButtonModule,
        MatDialogModule
    ],
    exports: [
        MatButtonModule,
        MatDialogModule
    ],
    providers: []
})
export class MaterialModule { }
