import SocialLink from "src/components/Footer/SocialLink";
import logo from "src/static/images/logo.png";
import instagramIcon from "src/static/icons/instagram.png";
import telegramIcon from "src/static/icons/telegram.png";
import styleClasses from "src/components/Footer/styles.module.scss";

const Footer = () => {
  return (
    <footer className={styleClasses.footer}>
      <div className={styleClasses.upperSide}>
        <img src={logo} alt="logo" className={styleClasses.logo} />
        <h3 className={styleClasses.title}>Bass Marketplace</h3>
      </div>
      <div className={styleClasses.bottomSide}>
        <div className={styleClasses.links}>
          <SocialLink
            icon={instagramIcon}
            alt="Instagram"
            linkText="@_renata_1801"
            linkPath="https://instagram.com/_renata_1801?igshid=ODM2MWFjZDg="
          />
          <SocialLink
            icon={instagramIcon}
            alt="Instagram"
            linkText="@12.13band"
            linkPath="https://instagram.com/12.13band?igshid=YmMyMTA2M2Y="
          />
          <SocialLink
            icon={telegramIcon}
            alt="Telegram"
            linkText="@pirozho4ek007"
            linkPath="https://t.me/pirozho4ek007"
          />
        </div>
        <div className={styleClasses.contacts}>
          <h4 className={styleClasses.groupTitle}>Контакты</h4>
          <span className={styleClasses.contact}>+375 (33) 69-100-60</span>
          <span className={styleClasses.contact}>
            Г. Минск, проспект Любимова 16, офис №8 (вход со двора)
          </span>
          <span className={styleClasses.contact}>Пн-Вс 10.00 - 20.00</span>
        </div>
        <div>
          <h4 className={styleClasses.groupTitle}>О нас</h4>
          <p className={styleClasses.about}>
            Наша компания предоставляет услуги продажи бас-гитар и аксессуаров
            для них.
            <br /> Основатели: Рената Филиппова Никита Валожанин
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
