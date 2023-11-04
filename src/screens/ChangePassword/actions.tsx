import {changePassword} from '../../store/features/auth/authSlice';
import {showMessage} from '../../utils/showMessage';

export const handlePasswordChange = async (
  currentPassword: String,
  newPassword: String,
  dispatch: any,
) => {
  if (currentPassword && newPassword) {
    if (newPassword?.length < 6 || newPassword?.length > 20) {
      return showMessage(
        'Password must be between 6 and 20 characters',
        'error',
      );
    }
    const res: any = await dispatch(
      changePassword({
        oldPassword: currentPassword,
        newPassword,
      }),
    );
    if (res.payload?.errors) {
      return showMessage(res.payload.errors[0].msg, 'error');
    }
    return showMessage('Password changed successfully', 'success');
  } else return showMessage('Please fill all fields', 'error');
};
