import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getWelcomeText(): Promise<string> {
    return element(by.css('app-root .tagline span')).getText() as Promise<string>;
  }
}
