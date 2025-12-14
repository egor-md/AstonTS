import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { User } from '../../User';
import type { RootState } from '../../../../app/providers/store';
import { usersApi } from '../../api/usersApi';

export const usersAdapter = createEntityAdapter<User>({});

interface UserSliceState {
  selectedUserId: number | null;
}

const initialState = usersAdapter.getInitialState<UserSliceState>({
  selectedUserId: null,
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setSelectedUser: (state, action: PayloadAction<number | null>) => {
      state.selectedUserId = action.payload;
    },
    clearUsers: state => {
      usersAdapter.removeAll(state);
      state.selectedUserId = null;
    },
  },
  extraReducers: builder => {   
    builder.addMatcher(
      usersApi.endpoints.getUsers.matchFulfilled,
      (state, action) => {
        const posts = action.payload?.filter(Boolean) || [];
        usersAdapter.setAll(state, posts);
      }
    );   
    
    builder.addMatcher(
      usersApi.endpoints.getUserById.matchFulfilled,
      (state, action) => {
        if (action.payload) {
          usersAdapter.upsertOne(state, action.payload);
        }
      }
    );
  },
});

export const { setSelectedUser, clearUsers } = usersSlice.actions;
export default usersSlice.reducer;

export const usersSelectors = usersAdapter.getSelectors<RootState>(
  state => state.users
);

export const selectSelectedPostId = (state: RootState) =>
  state.posts.selectedPostId;
