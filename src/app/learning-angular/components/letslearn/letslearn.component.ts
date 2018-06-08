import { Component, OnInit } from '@angular/core';
import { LearnService } from '../../services/learn.service';

@Component({
    selector: 'app-letslearn',
    templateUrl: './letslearn.component.html',
    styleUrls: ['./letslearn.component.css']
})
export class LetslearnComponent implements OnInit {

    js = 'Javascript/Ecmascript 5';
    es = 'Ecmascript 2015, 2016, 2017 ..., ESM';
    angularlink = 'http://www.angular.io';
    sayHello: string;
    typescriptFeatures: string[];
    today: Date;

    constructor(private learnService: LearnService) { }

    ngOnInit() {
        this.sayHello = 'Hello! Yes I am here.';
        this.today = new Date();
        this.loadTypescriptFeatures();
    }

    loadTypescriptFeatures(): void {
        this.typescriptFeatures = this.learnService.getTypescriptFeature();
    }

}
