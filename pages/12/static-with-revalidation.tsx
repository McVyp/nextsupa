import supabase from '../../utils/supabase';

export async function getStaticProps() {
    const {data} = await supabase.from('park').select();
    return {
        props:{
            data,
        },
        revalidate: 10,
    };
}

export default function SSGRevalidate({data} : {data:any}) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

