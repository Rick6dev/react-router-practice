import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserInfo {
  id: number;
  name: string;
  email: string;
}

const EmptyUserState: UserInfo = {
  id: 0,
  name: '',
  email: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: EmptyUserState,
  reducers: {
    createUser: (state, action: PayloadAction<UserInfo>) => {
      return { ...state, ...action.payload };
    },
    updateUser: (state, action: PayloadAction<Partial<UserInfo>>) => {
      return { ...state, ...action.payload };
    },
    resetUser: (state) => {
      // Handle any side effects here (e.g., clearing local storage)
      return EmptyUserState;
    },
  },
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;