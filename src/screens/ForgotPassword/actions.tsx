import {checkCode, forgotPassword} from '../../store/features/auth/authSlice';
import {ScreenProp} from '../../navigation/types';
import {showMessage} from '../../utils/showMessage';

export const checkResetCode = async (
  email: String,
  otp: Number,
  navigation: ScreenProp,
  dispatch: any,
) => {
  if (!email) {
    return showMessage('Please fill email field', 'error');
  }
  const res = await dispatch(checkCode({email, otp}));
  if (res.error) return showMessage(res.payload.errors[0].msg, 'error');
  navigation.navigate('NewPassword', {
    email,
  });
  showMessage(res.payload.msg, 'success');
};

export const resetPassword = async (email: String, dispatch: any) => {
  if (!email) {
    return showMessage('Please fill email field', 'error');
  }
  const res = await dispatch(forgotPassword({email}));
  if (res.error) return showMessage(res.payload.errors[0].msg, 'error');
  showMessage(res.payload.msg, 'success');
};
