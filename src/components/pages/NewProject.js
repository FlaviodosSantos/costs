import styles from "./NewProject.module.css";
import ProjectForm from "../project/ProjectForm";
import { useNavigate } from "react-router-dom";

//import { useHistory } from "react-router-dom";

function NewProject() {
  //const history = useHistory();
  const history = useNavigate();

  function createPost(project) {
    // initialize cost and services
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-type": "application/jason",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        //redirect
      })
      .catch((err) => console.log());
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Ciar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  );
}

export default NewProject;
