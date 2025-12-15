import React from 'react';
import { HashRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Builder from './pages/Builder';
import Analysis from './pages/Analysis';
import Subscribe from './pages/Subscribe';

// Placeholder for missing pages
const Placeholder = ({ title }: { title: string }) => (
  <div className="min-h-[50vh] flex items-center justify-center bg-stone-50">
    <h1 className="text-3xl font-serif text-stone-400">{title} - Coming Soon</h1>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/builder" element={<Builder />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/journal" element={<Placeholder title="Journal" />} />
          <Route path="/about" element={<Placeholder title="About Us" />} />
          <Route path="*" element={<Placeholder title="Page Not Found" />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;