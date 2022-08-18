import React from 'react'

const UserVaccineRegistration = () => {
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow py-4">
        <h1 className='text-center mb-4'>Vaccines Registration</h1>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <br/>
            <input
              type="name"
              class="form-control mr-2"
              id="exampleInputEmail1"
              name="name"
              value=""
            />
          </div>
          <div class="form-group mr-2">
            <label for="exampleInputNumber1">NID</label>
            <input
              type="number"
              class="form-control"
              id="exampleInputNumber1"
              name="number"
              value=""
            />
          </div>
             <div class="form-group mr-2">
            <label for="exampleInputContact">Contact Number</label>
            <input
              type="number"
              class="form-control"
              id="exampleInputContact"
              name="number"
              value=""
            />
          </div>
             <div class="form-group mr-2">
            <label for="exampleInputSex">Gender</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputSex"
              name="gender"
              value=""
            />
          </div>
          <div class="form-group mr-2">
            <label for="exampleInputPassword1">Date of Birth </label>
            <input
              type="date"
              class="form-control"
              id="exampleInputPassword1"
              name="date"
              value=""
            />
          </div>
             <div class="form-group">
            <label for="exampleInputEmail1">Occupation</label>
            <br/>
            <input
              type="name"
              class="form-control mr-2"
              id="exampleInputEmail1"
              name="name"
              value=""
            />
          </div>
             <div class="form-group">
            <label for="exampleInputEmail1">Info on past Diseases</label>
            <br/>
            <input
              type="name"
              class="form-control mr-2"
              id="exampleInputEmail1"
              name="name"
              value=""
            />
          </div>
             <div class="form-group">
            <label for="exampleInputEmail1">Present Address</label>
            <br/>
            <input
              type="name"
              class="form-control mr-2"
              id="exampleInputEmail1"
              name="name"
              value=""
            />
          </div>
             <div class="form-group">
            <label for="exampleInputEmail1">From where willing to get Vaccinated</label>
            <br/>
            <input
              type="name"
              class="form-control mr-2"
              id="exampleInputEmail1"
              name="name"
              value=""
            />
          </div>
           <div class="form-group ">
            <label for="exampleInputEmail1">Registration Date</label>
            <br/>
            <input
              type="date"
              class="form-control mr-2"
              id="exampleInputEmail1"
              name="name"
              value=""
            />
          </div>
          <br/>
          <button type="submit" class="btn mr-3 btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default UserVaccineRegistration