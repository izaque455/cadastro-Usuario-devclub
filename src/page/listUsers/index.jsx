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


  async function deleteUsers(id) {
    await api.delete(`/user/${id}`)

    const upadateUsers = users.filter( user => user.id !== id)

    setUsers(upadateUsers)
  }

  return (
    <Container>
      <TopBackground /> 
     <Title>Lista de Usuarios</Title>

     
     <ContainerUsers>
      {users.map((user) => (
        <CardUsers key={user._id}>
          <AvatarUser  src={`https://ui-avatars.com/api/?name=${user.name}`}


 />
        <div>
          <h3>{user.name}</h3>
          <p>{user.age}</p>
          <p>{user.email}</p>
          
        </div>
        <TrashIcon onClick={() => deleteUsers(user._id)} src= {Trash} alt="Icone-lixo"/>
        </CardUsers>
      ))}
      </ContainerUsers>

      <Button type="butonn" onClick={() => navigate("/")}>
        Voltar
      </Button>
    </Container>
  );
}

export default ListUsers;