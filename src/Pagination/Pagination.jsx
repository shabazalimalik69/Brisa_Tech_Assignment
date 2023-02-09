import React from 'react'
import style from "./Pagination.module.css"
const Pagination = ({total,current, handlePage}) => {
    const pages = new Array(total).fill(0).map((el,i)=>
    <button className={style.button} disabled = {current===i+1} onClick={()=>handlePage(i+1)} >{i+1}</button>
    )
  return (
    <div className={style.button1}>
      {pages}
    </div>
  )
}

export default Pagination
