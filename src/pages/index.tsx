import Layout from '../components/Layout';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../store';
import { toggleDarkMode } from '../features/preferencesSlice';
import { useEffect } from 'react';
import { getContent } from '../features/contentSlice';
import ContentCard from '../components/ContentCard';

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { categories, darkMode } = useSelector((state: RootState) => state.preferences);
  const { items, loading, error } = useSelector((state: RootState) => state.content);

  useEffect(() => {
    dispatch(getContent(categories));
  }, [categories, dispatch]);

  return (
    <Layout>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-4">Personalized Feed</h1>
        <button
          onClick={() => dispatch(toggleDarkMode())}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Toggle Dark Mode
        </button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {items.map((item: any, index: number) => (
        <ContentCard
          key={index}
          title={item.title}
          description={item.description || 'No description'}
          image={item.urlToImage || '/default.jpg'}
          url={item.url}
        />
      ))}
    </Layout>
  );
}
