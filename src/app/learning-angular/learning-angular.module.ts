import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningAngularRoutingModule } from './learning-angular-routing.module';

import { LetslearnComponent } from './components/letslearn/letslearn.component';
import { StartlearnComponent } from './components/startlearn/startlearn.component';
import { LearnisfunDirective } from './directives/learnisfun.directive';
import { LearnService } from './services/learn.service';
import { LearnPipePipe } from './pipes/learn-pipe.pipe';

@NgModule({
    imports: [
        CommonModule,
        LearningAngularRoutingModule
    ],
    declarations: [
        LetslearnComponent,
        StartlearnComponent,
        LearnisfunDirective,
        LearnPipePipe,
    ],
    providers: [
        LearnService
    ]
})
export class LearningAngularModule { }
