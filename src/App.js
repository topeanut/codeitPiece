import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Group } from './pages/Group/Group';
import DetailPost from './pages/Post/detailPost'; //when use default export
import { NotFoundPage } from './pages/NotFoundPage';
import { Header } from './components/Header/Header';
import CreatePost from 'pages/Post/CreatePost';

function App() {
  const location = useLocation();
  const showCreateGroupButton = location.pathname === '/';

  return (
    <div className="App">
      <Header showCreateGroupButton={showCreateGroupButton} />
      <Routes>
        <Route path="/" element={<Group />} />
        <Route path="detailpost" element={<DetailPost />} />
        <Route path="createpost" element={<CreatePost />} />
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
