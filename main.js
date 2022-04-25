class RecordTag extends HTMLElement {
  constructor() {
    super();
    const template = document.getElementById("record");
    const templateContent = template.content;
    this.attachShadow({ mode: "open" }).appendChild(
      templateContent.cloneNode(true)
    );
  }
}
customElements.define("record-tag", RecordTag);
