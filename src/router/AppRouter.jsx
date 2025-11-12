import { Route, Routes } from 'react-router-dom';
import Blog from '../pages/Blog';
import HomePage from '../pages/HomePage';
import Layout from '../components/layout/Layout';
import Library from '../pages/Library';
import Price from '../pages/Price';
import Product from '../pages/Product';
import Support from '../pages/Support';

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/price" element={<Price />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/library" element={<Library />} />
        <Route path="/support" element={<Support />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
