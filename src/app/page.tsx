"use client";
import useSWR, { mutate } from 'swr';
import Inputpage from './input';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function Home() {
  const { data, error } = useSWR('http://localhost:3000/api/users', fetcher);

  if (error) return <div>Error loading data...</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <div className='mt-10 pl-4'>
        <Inputpage onSuccess={() => mutate('http://localhost:3000/api/users')} />
      </div>
      <br />
      {data.length > 0 ? (
        data.map((val: any) => (
          <p key={val.id}>{val.name}</p>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}
