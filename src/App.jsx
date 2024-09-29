import React , { useState, useEffect }from 'react';
import { supabase } from './createClient';

function App() {
  const [user, setuser] = useState([]);

  

  async function  getuser(){

    const { data} = await supabase.from("user").select('*')
     setuser(data);
     console.log(data, "ooioioiioi");
  }

  useEffect(() =>{
  getuser();
  }, []);

  return (
    <>
      <div>
        <h1>hello world</h1>
      </div>
    </>
  )
}

export default App
