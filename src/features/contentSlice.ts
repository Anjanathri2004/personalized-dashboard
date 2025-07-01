import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchNews } from '../services/api';

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

interface ContentState {
  items: Article[];
  loading: boolean;
  error: string | null;
}

export const getContent = createAsyncThunk<Article[], string[]>(
  'content/getContent',
  async (categories) => {
    const allContent = await Promise.all(
      categories.map((cat) => fetchNews(cat))
    );
    return allContent.flat();
  }
);

const initialState: ContentState = {
  items: [],
  loading: false,
  error: null,
};

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getContent.pending, (state) => {
        state.loading = true;
      })
      .addCase(getContent.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getContent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load content';
      });
  },
});

export default contentSlice.reducer;
