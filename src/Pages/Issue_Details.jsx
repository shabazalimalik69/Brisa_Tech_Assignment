import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import style from "./Common.module.css";

const User_Details = () => {
  const [issue, setIssue] = useState({});
  const params = useParams();
  // console.log(params.number)

  useEffect(() => {
    fetch(
      `https://api.github.com/repos/octocat/Spoon-Knife/issues/${params.number}`
    )
      .then((res) => res.json())
      .then((res) => {
        // console.log(res)
        setIssue(res);
      });
  }, [params.number]);

  return (
    <div>
      <table className={style.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tile</th>
            <th>Number</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody key={issue.id}>
          <td>{issue?.id}</td>
          <td>{issue?.title}</td>
          <td>{issue?.number}</td>
          <td>
            <img className={style.photo} src={issue?.user?.avatar_url} />
          </td>
        </tbody>
      </table>
      <Link to="/">
        <button className={style.button}>Go Back</button>
      </Link>
    </div>
  );
};

export default User_Details;
