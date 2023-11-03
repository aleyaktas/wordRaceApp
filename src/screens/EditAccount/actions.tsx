import {changeUsername, getUser} from '../../store/features/auth/authSlice';
import {showMessage} from '../../utils/showMessage';

export const editUsername = async (
  email: String,
  username: String,
  dispatch: any,
) => {
  if (!username || username.length < 3) {
    return showMessage('Username must be greater than 3', 'error');
  }
  const res = await dispatch(changeUsername({email, username}));
  if (res.error) return showMessage(res.payload.errors[0].msg, 'error');
  await dispatch(getUser());
  showMessage(res.payload.msg, 'success');
};
