import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('my-panel')
export class MyPanel extends LitElement {
  static styles = css`
    .title{
      background: var(--primary-panel-bg, #000);
      color: var(--primary-panel-color, #fff);
      padding: 0.8rem;
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
      display: flex;
      justify-content: space-between;  
      align-items: center;
    }

    .body{
      padding: 1rem;
      border: 1px solid aquamarine;
    }
  `

  @property({type: String})
  title = '';

  render() {
    return html`
      <div>
        <div class="title">
          <h1>${this.title}</h1>
          <div>⭐</div>
        </div>
        <div class="body">
          Content here
        </div>
      </div>
    `
  }
}