import "./Landing.css";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Page from "../page/Page";
import Button from "../../components/Button";
import Input from "../../components/Input";
import PinInput from "../../components/PinInput";
import Alert from "../../components/Alert";



function Landing() {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);

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
      navigate('/room');
    }
    else if (response.status === 400) {
      setAlert(true);
    }
  }

  return (
    <Page name="landing">
      {alert && <Alert message={'יא פיתה בשמנת אין חדר כזה 😂😂😂'} timeout={2000} finish={() => setAlert(false)} slideIn/>}
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
