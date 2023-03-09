import { Then } from '@cucumber/cucumber';
import { actorCalled, Wait, Duration } from '@serenity-js/core';
import { Scroll, isVisible } from '@serenity-js/web';
import { DemoPage } from '../page-objects/demo.page';
import { SignInPage } from '../page-objects/signin.page';

Then(/^I sign into Demo$/, async function () {
  this.page = new SignInPage();

  let username = 'standard_user'; // This is a demo site
  let password = 'secret_sauce'; // This is a demo site

  await actorCalled('I').attemptsTo(
    this.page.open(),
    this.page.signIn(username, password)
  );
});

Then(/^I should see the header and footer$/, async function () {
  this.context(DemoPage);
  await actorCalled('I').attemptsTo(
    Wait.upTo(Duration.ofSeconds(30)).until(
      this.page.shoppingCart,
      isVisible()
    ),
    Scroll.to(this.page.socialTwitter),
    Wait.until(this.page.socialTwitter, isVisible())
  );
});
