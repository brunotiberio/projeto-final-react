import { useContext, useEffect } from "react";
import ContentCreator from "../../components/card-content-creator";

import { UserContext } from "../../contexts/UserContext";

import "./index.css";

function AllJournalists() {
  const { getAllUsers, allUsers } = useContext(UserContext);

  useEffect(() => {
    getAllUsers();
    console.log(allUsers);
  }, []);
  return (
    <div>
      <h2>Criadores de Conteúdo</h2>
      <div className="apenas-teste">
        {allUsers?.map((user) => {
          if (user.type === "content creator") {
            return (
              <ContentCreator
                name={user.name}
                avatar={user.avatar}
                city={user.data?.adress.city}
                state={user.data?.adress.state}
                key={user.id}
                id={user.id}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default AllJournalists;
