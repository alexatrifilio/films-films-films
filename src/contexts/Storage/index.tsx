import { createContext, FC, ReactNode, useState } from "react";
import { Post, User } from "../../types";

type Context = {
  users?: User[];
  posts?: Post[];
  updateUsers: (users: User[]) => void;
  updatePosts: (posts: Post[]) => void;
};

const StorageContext = createContext<Context>({
  users: [],
  posts: [],
  updateUsers: () => {},
  updatePosts: () => {},
});

type Props = {
  children: ReactNode;
};

const StorageProvider: FC<Props> = ({ children }) => {
  const [users, setUsers] = useState<User[]>();
  const [posts, setPosts] = useState<Post[]>();

  const updateUsers = (users: User[]) => {
    setUsers(users);
  };

  const updatePosts = (posts: Post[]) => {
    setPosts(posts);
  };

  return (
    <StorageContext.Provider value={{ users, updateUsers, posts, updatePosts }}>
      {children}
    </StorageContext.Provider>
  );
};

export { StorageContext, StorageProvider };
