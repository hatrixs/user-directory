import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { UserWithFriendsArrayIds } from "@/user.interface";

interface Props {
  user: UserWithFriendsArrayIds;
}

export const UserCard = ({ user }: Props) => (
  <Card className="p-4 hover:shadow-lg transition-all">
    <div className="flex gap-4 items-center">
      <Image
        src={user.profile_picture}
        alt={user.name}
        width={60}
        height={60}
        className="rounded-full"
      />
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-medium">{user.name}</span>
        <div className="flex gap-2">
          {user.tags?.map((tag) => (
            <Badge key={`${user.id + tag}`} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  </Card>
);
