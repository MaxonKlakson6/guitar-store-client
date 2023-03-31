import { ChangeEvent, useState } from "react";
import { Form } from "react-bootstrap";
import styleClasses from "src/pages/Store/components/Filter/styles.module.scss";

const Filter = () => {
  const [sortBy, setSortBy] = useState("");

  const handleCheckChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSortBy(event.target.value);
  };

  return (
    <div className={styleClasses.filter}>
      <h3 className={styleClasses.title}>Сортировка по:</h3>
      <Form>
        <div className={styleClasses.sortBlock}>
          <Form.Check
            name="expensive"
            type="radio"
            label="Дорогие выше"
            value="дорогие"
            checked={sortBy === "дорогие"}
            className={styleClasses.radio}
            onChange={handleCheckChange}
          />
          <Form.Check
            name="cheap"
            type="radio"
            label="Дешевые выше"
            value="дешевые"
            checked={sortBy === "дешевые"}
            className={styleClasses.radio}
            onChange={handleCheckChange}
          />
        </div>
        <h3 className={styleClasses.title}>Фильтры товаров</h3>
        <div className={styleClasses.filterBlock}>
          <h4 className={styleClasses.filterTitle}>Цена</h4>
          <div className={styleClasses.priceRangeBlock}>
            <div>
              <input
                type="text"
                className={styleClasses.priceInput}
                placeholder="мин"
              />
              <span>-br</span>
            </div>
            <div>
              <input
                type="text"
                className={styleClasses.priceInput}
                placeholder="макс"
              />
              <span>-br</span>
            </div>
          </div>
        </div>
        <div className={styleClasses.filterBlock}>
          <h4 className={styleClasses.filterTitle}>Материал</h4>
          <div className={styleClasses.checkBoxWrapper}>
            <Form.Check
              type="checkbox"
              label="Агатис"
              className={styleClasses.checkBox}
            />
            <Form.Check
              type="checkbox"
              label="Вяз"
              className={styleClasses.checkBox}
            />
            <Form.Check
              type="checkbox"
              label="Кедр"
              className={styleClasses.checkBox}
            />
            <Form.Check
              type="checkbox"
              label="Клён"
              className={styleClasses.checkBox}
            />
            <Form.Check
              type="checkbox"
              label="Нато"
              className={styleClasses.checkBox}
            />
            <Form.Check
              type="checkbox"
              label="Маханоги"
              className={styleClasses.checkBox}
            />
            <Form.Check
              type="checkbox"
              label="Ольха"
              className={styleClasses.checkBox}
            />
            <Form.Check
              type="checkbox"
              label="Сосна"
              className={styleClasses.checkBox}
            />
            <Form.Check
              type="checkbox"
              label="Тополь"
              className={styleClasses.checkBox}
            />
          </div>
        </div>
        <div className={styleClasses.filterBlock}>
          <h4 className={styleClasses.filterTitle}>Количество струн</h4>
          <div className={styleClasses.stringsQuantityWrapper}>
            <Form.Check
              type="checkbox"
              label="4"
              className={styleClasses.checkBox}
            />
            <Form.Check
              type="checkbox"
              label="5"
              className={styleClasses.checkBox}
            />
            <Form.Check
              type="checkbox"
              label="6"
              className={styleClasses.checkBox}
            />
          </div>
        </div>
        <div className={styleClasses.filterBlock}>
          <h4 className={styleClasses.filterTitle}>Цвет</h4>
          <div className={styleClasses.checkBoxWrapper}>
            <Form.Check
              type="checkbox"
              label="Бежевый"
              className={styleClasses.checkBox}
            />
            <Form.Check
              type="checkbox"
              label="Белый"
              className={styleClasses.checkBox}
            />
            <Form.Check
              type="checkbox"
              label="Черный"
              className={styleClasses.checkBox}
            />
            <Form.Check
              type="checkbox"
              label="Красный"
              className={styleClasses.checkBox}
            />
            <Form.Check
              type="checkbox"
              label="Оранжевый"
              className={styleClasses.checkBox}
            />
            <Form.Check
              type="checkbox"
              label="Голубой"
              className={styleClasses.checkBox}
            />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Filter;
