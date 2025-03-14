import { NextRequest, NextResponse } from "next/server";
import { Friend, UserWithFriendsArrayIds } from "@/user.interface";
import users from "@/users.json";

export const GET = async (
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) => {
  const { id: userId } = await context.params;

  const user = users.find((user) => user.id === Number(userId)) as UserWithFriendsArrayIds;

  if (!user) {
    throw new NextResponse(
      JSON.stringify({
        error: `No se encontro el usuario con el id ${userId}`,
      }),
      { status: 404 }
    );
  }

  const friends: Array<Friend> = [];

  if (user?.friends?.length) {
    users
      .filter((user) => user.friends.includes(Number(userId)))
      .map((user) => {
        friends.push({
          id: user.id,
          name: user.name,
          profile_picture: user.profile_picture,
        });
      });
  }

  return Response.json({
    user: {
      ...user,
      friends,
    },
  });
};
