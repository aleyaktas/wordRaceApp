import {
  getUser,
  loginUser,
  registerUser,
} from '../../store/features/auth/authSlice';
import {ScreenProp} from '../../navigation/types';
import {showMessage} from '../../utils/showMessage';

export const handleRegister = async (
  isChecked: boolean,
  username: string,
  email: string,
  password: string,
  navigation: ScreenProp,
  dispatch: any,
) => {
  if (!isChecked) {
    return showMessage('Please accept terms & privacy policy', 'error');
  }
  if (!username || !email || !password)
    return showMessage('Please fill all fields', 'error');
  if (password?.length > 20 || password?.length < 3)
    return showMessage('Password must be between 6 and 20 characters', 'error');
  const res = await dispatch(registerUser({username, email, password}));
  await getUser();
  if (res.error) return showMessage(res.payload.msg, 'error');
  navigation.navigate('Home');
};
