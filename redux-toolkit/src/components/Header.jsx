import { useSelector } from "react-redux";

export const Header = () => {
  const user = useSelector((state) => state.user);

  return (
    <header>
      <h1>testr</h1>
      <ul>
        <li>Name :{user.name}</li>
        <li>Email :{user.email}</li>
        <li>UserName :{user.username}</li>
      </ul>
    </header>
  );
};
