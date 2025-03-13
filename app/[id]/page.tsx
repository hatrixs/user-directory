import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GetUserResponse } from "@/user.interface";
import { UserProfile } from "@/components/user-profile";

type Params = Promise<{ id: string }>;

export default async function UserPage(props: { params: Params }) {
  const { id } = await props.params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}`
  );

  const { user }: GetUserResponse = await response.json();

  return (
    <div className="flex flex-col gap-6">
      <Link href="/">
        <Button variant="link" className="cursor-pointer" asChild>
          <div className="flex items-center gap-4">
            <ArrowLeft />
            <span>Regresar al listado</span>
          </div>
        </Button>
      </Link>

      <UserProfile user={user} />
    </div>
  );
}
