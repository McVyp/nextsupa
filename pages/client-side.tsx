import {useEffect, useState} from 'react'
import supabase from '../utils/supabase';

const ClientSide = () => {
  const [data, setData] = useState<any>(null);
  const[loading, setLoading] = useState<boolean>(true);

  useEffect(()=>{
    const getData = async() => {
      const {data, error} = await supabase.from('park').select()
      console.log({data, error});
      setLoading(false);
      setData(data);
    };
    getData();
  },[]);

  return loading? (
    <p>Loading...</p>
  ):(<pre>{JSON.stringify(data, null, 2)}</pre>)
}

export default ClientSide
