//import { useState } from 'react';
import { Route,Routes, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { TransactionPage } from './pages/Transaction';
import { SignUpPage } from './pages/SignUpPage';
import Header from './components/ui/Header';
import { GET_AUTHENTICATED_USER } from './graphql/queries/user.queries';
import { useQuery } from '@apollo/client';
import { Toaster } from 'react-hot-toast';

function App() {
  //const [count, setCount] = useState(0)
  
  const { loading, data, error } = useQuery(GET_AUTHENTICATED_USER);
  console.log("Loading:",loading);
  console.log("Authenicated User: ",data);
  console.log("Error:",error);
  if(loading) return null;
  return (
    <>
        {data?.authUser && <Header/>}
       <Routes>
				<Route path='/' element={data.authUser?<HomePage /> : < Navigate to= "/login" />}/>
				<Route path='/login' element={!data.authUser?<LoginPage /> : < Navigate to= "/" />} />
				<Route path='/signup' element={!data.authUser?<SignUpPage />: < Navigate to= "/" />} />
				<Route path='/transaction/:id' element={data.authUser?<TransactionPage /> : < Navigate to= "/" /> }	/>
        
  <Route path='*' element={<NotFoundPage />} />
  </Routes>
  <Toaster/>
    </>
  )
}

export default App
