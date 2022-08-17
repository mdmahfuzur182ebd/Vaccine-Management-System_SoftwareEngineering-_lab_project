import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";

const Vaccines = () => {
   const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []); 

   const loadUsers = async () => {
   

  };

  const deleteUser = async id => {
   
  };


  return (
    <div className="container">
      <div className="py-">
        <h1>Vaccines Information</h1>
        <table class="table table-primary border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Vaccine Name</th>
              <th scope="col">Company Name</th>
              <th scope="col">Import Date</th>
              <th scope="col">Production Date</th>
              <th scope="col">Expiry Date</th>
              <th scope="col">Production Countory</th>
              <th scope="col">Amount of Vaccines Stored</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* <tbody>
             <tr className="table-light">
                 <th scope="row">1</th>
                 <td>Mark</td>
                 <td>Dook</td>
                 <td>23-4-22</td>
                 <td>22-08-23</td>
                 <td>22-09-34</td>
                 <td>India</td>
                 <td>500k</td>
             </tr>
          </tbody> */}
          <tbody>
            {users.map((user, index) => (
              <tr className="table-light">
                <th scope="row">{index + 1}</th>
                <td >{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.email}</td>
                <td>{user.email}</td>
                <td>{user.email}</td>
                <td>{user.email}</td>
                <td>
                  <Link class="btn btn-outline-primary mr-2">Edit</Link>
                  <Link class="btn btn-danger">Delet</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Vaccines