import { LearningAngularModule } from './learning-angular.module';

describe('LearningAngularModule', () => {
  let learningAngularModule: LearningAngularModule;

  beforeEach(() => {
    learningAngularModule = new LearningAngularModule();
  });

  it('should create an instance', () => {
    expect(learningAngularModule).toBeTruthy();
  });
});
