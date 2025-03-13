import { UserCard } from "@/components/user-card";
import { GetUsersResponse } from "@/user.interface";
import Link from "next/link";

export default async function UsersPage() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`);
  const { users }: GetUsersResponse = await response.json();

  return (
    <div className="h-screen bg-gray-50">
      <div className="container mx-auto p-4">
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-3xl">User Directory</h1>
          <section>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
              {users?.map((user) => (
                <Link key={user.id} href={`/${user.id}`}>
                  <UserCard user={user} />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
