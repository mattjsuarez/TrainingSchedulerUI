import { TrainingSchedulerUiPage } from './app.po';

describe('training-scheduler-ui App', function() {
  let page: TrainingSchedulerUiPage;

  beforeEach(() => {
    page = new TrainingSchedulerUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
