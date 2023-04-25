import stylesClasses from "src/pages/Product/components/ProductLayout/styles.module.scss";

interface AccessoryDescriptionProps {
  description: string;
  price: string;
}

const AccessoryDescription = ({
  description,
  price,
}: AccessoryDescriptionProps) => {
  return (
    <>
      <p className={stylesClasses.characteristic}>
        <span className={stylesClasses.characteristicName}>Описание</span>
        <br />
        {description}
      </p>
      <p className={stylesClasses.productPrice}>
        <span className={stylesClasses.characteristicName}>Цена:</span>{" "}
        {`${price} бел. руб.`}
      </p>
    </>
  );
};

export default AccessoryDescription;
