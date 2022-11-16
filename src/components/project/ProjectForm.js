import styles from "./ProjectForm.module.css";
import Input from "../form/Input";

function ProjectForm() {
  return (
    <form className={styles.form}>
      <Input />
      <div>
        <input type="number" placeholder="Insira o orçamento do projeto" />
      </div>
      <div>
        <select name="category_id">
          <option disable selected>
            Selecione a categoria
          </option>
        </select>
      </div>
      <div>
        <input type="submit" value="Criar Projeto" />
      </div>
    </form>
  );
}

export default ProjectForm;
