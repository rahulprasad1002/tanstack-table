import { User, columns } from './columns';
import { DataTable } from './data-table';

async function getUsers(): Promise<User[]> {
  const res = await fetch(
    'https://671ccdbe09103098807b3e5b.mockapi.io/api/v1/users'
    // Used Mock Api to imitate a backend end point
  );

  const data = await res.json();

  // validate with Zod before returning

  return data;
}

export default async function page() {
  const data = await getUsers();
  return (
    <section className="py-24">
      <div className="container">
        <h1 className="mb-6 text-3xl font-bold">All Users</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
}
