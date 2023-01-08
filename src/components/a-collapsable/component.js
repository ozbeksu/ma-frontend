export default class {
  onCreate({title, content}) {
    this.state = {
      title,
      content,
      isCollapsed: false,
    };
  }

  handleToggle() {
    this.state.isCollapsed = !this.state.isCollapsed;
  }
}
