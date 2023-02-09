import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import style from "./Common.module.css";

const Home = () => {
  const [issues, setIssues] = useState([]);
  const [page, setPage] = useState(1);
  const [limit,setLimit] = useState(5);
 const totalPages = +((issues.length))

  useEffect(() => {
   axios.get( `https://api.github.com/repos/octocat/Spoon-Knife/issues?page=${page}&per_page=${limit}`)
   .then((res)=>{
    // console.log(res.data)
    setIssues(res.data)
   });
   
  }, [page,limit]);

  return (
    <div>
      <div>
   
     <table className={style.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Click Here</th>
        </tr>
      </thead>
      <tbody>
      {issues?.map((el)=>
      <tr key={el.id}>
        <td>{el.id}</td>
        <td>{el.title}</td>
        <td><Link className={style.link} to={`/${el.number}`}>Issue Details</Link></td>
      </tr>
      )}
      </tbody>
     </table>
     </div>
     <Pagination total={totalPages} current = {page} handlePage = {setPage}/>
     
    </div>
  )
}

export default Home
