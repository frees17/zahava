import { browser, element, by } from 'protractor';

export class AngularStudy1Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('Study1-root h1')).getText();
  }
}
