import { useState } from "react";
import FormWrapper from "./Components/Form/FormWrapper";
import Wrapper from "./Components/List/Wrapper";


function App() {
  const [users, setUsers] = useState([])

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [...prevUsers, user]
    })
  }

  return (
    <div className="flex justify-center flex-col items-center mt-10">
      <FormWrapper onAddUser={addUserHandler}/>
      <Wrapper users={users} />
    </div>
  );
}

export default App;
