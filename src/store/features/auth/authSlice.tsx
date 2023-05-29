import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import setAuthToken from '../../../utils/setAuthToken';
import {showMessage} from '../../../utils/showMessage';
import {InitialStateProps, LoginProps, RegisterProps} from './types';

const initialState: InitialStateProps = {
  token: null,
  isAuthenticated: false,
  user: {
    username: '',
    friends: [],
    pendingRequests: [],
    profileImage: '',
  },
  message: null,
  loading: false,
  onlineUsers: [],
  rooms: [],
  error: null,
  topScores: [],
};

export const registerUser = createAsyncThunk(
  'registerUser',
  async ({username, email, password}: RegisterProps, {rejectWithValue}) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({username, email, password});
    try {
      const res = await axios.post('/api/users/', body, config);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data.errors);
    }
  },
);

export const loginUser = createAsyncThunk(
  'loginUser',
  async ({username, password}: LoginProps, {rejectWithValue}) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({username, password});
    try {
      const res = await axios.post('/api/auth', body, config);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const getUser = createAsyncThunk('getUser', async () => {
  try {
    const res = await axios.get('/api/auth/me');
    return res.data;
  } catch (err: any) {
    return err.response.data;
  }
});

export const addFriend = createAsyncThunk(
  'addFriend',
  async (
    {
      username,
    }: {
      username: string;
    },
    {rejectWithValue},
  ) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({username});
    try {
      const res = await axios.post('/api/auth/addFriend', body, config);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const acceptFriend = createAsyncThunk(
  'acceptFriend',
  async ({username}: {username: string}, {rejectWithValue}) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({username});
    try {
      const res = await axios.post('/api/auth/acceptFriend', body, config);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const rejectFriend = createAsyncThunk(
  'rejectFriend',
  async ({username}: {username: string}, {rejectWithValue}) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({username});
    try {
      const res = await axios.post('/api/auth/rejectFriend', body, config);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const deleteFriend = createAsyncThunk(
  'deleteFriend',
  async ({username}: {username: string}, {rejectWithValue}) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({username});
    try {
      const res = await axios.post('/api/auth/deleteFriend', body, config);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const getFriends = createAsyncThunk('getFriends', async () => {
  const res = await axios.get('/api/auth/friends');
  return res.data;
});

export const editProfile = createAsyncThunk(
  'editProfile',
  async ({url}: {url: string}) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const body = JSON.stringify({url});
      const res = await axios.post('/api/auth/editProfile', body, config);
      return res.data;
    } catch (err: any) {
      return err.response.data;
    }
  },
);

export const changePassword = createAsyncThunk(
  'changePassword',
  async (
    {
      oldPassword,
      newPassword,
    }: {
      oldPassword: string;
      newPassword: string;
    },
    {rejectWithValue},
  ) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({password: oldPassword, newPassword});
    try {
      const res = await axios.post('/api/profile/changePassword', body, config);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const forgotPassword = createAsyncThunk(
  'forgotPassword',
  async (
    {
      email,
    }: {
      email: string;
    },
    {rejectWithValue},
  ) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({email});
    try {
      const res = await axios.post('/api/profile/forgotPassword', body, config);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const getTopScores = createAsyncThunk('getTopScores', async () => {
  try {
    const res = await axios.get('/api/auth/getTopScores');
    return res.data;
  } catch (err: any) {
    return err.response.data;
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state, action) => {
      state.isAuthenticated = false;
      setAuthToken(null);
      state.user = {
        username: '',
        friends: [],
        pendingRequests: [],
        profileImage: '',
      };
      state.loading = false;
      state.token = null;
    },
    getOnlineUsers: (state, action) => {
      state.onlineUsers = action.payload.users;
    },
    getRooms: (state, action) => {
      state.rooms = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(registerUser.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(registerUser.rejected, (state, action: any) => {
      state.error = action.payload;
      state.loading = false;
      showMessage(action.payload[0].msg, 'error');
    });

    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.loading = false;
      setAuthToken(action.payload.token);
    });
    builder.addCase(loginUser.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(loginUser.rejected, (state, action: any) => {
      state.error = action.payload && action.payload.msg;
      state.loading = false;
      action.payload && showMessage(action.payload.msg, 'error');
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.token = action.payload.token;
      setAuthToken(action.payload.token);
    });
    builder.addCase(addFriend.pending, (state, action) => {
      state.error = null;
      state.message = 'Loading';
    });

    builder.addCase(addFriend.rejected, (state, action: any) => {
      state.message = action.payload.error;
      showMessage(action.payload.error, 'error');
    });

    builder.addCase(addFriend.fulfilled, (state, action) => {
      state.message = 'Friend request send';
      showMessage('Friend request send', 'success');
    });
    builder.addCase(acceptFriend.pending, (state, action) => {
      state.error = null;
    });

    builder.addCase(acceptFriend.rejected, (state, action) => {
      state.error = action.error.message;
    });

    builder.addCase(acceptFriend.fulfilled, (state, action) => {
      state.message = 'Friend request accepted';
      showMessage('Friend request accepted', 'success');
    });

    builder.addCase(deleteFriend.pending, (state, action) => {
      state.error = null;
    });

    builder.addCase(deleteFriend.rejected, (state, action: any) => {
      state.error = action.error.message;
      action.payload &&
        action.payload.errors[0] &&
        showMessage(action.payload.errors[0].msg, 'error');
    });

    builder.addCase(deleteFriend.fulfilled, (state, action) => {
      state.message = 'Friend deleted';
      showMessage('Friend deleted', 'success');
    });

    builder.addCase(rejectFriend.pending, (state, action) => {
      state.error = null;
    });

    builder.addCase(rejectFriend.rejected, (state, action) => {
      state.error = action.error.message;
    });

    builder.addCase(rejectFriend.fulfilled, (state, action) => {
      state.message = 'Friend request rejected';
      showMessage('Friend request rejected', 'success');
    });
    builder.addCase(getFriends.pending, (state, action) => {
      state.error = null;
    });

    builder.addCase(getFriends.rejected, (state, action) => {
      state.error = action.error.message;
    });

    builder.addCase(getFriends.fulfilled, (state, action) => {
      state.user.friends = action.payload.friends;
      state.user.pendingRequests = action.payload.pendingRequests;
    });
    builder.addCase(getUser.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(getUser.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
      state.token = null;
      state.token = null;
      setAuthToken(null);
    });

    builder.addCase(getUser.fulfilled, (state, action) => {
      state.isAuthenticated = action.payload?._id ? true : false;
      state.loading = false;
      state.user = action.payload;
      state.token = state.token;
      setAuthToken(state.token);
    });
    builder.addCase(editProfile.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(editProfile.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    builder.addCase(editProfile.fulfilled, (state, action) => {
      state.user.profileImage = action.payload;
      state.loading = false;
    });
    builder.addCase(changePassword.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(changePassword.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    builder.addCase(changePassword.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(getTopScores.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getTopScores.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
    builder.addCase(getTopScores.fulfilled, (state, action) => {
      state.topScores = action.payload;
      state.loading = false;
    });
  },
});

export const {logout, getOnlineUsers, getRooms} = authSlice.actions;
export default authSlice.reducer;
