import { Section } from 'platform-ui-automation/lib/common/page-objects/section';

export class FooterSection extends Section {
  constructor() {
    super();
    this.buildProps({
      socialTwitter: '.social_twitter a', 
      socialFacebook: '.social_facebook a', 
      socialLinkedin: '.social_linkedin a'
    });
  }
}