import {getUser} from '../../store/features/auth/authSlice';

export const getInitialData = async (dispatch: any) => {
  await dispatch(getUser());
};
