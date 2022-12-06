"use client"

import {use} from 'react';
import supabase from '../../../utils/supabase';

async function getData () {
  const {data, error} = await supabase.from('park').select();
  return (data);
}
const ClientSide = () => {
  const data = use(getData());
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default ClientSide
