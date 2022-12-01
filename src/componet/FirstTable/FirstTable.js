import React from "react";
import "./FirstTable.css";

const FirstTable = () => {
  return (
    <div className="mx-[30px] border">
      <h1 className="text-2xl">This is first table</h1>
      <br />
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>
                {" "}
                <span>Name</span>
                <span className="ml-[14px]">
                  <i class="fa-solid fa-arrow-up font-bold"></i>
                  <i class="fa-sharp fa-solid font-bold fa-arrow-down"></i>
                </span>
              </th>
              {/*  */}
              <th>
                {" "}
                <span>City</span>
                <span className="ml-[14px]">
                  <i class="fa-solid fa-arrow-up font-bold"></i>
                  <i class="fa-sharp fa-solid font-bold fa-arrow-down"></i>
                </span>
              </th>
              {/* <th>Email address</th> */}
              {/*  */}
              <th>
                {" "}
                <span>Email address</span>
                <span className="ml-[14px]">
                  <i class="fa-solid fa-arrow-up font-bold"></i>
                  <i class="fa-sharp fa-solid font-bold fa-arrow-down"></i>
                </span>
              </th>
              {/* <th>Joining Date</th> */}
              {/*  */}
              <th>
                {" "}
                <span>Joining Date</span>
                <span className="ml-[14px]">
                  <i class="fa-solid fa-arrow-up font-bold"></i>
                  <i class="fa-sharp fa-solid font-bold fa-arrow-down"></i>
                </span>
              </th>
              {/* <th>Role</th> */}
              {/*  */}
              <th>
                {" "}
                <span>Role</span>
                <span className="ml-[14px]">
                  <i class="fa-solid fa-arrow-up font-bold"></i>
                  <i class="fa-sharp fa-solid font-bold fa-arrow-down"></i>
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <tr>
              <th>
                <div className="flex items-center justify-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-[25px]">
                      <img
                        src="https://png.pngtree.com/png-clipart/20201016/ourmid/pngtree-rustic-flower-graphic-png-image_2368863.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>Blue</td>
            </tr>
            {/* <!-- row 2 --> */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
              <td>Purple</td>
            </tr>
            {/* <!-- row 3 --> */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FirstTable;
