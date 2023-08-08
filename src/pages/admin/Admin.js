import { useNavigate } from "react-router-dom";
import { useAlert } from "../../hooks/useAlert";


import Landing from "../landing/Landing"
import Page from "../page/Page"
import Input from "../../components/Input";
import Button from "../../components/Button";

function Admin() {
  const navigate = useNavigate();
  const [AlertComponent, setAlert, resetAlert] = useAlert();


  const handleCreateRoom = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await fetch('http://localhost:8080/create-room', {
      method: "POST",
      body: formData,
      credentials: 'include',
    })

    response.status === 200 ? navigate('/room', { state: {'isAdmin': true} }) :
      response.status === 400 ? setAlert({
        active: true,
        message: "יא פיתה במרק ארנבים יש בעיות בשרת 😂😂😂",
        timeout: 1500,
        onFinish: () => null,
      }) :
        console.log(response.status);
  }
  return (
    <Page name={'landing'}>
      <AlertComponent />
      <h2>צור צ׳ילבוטק</h2>
      <form method="post" onSubmit={handleCreateRoom}>
        <Input name="uid" type="text" label="שם" required />
        <Input name="selfRead" type="checkbox" label="קריאה עצמית" />
        <Input name="readerVisible" type="checkbox" label="הצג את הכותב" />
        <Button>פתח.י צ׳ילבוטק</Button>
      </form>
    </Page>
  );
}

export default Admin;
