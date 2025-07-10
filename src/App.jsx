import Button from "./components/Button";
import Form from "./components/Form";
import Hersection from "./components/Hersection";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import HomePage from "./pages/HomePage";

const App = () => {
  const text = "welcome";
  return (
    <div>
      {/* <Navbar />
      <HomePage /> */}
      {/* <Button text="Register" color={12} />
      <Button text="Login" color="blue" />
      <Button text="Read more" color="green" /> */}

      <Form type="login" />
    </div>
  );
};
export default App;
