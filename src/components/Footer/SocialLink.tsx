import styleClasses from "src/components/Footer/styles.module.scss";

interface SocialLinkProps {
  icon: string;
  alt: string;
  linkText: string;
  linkPath: string;
}

const SocialLink = ({ icon, alt, linkText, linkPath }: SocialLinkProps) => {
  return (
    <div className={styleClasses.linkWrapper}>
      <img src={icon} alt={alt} className={styleClasses.socialIcon} />
      <a href={linkPath} target="_blank" className={styleClasses.link}>
        {linkText}
      </a>
    </div>
  );
};

export default SocialLink;
