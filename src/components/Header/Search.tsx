import { Form } from "react-bootstrap";

import IconButton from "src/components/UI/IconButton";
import magnifier from "src/static/icons/magnifier.png";
import styleClasses from "src/components/Header/styles.module.scss";

const Search = () => {
  return (
    <div className={styleClasses.search}>
      <Form.Control
        type="text"
        placeholder="Поиск"
        className={styleClasses.searchInput}
      />
      <IconButton imageUrl={magnifier} imageAlt="Search button" />
    </div>
  );
};

export default Search;
