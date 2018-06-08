import { LearningAngularRoutingModule } from './learning-angular-routing.module';

describe('LearningAngularRoutingModule', () => {
  let learningAngularRoutingModule: LearningAngularRoutingModule;

  beforeEach(() => {
    learningAngularRoutingModule = new LearningAngularRoutingModule();
  });

  it('should create an instance', () => {
    expect(learningAngularRoutingModule).toBeTruthy();
  });
});
