import React, { useState, useEffect } from 'react';
import { supabase } from './createClient';

function App() {
  const [user, setuser] = useState([]);



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
      <div className='d-flex justify-content-center'>
        <div className="container mt-3">
          <h2>Striped Rows</h2>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
                <td> <button>Edit</button></td>
                <td>  <button>Delete</button></td>

              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App
