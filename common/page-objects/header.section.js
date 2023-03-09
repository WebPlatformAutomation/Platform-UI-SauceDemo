import { Section } from 'platform-ui-automation/lib/common/page-objects/section';

export class HeaderSection extends Section {
  constructor() {
    super();
    this.buildProps({
      burgerMenu: '#react-burger-menu-btn',
      shoppingCart: '#shopping_cart_container'
    });
  }
}