import React from "react";

const FirstSingle = ({ data1 }) => {
  console.log(data1.length);
  const { person, city, email, joiningDate, role } = data1;
  const { name, avatar } = person;
  console.log(person);
  return (
    <tr>
      <th>
        <div className="flex items-center justify-start space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-[25px]">
              <img
                src={avatar}
              />
              {/* <img
                src="https://png.pngtree.com/png-clipart/20201016/ourmid/pngtree-rustic-flower-graphic-png-image_2368863.jpg"
                alt="Avatar Tailwind CSS Component"
              /> */}
            </div>
          </div>
          <div>
            <div className="font-bold">{email}</div>
          </div>
        </div>
      </th>
      <td>{city}</td>
      <td>{email}</td>
      <td>{joiningDate}</td>
      <td>{role}</td>
    </tr>
  );
};

export default FirstSingle;
