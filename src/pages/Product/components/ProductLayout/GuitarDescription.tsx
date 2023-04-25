import stylesClasses from "src/pages/Product/components/ProductLayout/styles.module.scss";

interface GuitarDescriptionProps {
  color: string;
  material: string;
  stringQuantity: number;
  price: string;
}

const GuitarDescription = ({
  color,
  material,
  stringQuantity,
  price,
}: GuitarDescriptionProps) => {
  return (
    <>
      <p className={stylesClasses.characteristic}>
        <span className={stylesClasses.characteristicName}>Цвет:</span> {color}
      </p>
      <p className={stylesClasses.allCharacteristics}>
        <span className={stylesClasses.characteristicName}>
          Характеристики:
        </span>{" "}
        <br />
        Материал: {material} <br />
        Количество струн: {stringQuantity}
      </p>
      <p className={stylesClasses.productPrice}>
        <span className={stylesClasses.characteristicName}>Цена:</span>{" "}
        {`${price} бел. руб.`}
      </p>
    </>
  );
};

export default GuitarDescription;
