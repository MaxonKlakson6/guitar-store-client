import { Form } from "react-bootstrap";
import styleClasses from "src/pages/Store/components/Filter/styles.module.scss";

const Filter = () => {
  return (
    <div className={styleClasses.filter}>
      <h3 className={styleClasses.title}>Сортировка по:</h3>
      <Form>
        <Form.Check type="radio" label="Дорогие выше" />
        <Form.Check type="radio" />
      </Form>
    </div>
  );
};

export default Filter;
