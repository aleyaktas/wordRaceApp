import {forgotPassword} from '../../store/features/auth/authSlice';
import {ScreenProp} from '../../navigation/types';
import {showMessage} from '../../utils/showMessage';

export const resetPassword = async (
  email: String,
  navigation: ScreenProp,
  dispatch: any,
) => {
  if (!email) {
    return showMessage('Please fill email field', 'error');
  }
  const res = await dispatch(forgotPassword({email}));
  if (res.error) return showMessage(res.payload.errors[0].msg, 'error');
  navigation.navigate('ForgotPassword', {
    email,
  });
  showMessage(res.payload.msg, 'success');
};
