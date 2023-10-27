import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Detail from './components/Detail/Detail'
import Reservation from './pages/Reservation';
import ErrorPage from './pages/ErrorPage';
import Splash from './pages/Splash';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import PrivateRoute from './pages/PrivateRoute';
import AddYacht from './pages/AddYacht';
import DeleteYacht from './pages/DeleteYacht';
import Reserve from './pages/Reserve';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/main" element={<PrivateRoute element={<Main />} />} />
      <Route path="/details/:id" element={<PrivateRoute element={<Detail />} />} />
      <Route path="/reservation" element={<PrivateRoute element={<Reservation />} />} />
      <Route path="/reserve" element={<PrivateRoute element={<Reserve />} />} />
      <Route path="/new/yacht" element={<PrivateRoute element={<AddYacht />} />} />
      <Route path="/delete/:id/yacht" element={<PrivateRoute element={<DeleteYacht />} />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
