import notFoundGif from "src/static/gifs/not_found_gif.webp";
import stylesClasses from "src/components/NotFound/styles.module.scss";

const NotFound = () => {
  return (
    <div className={stylesClasses.pageWrapper}>
      <img src={notFoundGif} alt="Page not found" />
    </div>
  );
};

export default NotFound;
