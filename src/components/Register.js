import { useNavigate } from 'react-router-dom';
import AuthForm from './AuthForm'
import * as auth from '../utils/auth';

function Register(props) {
  const navigation = useNavigate();
  function onSubmit({ email, password }) {
    auth.register(email, password)
      .then(res => {
        props.onChange(res.status)
        try {
          if (res.status === 201) {
            return res.json();
          }
        } catch (e) {
          return (e)
        }
      })
      .then((res) => {
        if (res) {
          navigation('/sign-in');
        }
        return res;
      })
      .catch((err) => console.log(err));
  }
  return (
    <AuthForm
      title="Регистрация"
      saveBtnText="Зарегистрироваться"
      saveBtnSubtitle="Уже зарегистрированы? Войти"
      isRegistration={true}
      onSubmit={onSubmit}
    />
  )
}

export default Register;