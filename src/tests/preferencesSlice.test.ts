import preferencesReducer, { setCategories, toggleDarkMode } from '../features/preferencesSlice';

describe('preferencesSlice', () => {
  it('should toggle dark mode', () => {
    const initialState = { categories: [], darkMode: false };
    const state = preferencesReducer(initialState, toggleDarkMode());
    expect(state.darkMode).toBe(true);
  });

  it('should set categories', () => {
    const initialState = { categories: [], darkMode: false };
    const state = preferencesReducer(initialState, setCategories(['tech', 'music']));
    expect(state.categories).toEqual(['tech', 'music']);
  });
});
