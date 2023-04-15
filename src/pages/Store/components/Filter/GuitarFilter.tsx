import { Form } from "react-bootstrap";

import CheckBoxBlock from "src/pages/Store/components/Filter/CheckBoxBlock";
import { CheckBox, CheckBoxGroup } from "src/pages/Store/types/filterTypes";
import styleClasses from "src/pages/Store/components/Filter/styles.module.scss";

interface GuitarFilterProps {
  material: CheckBox[];
  stringQuantity: CheckBox[];
  color: CheckBox[];
  handleChangeCheckBoxes: (
    groupName: keyof CheckBoxGroup,
    index: number
  ) => void;
}

const GuitarFilter = ({
  material,
  stringQuantity,
  color,
  handleChangeCheckBoxes,
}: GuitarFilterProps) => {
  return (
    <>
      <CheckBoxBlock title="Материал">
        {material.map(({ name, checked }, index) => (
          <Form.Check
            key={name}
            type="checkbox"
            label={name}
            checked={checked}
            className={styleClasses.checkBox}
            onChange={() => handleChangeCheckBoxes("material", index)}
          />
        ))}
      </CheckBoxBlock>
      <CheckBoxBlock
        title="Количество струн"
        wrapperClassName={styleClasses.stringsQuantityWrapper}
      >
        {stringQuantity.map(({ name, checked }, index) => (
          <Form.Check
            key={name}
            type="checkbox"
            label={name}
            checked={checked}
            className={styleClasses.checkBox}
            onChange={() => handleChangeCheckBoxes("stringQuantity", index)}
          />
        ))}
      </CheckBoxBlock>
      <CheckBoxBlock title="Цвет">
        {color.map(({ name, checked }, index) => (
          <Form.Check
            key={name}
            type="checkbox"
            label={name}
            checked={checked}
            className={styleClasses.checkBox}
            onChange={() => handleChangeCheckBoxes("color", index)}
          />
        ))}
      </CheckBoxBlock>
    </>
  );
};

export default GuitarFilter;
