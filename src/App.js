import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Group } from './pages/Group/Group';
import { Post } from './pages/Post/Post';
import { NotFoundPage } from './pages/NotFoundPage';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Group />} />
          <Route path="post" element={<Post />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>{' '}
    </div>
  );
}
export default App;
