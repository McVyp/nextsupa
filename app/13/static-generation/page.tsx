import supabase from '../../../utils/supabase';

async function getData() {
    const {data} = await supabase.from('park').select();
    return {data};
}

export default async function SSR() {
    const {data} = await getData();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

