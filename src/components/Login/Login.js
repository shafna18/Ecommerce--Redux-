import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/authSlice';

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = (userData) => {
    dispatch(login(userData));
  };

  return (
    <div className="form-label">
    <input className="input input-element" name="Name" placeholder="Name"/>
    <input className="input input-element" name="Email" placeholder="Email"/>
    <button onClick={() => handleLogin({userData:'shafna'})}>Login</button>
    </div>
  );
};

export default Login;
