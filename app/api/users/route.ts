import users from "@/users.json";

export const GET = async () => {
  return Response.json({
    users,
  });
};
