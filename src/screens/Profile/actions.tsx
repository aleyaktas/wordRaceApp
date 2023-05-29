import axios from 'axios';

export const getScore = async (
  setScore: React.Dispatch<React.SetStateAction<number>>,
) => {
  const res = await axios.get('/api/auth/getScore');
  setScore(res.data);
};
