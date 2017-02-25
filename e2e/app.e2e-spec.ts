import { ProjectFolioPage } from './app.po';

describe('project-folio App', function() {
  let page: ProjectFolioPage;

  beforeEach(() => {
    page = new ProjectFolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('pf works!');
  });
});
