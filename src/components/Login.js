import AuthForm from './AuthForm'
import * as auth from '../utils/auth';

function Login(props) {
  function onSubmit({ email, password }) {
    auth.authorize(email, password)
      .then((data) => {
        if (data.token) {
          props.handleLogin()
        }
      })
  }
  return (
    <AuthForm title={'Вход'} saveBtnText={'Войти'} onSubmit={onSubmit} />
  )
}

export default Login;