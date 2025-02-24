import { useNavigate } from "react-router-dom";

const HomePage = () => {
const navigate = useNavigate()
  return (
    <>
      <h1>Вітаємо на головній сторінці</h1>
      <button onClick={() => navigate("/about")}>Перейти на сторінку "Про нас"</button>
    </>
  );
};

export default HomePage;