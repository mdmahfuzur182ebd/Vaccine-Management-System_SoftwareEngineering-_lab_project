import React from 'react';

const NurseLogin = () => {
    return (
    <div className="container">
      <div className="w-75 mx-auto shadow py-4">
        <h1 className='text-center mb-4' style={{color:'white'}}>Nurse Login!</h1>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1"  style={{color:'white'}}>Nurse Username</label>
            <br/>
            <input
              type="email"
              class="form-control mr-2"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value=""
            />
          </div>
          <div class="form-group mr-2">
            <label for="exampleInputPassword1"  style={{color:'white'}}>Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              name="password"
              value=""
            />
          </div>
          <br/>
          <button type="submit" class="btn mr-3 btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default NurseLogin;