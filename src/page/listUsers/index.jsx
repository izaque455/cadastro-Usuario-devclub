import Button from "../../components/Button";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import TopBackground from "../../components/TopBackground";
import { AvatarUser, CardUsers, Container, ContainerUsers, Title, TrashIcon } from "./style.js";
import Trash from "../../assets/trash (3).svg"
function ListUsers() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/user");
      console.log(data);
      setUsers(data);
    }

    getUsers();
  }, []);

  return (
    <Container>
      <TopBackground /> 
     <Title>Lista de Usuarios</Title>

     
     <ContainerUsers>
      {users.map((user) => (
        <CardUsers key={user.id}>
          <AvatarUser />
        <div >
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.age}</p>
        </div>
        <TrashIcon src= {Trash} alt="Icone-lixo"/>
        </CardUsers>
      ))}
      </ContainerUsers>

      <Button type="bun" theme="primary" onClick={() => navigate("/")}>
        Voltar
      </Button>
    </Container>
  );
}

export default ListUsers;