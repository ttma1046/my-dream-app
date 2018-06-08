import { Injectable } from '@angular/core';

@Injectable()
export class LearnService {
    constructor() { }

    getTypescriptFeature(): string[] {
        return ['type', 'interface', 'static class', 'generics'];
    }
}
