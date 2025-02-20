import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import authService from './Appwrite/auth';
import { login, logout } from './Store/authSlice';
import { Header, Footer } from './Components';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
      dispatch(login({userData}));
    } else {
      dispatch(logout());
    }
  })
    .finally(() => setLoading(false));
  }, [])

  return loading ? null : (
    <div className='h-screen w-full bg-gray-500'>
      <Header/>
      <main>
        hello
      </main>
      <Footer/>
    </div>
  )
}

export default App
