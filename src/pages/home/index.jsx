import React from 'react'
import { useSelector } from 'react-redux'
import Filter from './Filter'
import "./home.scss";
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import Card from '../create/Card';
const Home = () => {
  // Store'a abone ol ve jobs verisini yazdır
 const {isLoading,error,jobs
 } = useSelector((store) => store.jobReducer)
  return (
    <div className='home-page'>
      {/* filter */}
      <Filter/>

      {isLoading ? <Loader/> : error ? <Error info={error}/> : (
         <div className="cards-wrapper">
         {jobs.length === 0 ? (
           <p className="warn">Aranılan Kriterlere Uygun Başvuru Bulunamadı</p>
         ) : (
           jobs.map((job) => <Card key={job.id} job={job} />)
         )}
       </div>
      ) }
    </div>
  )
}

export default Home
