import "./Landing.css";

import { useNavigate } from "react-router-dom";

import Page from "../page/Page";
import Button from "../../components/Button";
import Input from "../../components/Input";
import PinInput from "../../components/PinInput";



function Landing() {
  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  }
  const handleConnection = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await fetch('http://localhost:8080/connect', {
      method: "POST",
      body: formData,
      credentials: 'include',
      // redirect: 'follow',
    })

    if (response.status === 200) {
      routeChange('/room');
    }
  }

  return (
    <Page name="landing">
      <h1>משחק המשפטים</h1>
      <form method="post" onSubmit={handleConnection}>
        <PinInput name="pin" type="number" label="צ׳ילבוטק" required />
        <Input name="uid" type="text" label="שם" required />
        <Button>התחברות</Button>
      </form>
    </Page>
  );
}

export default Landing;
