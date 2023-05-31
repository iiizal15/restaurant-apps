class Jumbotron extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="banner">
      <div class="banner-content"> Find a <span>Restaurant</span> According to Your <span>Stomach's Desire</span></div>
      <picture>
        <source media="(max-width: 600px)" srcset="/images/heros/banner-small.jpg">
        <img src="/images/heros/banner-large.jpg" alt="banner">
      </picture>
    </div>
    `;
  }
}

customElements.define('jumbotron-element', Jumbotron);
