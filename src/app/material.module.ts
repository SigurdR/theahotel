import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material';
import { MatBadgeModule } from '@angular/material';


@NgModule({
    imports: [
        MatBadgeModule,
        MatButtonModule
             ],
    exports: [
        MatBadgeModule,
        MatButtonModule
             ]
})

export class MaterialModule {}