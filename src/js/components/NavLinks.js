import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import './NavLink';

class NavLinks extends LitWithoutShadowDom {
  render() {
    return html`<ul class="navbar-nav d-flex align-items-center gap-3">
      <nav-link content="Home" to="/"></nav-link>
      <nav-link content="Add Story" to="/add.html"></nav-link>
    </ul> `;
  }
}

customElements.define('nav-links', NavLinks);
