import axios from 'axios';
import {API_ENDPOINT} from '~/constants';

export default class {
  onCreate({user}) {
    this.state = {
      user,
      form: {
        id: 'login-form',
        title: 'Login',
        submitButtonLabel: 'Login',
        confirmationMessage: [
          {text: 'Login is successful. You are redirected to Home page'},
        ],
        fields: [
          {
            name: 'email',
            label: 'E-Mail',
            blockType: 'text',
            required: true,
            rules: ['required|Email is required', 'email|Email is invalid!'],
          },
          {
            name: 'password',
            label: 'Password',
            blockType: 'password',
            required: true,
            rules: [
              'password|Password is required',
              'min:8|Password needs to be at least 8 characters long',
              'max:60|Password cannot be more than 60 characters long',
            ],
          },
        ],
      },
    };
  }

  handleLogin(data) {
    const {email, password} = data;

    axios
      .post(`${API_ENDPOINT}/users/login`, {email, password})
      .catch(err => console.log(err))
      .then(({data}) => {
        document.cookie = `token=${data?.token}`;
        localStorage.setItem('user', JSON.stringify(data?.user));
        this.state.user = data?.user;
      });
  }
}
