import JustValidate from 'just-validate';
import {getValidationRules} from '~/utils/helpers';
import {justValidateConfig} from '~/constants';

export default class {
  onCreate({form}) {
    const {
      id = 'form-block',
      title,
      fields,
      submitButtonLabel,
      confirmationType,
      confirmationMessage,
      redirect,
    } = form;
    this.state = {
      id,
      title,
      fields,
      submitButtonLabel,
      confirmationType,
      confirmationMessage,
      redirect,
      isValid: false,
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    this.validate(Object.fromEntries(new FormData(e.target)));
  }

  validate(formData) {
    const validation = new JustValidate(
      `#${this.state.id}`,
      justValidateConfig,
    );

    this.state.fields?.map(field =>
      validation.addField(`#${field.name}`, getValidationRules(field.rules)),
    );

    validation.onSuccess(e => {
      this.state.isValid = !this.state.isValid;
      this.emit('form-submitted', formData);
    });
  }
}
