import React, { useEffect, useState } from "react";
import FirstSingle from "../FirstSingle/FirstSingle";
import "./FirstTable.css";

const FirstTable = () => {
  const [firstTableData, setFirstTableData] = useState([]);

  useEffect(() => {
    fetch("firstTable.json")
      .then(res => res.json())
      .then(data => setFirstTableData(data));
  }, []);

  return (
    <div className="overflow-x-auto mx-[20px]">
      <table className="table w-full border">
        <thead>
          <tr>
            <th>
              <span>Name</span>
              <span className="ml-[14px]">
                <i class="fa-solid fa-arrow-up font-bold"></i>
                <i class="fa-sharp fa-solid font-bold fa-arrow-down"></i>
              </span>
            </th>
            {/*  */}
            <th>
              <span>City</span>
              <span className="ml-[14px]">
                <i class="fa-solid fa-arrow-up font-bold"></i>
                <i class="fa-sharp fa-solid font-bold fa-arrow-down"></i>
              </span>
            </th>
            {/* <th>Email address</th> */}
            {/*  */}
            <th>
              <span>Email address</span>
              <span className="ml-[14px]">
                <i class="fa-solid fa-arrow-up font-bold"></i>
                <i class="fa-sharp fa-solid font-bold fa-arrow-down"></i>
              </span>
            </th>
            {/* <th>Joining Date</th> */}
            {/*  */}
            <th>
              <span>Joining Date</span>
              <span className="ml-[14px]">
                <i class="fa-solid fa-arrow-up font-bold"></i>
                <i class="fa-sharp fa-solid font-bold fa-arrow-down"></i>
              </span>
            </th>
            {/* <th>Role</th> */}
            {/*  */}
            <th>
              <span>Role</span>
              <span className="ml-[14px]">
                <i class="fa-solid fa-arrow-up font-bold"></i>
                <i class="fa-sharp fa-solid font-bold fa-arrow-down"></i>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {firstTableData.map(data1 => (
            <FirstSingle key={data1.city} data1={data1}></FirstSingle>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FirstTable;
