import "./Landing.css";

import { useNavigate } from "react-router-dom";
import { useAlert } from "../../hooks/useAlert";
import { motion } from "framer-motion"

import Page from "../page/Page";
import Button from "../../components/Button";
import Input from "../../components/Input";
import PinInput from "../../components/PinInput";



function Landing() {
  const navigate = useNavigate();
  const [AlertComponent, setAlert, resetAlert] = useAlert();

  const handleConnection = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await fetch('http://localhost:8080/connect', {
      method: "POST",
      body: formData,
      credentials: 'include',
    })

    response.status === 200 ? navigate('/room', { state: { 'isAdmin': false } }) :
      response.status === 400 ? setAlert({
        active: true,
        message: "יא פיתה בשמנת אין חדר כזה 😂😂😂",
        timeout: 1500,
        onFinish: () => null,
      }) :
        console.log(response.status);
  }

  return (
    <Page name="landing">
      <AlertComponent />
      <motion.h1 animate={{
        scale: [1, 1.6, 1.6, 1],
        rotate: [0, 0, 720],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        opacity: [1,0.2,1]
      }} transition={{duration:3}}>משחק המשפטים הרשמי</motion.h1>
      <form method="post" onSubmit={handleConnection}>
        <PinInput name="pin" type="number" label="צ׳ילבוטק" required />
        <Input name="uid" type="text" label='"שם"' required />
        <Button>התחרבנות</Button>
      </form>
      <a href="/admin">יצירת חדר</a>
    </Page>
  );
}

export default Landing;
