import Toast from '../components/Toast';

export const showMessage = (
  msg: string,
  type: 'success' | 'error' | undefined,
) => {
  Toast.open({
    type,
    title: msg,
  });
};
