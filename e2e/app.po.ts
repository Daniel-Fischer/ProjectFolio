import { browser, element, by } from 'protractor';

export class ProjectFolioPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pf-root h1')).getText();
  }
}
