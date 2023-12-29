import { useDispatch } from "react-redux";
import { changeEmail } from "../redux/userSlice";
import { useSelector } from "react-redux";

export const Emal = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);

  const handleEmail = (e) => {
    dispatch(changeEmail(e.target.value));
  };
  return (
    <div>
      <input
        value={email}
        onChange={handleEmail}
        type="text"
        placeholder="Ingresa un email"
      />
      <br />
      <br />
      <button onClick={changeEmail}>Cambiar Email</button>
    </div>
  );
};
