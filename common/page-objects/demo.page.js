import { classes } from 'polytype';
import { Page } from 'platform-ui-automation/lib/common/page-objects/page';
import { HeaderSection } from './header.section';
import { FooterSection } from './footer.section';

export class DemoPage extends classes(Page, HeaderSection, FooterSection) {
  constructor() {
    super();
  }
}
