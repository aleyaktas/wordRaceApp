export interface InitialStateProps {
  token: string | null;
  isAuthenticated: boolean;

  user: {
    _id: string;
    username: string;
    email: string;
    friends: {
      username: string;
      _id: string;
      profileImage: string;
    }[];
    pendingRequests: {
      username: string;
      _id: string;
      profileImage: string;
    }[];
    profileImage: string;
  };
  message: string | null;
  loading: boolean;
  onlineUsers: any[];
  rooms: {
    id: string;
    image: string;
    isPublic: boolean;
    messages: [] | any[];
    name: string;
    players: {
      username: string;
      image: string;
    }[];
    questions: {
      question: string;
      answer: string;
      a: string;
      b: string;
      c: string;
      d: string;
    }[];
    timer: number;
  }[];
  error: string | null | undefined;
  topScores: {
    username: string;
    score: number;
    profileImage: string;
  }[];
  acceptPrivacy: boolean;
}

export interface RegisterProps {
  username: string;
  email: string;
  password: string;
}

export interface LoginProps {
  username: string;
  password: string;
}
export interface UserProps {
  email: string;
  friends: {
    username: string;
    _id: string;
  }[];
  pendingRequests: {
    username: string;
    _id: string;
  }[];
  score: number;
  username: string;
}

export interface UserFriendsProps {
  friends: {
    username: string;
    _id: string;
  }[];
  pendingRequests: {
    username: string;
    _id: string;
  }[];
}
