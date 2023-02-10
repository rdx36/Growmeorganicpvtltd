import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTable } from "react-table";
import { DataGrid } from "@mui/x-data-grid";
import ReactDataGrid from "react-data-grid";

const Secoundpage = () => {
  const [data1, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((result) => {
      result.json().then((resp) => {
        // console.warn("result", resp);
        setData(resp);
      });
    });
  }, []);
  console.log(data1);

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => {
  //       console.log(res.data);
  //       setData(res?.data?.data);
  //     })
  //     .catch((err) => {
  //       alert("something went wrong");
  //     });
  // }, []);

  return (
    <div>
      {" "}
      Display Data
      {/* {<pre>{JSON.stringify(data1, null, 2)}</pre>} */}
      <table>
        <tr>
          <th>userId</th>
          <th>id</th>
          <th>title</th>
          <th>body</th>
        </tr>
        {data1.map((item: any) => {
          return (
            <tr>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default Secoundpage;
