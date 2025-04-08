import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Create from './pages/create'
import Header from './components/Header'
import { useDispatch } from 'react-redux'
import { setLoading,setError, setJobs} from './redux/slices/jobSlices'
import api from './utils/api'

const App = () => {
const dispatch = useDispatch()
// apiden iş verilerini al ve reducera ilet 
useEffect(() => {
   // Reducerdaki yüklenme durumu ayarla
   dispatch(setLoading())
  //  api'a istek at ve başarılı olursa verileri reducera ilet 
  api
  .get("./jobs")
      // İstek başarılı olursa reducer'a jobs verisini gönder
      .then((res) => dispatch(setJobs(res.data)))
      // İstek başarısız olursa reducer'a hata yı gönder
      .catch((err) => dispatch(setError(err)));
},[])

  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/create' element={<Create/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
