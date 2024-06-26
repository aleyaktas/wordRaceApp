import {getUser, loginUser} from '../../store/features/auth/authSlice';
import {ScreenProp} from '../../navigation/types';
import {showMessage} from '../../utils/showMessage';

export const handleLogin = async (
  username: string,
  password: string,
  navigation: ScreenProp,
  dispatch: any,
) => {
  if (!username || !password)
    return showMessage('Please fill all fields', 'error');
  const res = await dispatch(loginUser({username, password}));
  await dispatch(getUser());
  if (res.error) return showMessage(res.payload.msg, 'error');
  navigation.navigate('Home');
};
