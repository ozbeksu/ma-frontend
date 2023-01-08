

export default class {
  onCreate({
    title,
    fields,
    submitButtonLabel,
    confirmationType,
    confirmationMessage,
    redirect,
  }) {
    this.state = {
      title,
      fields,
      submitButtonLabel,
      confirmationType,
      confirmationMessage,
      redirect,
      formData: {},
      showMessage: false,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.state.formData = Object.fromEntries(formData);
    this.state.showMessage = !this.state.showMessage;
  }
}
