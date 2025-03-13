import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GetUserResponse } from "@/user.interface";

interface PageParams {
  params: {
    id: string;
  };
}

export default async function UserPage({ params }: PageParams) {
  const { id } = await params;

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

      <div className="max-w-4xl mx-auto">
        <Card className="p-6 hover:shadow-lg transition-all w-full">
          <div className="flex gap-4 items-center">
            <Image
              src={user.profile_picture}
              alt={user.name}
              width={100}
              height={100}
              className="rounded-full"
            />
            <div className="flex flex-col gap-2">
              <span className="text-3xl font-bold">{user.name}</span>
              <div className="flex gap-2">
                {user.tags?.map((tag) => (
                  <Badge key={`${user.id + tag}`} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">About me</h3>
            <span className="text-muted-foreground">{user.bio}</span>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">Friends</h3>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
              {user.friends?.map((friend) => (
                <Link
                  key={friend.id}
                  href={`/${friend.id}`}
                  className="hover:bg-gray-100 px-4 py-2 rounded-2xl"
                >
                  <div className="flex items-center gap-4 h-14">
                    <Image
                      src={friend.profile_picture}
                      alt={friend.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <span className="font-medium">{friend.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
