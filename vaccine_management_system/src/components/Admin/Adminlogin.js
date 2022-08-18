import React from 'react';

const Adminlogin = () => {
    return (
    <div className="container">
      <div className="py-4">
        <h1>Admin Login!</h1>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Admin Username</label>
            <br/>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
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

export default Adminlogin;