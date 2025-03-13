import users from "@/users.json";

export const GET = async () => {
  // Fake get data
  const promise = new Promise((res) => {
    setTimeout(() => {
      res(users);
    }, 2000);
  });

  const data = await promise;

  return Response.json({
    users: data,
  });
};
