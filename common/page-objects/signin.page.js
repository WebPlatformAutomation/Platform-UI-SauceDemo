import { Page } from 'platform-ui-automation/lib/common/page-objects/page';
import { Task, Wait, Duration } from '@serenity-js/core';
import { Click, Enter, isClickable } from '@serenity-js/web';

export class SignInPage extends Page {
  constructor() {
    super();
    this.buildProps({
      urlPath: '/',
      usernameInput: '#user-name',
      passwordInput: '#password',
      loginButton: '#login-button'
    });
  }

  signIn(username, password) {
    return Task.where(
      `#actor enter username and password`,
      Wait.upTo(Duration.ofSeconds(30)).until(
        this.usernameInput,
        isClickable()
      ),
      Enter.theValue(username).into(this.usernameInput),
      Enter.theValue(password).into(this.passwordInput),
      Click.on(this.loginButton)
    );
  }
}
