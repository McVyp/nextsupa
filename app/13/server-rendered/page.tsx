import "server-only";

import supabase from '../../../utils/supabase';

// works with supabase to refresh data from time-to-time
export const revalidate = 0;

async function getData() {
    const {data} = await supabase.from('park').select();
    return {data};
}

export default async function SSR() {
    const {data} = await getData();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

