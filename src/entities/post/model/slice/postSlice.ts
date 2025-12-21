import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Post } from '../types';
import type { RootState } from '../../../../app/providers/store';
import { postsApi } from '../../api/postsApi';


export const postsAdapter = createEntityAdapter<Post>({});

interface PostSliceState {
  selectedPostId: number | null;
}

const initialState = postsAdapter.getInitialState<PostSliceState>({
  selectedPostId: null,
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setSelectedPost: (state, action: PayloadAction<number | null>) => {
      state.selectedPostId = action.payload;
    },
    clearPosts: state => {
      postsAdapter.removeAll(state);
      state.selectedPostId = null;
    },
  },
  extraReducers: builder => {   
    builder.addMatcher(
      postsApi.endpoints.getPosts.matchFulfilled,
      (state, action) => {
        const posts = action.payload?.filter(Boolean) || [];
        postsAdapter.setAll(state, posts);
      }
    );
   
    builder.addMatcher(
      postsApi.endpoints.getPostsByUserId.matchFulfilled,
      (state, action) => {
        const posts = action.payload?.filter(Boolean) || [];
        postsAdapter.upsertMany(state, posts);
      }
    );
    
    builder.addMatcher(
      postsApi.endpoints.getPostById.matchFulfilled,
      (state, action) => {
        if (action.payload) {
          postsAdapter.upsertOne(state, action.payload);
        }
      }
    );
  },
});

export const { setSelectedPost, clearPosts } = postsSlice.actions;
export default postsSlice.reducer;

export const postsSelectors = postsAdapter.getSelectors<RootState>(
  state => state.posts
);

export const selectSelectedPostId = (state: RootState) =>
  state.posts.selectedPostId;
