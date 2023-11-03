import {newPassword} from '../../store/features/auth/authSlice';
import {ScreenProp} from '../../navigation/types';
import {showMessage} from '../../utils/showMessage';

export const setNewPassword = async (
  email: String,
  password: String,
  navigation: ScreenProp,
  dispatch: any,
) => {
  if (password?.length > 20 || password?.length < 6)
    return showMessage('Password must be between 6 and 20 characters', 'error');
  const res = await dispatch(newPassword({email, password}));
  if (res.error) return showMessage(res.payload.errors[0].msg, 'error');

  navigation.navigate('Login');
  showMessage(res.payload.msg, 'success');
};
