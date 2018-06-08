import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartlearnComponent } from './components/startlearn/startlearn.component';
import { LetslearnComponent } from './components/letslearn/letslearn.component';
const learnAngularRoutes: Routes = [
   { path: 'startlearn', component: StartlearnComponent }
   { path: 'letslearn', component: LetslearnComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(learnAngularRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class LearningAngularRoutingModule { }



