import React, { useState, useEffect } from 'react';
import { supabase } from './createClient';

function App() {
  const [user, setuser] = useState([]);

  const [adduser, setAdduser] = useState({
    firstname: "",
    lastname: ""
  })


  const Adduserdata = async (event) => {
    event.preventDefault();

    const { data, error } = await
      supabase.from('user')
        .insert([{
          firstname: adduser.firstname, lastname: adduser.lastname
        }]);
    if (error) {
      console.error('Error adding user:', error.message);
    } else {
      console.log('User added successfully:', data);
     
      getuser();

      // Clear the form after submission
      setAdduser({
        firstname: "",
        lastname: ""
      });
    }
  }

const Deleteuser = async () =>{

}

  const handleChange = (event) => {

    setAdduser(prevFormData => ({

      ...prevFormData,
      [event.target.name]: event.target.value

    }));
  }


  async function getuser() {

    const { data } = await supabase.from("user").select('*')
    setuser(data);
    console.log(data, "ooioioiioi");
  }

  useEffect(() => {
    getuser();
  }, []);

  return (
    <>

      <div className='row'>
        <div className='col-lg-6 '>
          <div className="container p-3">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th className='text-center'>Action</th>
                </tr>
              </thead>
              <tbody>
                {user.map((users) =>
                  <tr key={users.id}>
                    <td>{users.firstname}</td>
                    <td>{users.lastname}</td>
                    <td><button className='btn btn-primary btn-sm'>Edit</button></td>
                    <td><button className='btn btn-danger btn-sm' onClick={() =>{Deleteuser(user.id)}} >Delete</button></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className="container p-5">
            <form onSubmit={Adduserdata}>
              <div className="form-group">
                <label >firstaname</label>
                <input type="text" name="firstname"
                  value={adduser.firstname}
                  onChange={handleChange}
                  className="form-control"
                  placeholder=" " />
              </div>
              <div className="form-group">
                <label >lastname</label>
                <input type="text" name="lastname"
                  value={adduser.lastname}
                  onChange={handleChange}
                  className="form-control"
                  id="" placeholder="" />
              </div>
              <button type="submit" className="btn btn-primary  mt-3" >Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
