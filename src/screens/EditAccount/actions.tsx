import Toast from '../../components/Toast';
import {
  changeUsername,
  getUser,
  updatePhoto,
} from '../../store/features/auth/authSlice';
import {showMessage} from '../../utils/showMessage';
import storage from '@react-native-firebase/storage';

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

export const handleUpdatePhoto = async (
  userId: string,
  photo: string,
  dispatch: any,
) => {
  const reference = storage().ref(`images/${userId}`);
  const task = reference.putFile(photo);
  task.then(async () => {
    const url = await reference.getDownloadURL();
    const res = await dispatch(updatePhoto({url}));
    if (res.error) return showMessage(res.payload.errors[0].msg, 'error');
    showMessage('Profile photo updated successfuly', 'success');
  });
};
