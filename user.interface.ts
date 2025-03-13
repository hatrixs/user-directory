export interface User {
  id: number;
  name: string;
  bio: string;
  tags: string[];
  profile_picture: string;
}

export interface UserWithFriendsObject extends User {
  friends: Array<Friend>;
}

export interface UserWithFriendsArrayIds extends User {
  friends: Array<number>;
}


export type Friend = {
    id: number;
    name: string;
    profile_picture: string;
  }

export interface GetUserResponse {
  user: UserWithFriendsObject;
}

export interface GetUsersResponse {
  users: UserWithFriendsArrayIds[]
}
