import "./App.css";
import { Emal } from "./components/Emal";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser } from "./redux/userSlice";
import { Header } from "./components/Header";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => dispatch(addUser(data)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header></Header>
      <Emal></Emal>
    </>
  );
}

export default App;
