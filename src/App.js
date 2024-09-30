import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Group } from './pages/Group/Group';
import { Post } from './pages/Post/Post';
import { NotFoundPage } from './pages/NotFoundPage';
import { Header } from './components/Header/Header';

function App() {
 

  const location = useLocation();
  const showCreateGroupButton = location.pathname === '/';

  return (
    <div className="App">
      <Header
        showCreateGroupButton={showCreateGroupButton}
      />
      <Routes>
        <Route path="/" element={<Group />} />
        <Route path="post" element={<Post />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

const MainApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default MainApp;
