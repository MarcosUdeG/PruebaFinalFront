import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';

const Childroutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent}
]
@NgModule({
    imports: [RouterModule.forChild(Childroutes)],
    exports: [RouterModule],
})
export class RouterChildMoudle { }
