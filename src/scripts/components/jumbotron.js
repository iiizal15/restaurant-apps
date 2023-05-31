class Jumbotron extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
      <picture class= "banner">
        <source media="(max-width: 600px)" srcset="/images/heros/banner-small.jpg">
        <img src="/images/heros/banner-large.jpg" alt="banner">
      </picture>
    `;
  }
}

customElements.define('jumbotron-element', Jumbotron);
