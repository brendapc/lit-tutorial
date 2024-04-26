import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { when } from "lit/directives/when.js";

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

  @property({type: Boolean})
  opened = false;

  @property({type: String})
  icon = '⭐';

  private onIconClickHandler(e: MouseEvent) {
    e.stopPropagation();
    this.dispatchEvent(new CustomEvent('icon-click', {
      bubbles: true,
      composed: true,
      detail: {
        title: this.title,
        opened: this.opened,
        icon: this.icon
      }
    }));  
  }

  render() {
    return html`
      <div>
        <div class="title" @click=${() => this.opened = !this.opened}>
          <h1>${this.title}</h1>
          <div @click=${this.onIconClickHandler} >${this.icon}</div>
        </div>

        ${when(
          this.opened,
          () => html`
            <div class="body">
              <slot></slot>
            </div>
          `,
        )}
      </div>
    `
  }
}