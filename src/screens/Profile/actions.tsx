import axios from 'axios';
import {deleteAccount, logout} from '../../store/features/auth/authSlice';
import {showMessage} from '../../utils/showMessage';
import {ScreenProp} from '../../navigation/types';

export const getScore = async (
  setScore: React.Dispatch<React.SetStateAction<number>>,
) => {
  const res = await axios.get('/api/auth/getScore');
  setScore(res.data);
};

export const handleDeleteAccount = async (
  dispatch: any,
  navigation: ScreenProp,
) => {
  const res = await dispatch(deleteAccount());
  if (res.error) return showMessage(res.payload.errors[0].msg, 'error');
  showMessage(res.payload.msg, 'success');
  await dispatch(logout());
  navigation.navigate('Login');
};
