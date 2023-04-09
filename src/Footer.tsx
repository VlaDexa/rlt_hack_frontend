import roseltech_logo from "./assets/logos/roseltorg.svg";
import youtube_logo from "./assets/logos/youtube.svg";
import hh_logo from "./assets/logos/hh.svg";
import vk_logo from "./assets/logos/vk.svg";
import habr_logo from "./assets/logos/habr.svg";
import dzen_logo from "./assets/logos/dzen.svg";
import telegram_logo from "./assets/logos/telegram.svg";
import gis_logo from "./assets/logos/gis.svg";
import eis_logo from "./assets/logos/eis.svg";
import "./styles_from_site.css";

export function Footer() {
    return (
        <footer className="intro-footer intro-footer--static">
            <div className="content-wrapper content-wrapper--intro">
                <div className="intro-footer__top">
                    <div className="intro-footer__info-column">
                        <a className="intro-footer__logo" href="/">
                            <img width="100%" height="32" src={roseltech_logo} alt={"Росэторг"}></img>
                        </a>
                        <p className="intro-footer__phone direct_comagic">+7 495 150-20-20</p>
                        <p className="intro-footer__address">Москва, ул Кожевническая 14, стр. 5<br/>
                            info@roseltorg.ru</p>
                        <div className="intro-footer__links">
                            <a className="button button--new button--md button--primary" href="https://www.roseltorg.ru/for-suppliers">Стать
                                поставщиком</a>
                            <a className="button button--new button--md button--primary" href="https://www.roseltorg.ru/for-customers">Стать
                                заказчиком</a>
                        </div>
                    </div>


                    <nav className="footer-menu intro-footer__menu">
                        <div className="footer-menu__element">
                            <span className="footer-menu__category">Торги</span>
                            <ul className="footer-menu__list">
                                <li className="footer-menu__item">
                                    <a className="footer-menu__link" href="/procedures/search"
                                       data-drupal-link-system-path="procedures/search">Все процедуры</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a className="footer-menu__link" href="/search/44fz"
                                       data-drupal-link-system-path="search/44fz">44-ФЗ</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a className="footer-menu__link" href="/search/com"
                                       data-drupal-link-system-path="search/com">223-ФЗ</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a className="footer-menu__link" href="/search/sale"
                                       data-drupal-link-system-path="search/sale">Продажа имущества</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a className="footer-menu__link" href="/business" data-drupal-link-system-path="business">Частные
                                        закупки</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a className="footer-menu__link" href="/search/fkr"
                                       data-drupal-link-system-path="search/fkr">615-ПП РФ. Закупки по капитальному ремонту</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a className="footer-menu__link" href="/corporate" data-drupal-link-system-path="corporate">Корпоративные
                                        секции</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a className="footer-menu__link" href="/agro"
                                       data-drupal-link-system-path="agro">Агроплощадка</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a className="footer-menu__link" href="/kim" data-drupal-link-system-path="kim">Корпоративный
                                        интернет-магазин</a>
                                </li>
                            </ul>

                        </div>
                        <div className="footer-menu__element footer-menu__element--inline">
                            <span className="footer-menu__category">Услуги и сервисы</span>
                            <ul className="footer-menu__list">
                                <li className="footer-menu__item">
                                    <a className="footer-menu__link" href="/speed" data-drupal-link-system-path="speed">Помощь в
                                        регистрации</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a className="footer-menu__link" href="/bg" data-drupal-link-system-path="bg">Банковские
                                        гарантии</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a className="footer-menu__link" href="/bid" data-drupal-link-system-path="bid">Экспертиза
                                        заявки</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a className="footer-menu__link" href="/realty-support"
                                       data-drupal-link-system-path="realty-support">Сопровождение имущественных торгов</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a className="footer-menu__link" href="/education"
                                       data-drupal-link-system-path="education">Обучение</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a className="footer-menu__link" href="/specschet" data-drupal-link-system-path="specschet">Специальный
                                        счет</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a className="footer-menu__link" href="/edo" data-drupal-link-system-path="edo">ЭДО
                                        «Росинвойс»</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a className="footer-menu__link" href="/compliance"
                                       data-drupal-link-system-path="compliance">Комплаенс-проверка</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a className="footer-menu__link" href="/insurance-fkr"
                                       data-drupal-link-system-path="insurance-fkr">Страхование СМР ФКР</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a className="footer-menu__link" href="/import" data-drupal-link-system-path="import">Центр
                                        импортозамещения</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a className="footer-menu__link" href="/express-credit"
                                       data-drupal-link-system-path="express-credit">Экспресс-кредит</a>
                                </li>
                            </ul>

                        </div>
                        <div className="footer-menu__element footer-menu__element--inline">
                            <span className="footer-menu__category">Помощь</span>
                            <ul className="footer-menu__list">
                                <li className="footer-menu__item">
                                    <a className="footer-menu__link" href="/knowledge_db"
                                       data-drupal-link-system-path="knowledge_db">База знаний</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a className="footer-menu__link"
                                       href="https://cpp.roseltorg.ru/?_ga=1.173714602.864565488.1475831048">Центр поддержки</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a className="footer-menu__link" href="https://t.me/RoseltorgCPP_bot">Чат поддержки</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a className="footer-menu__link" href="/faq" data-drupal-link-system-path="faq">Вопрос —
                                        ответ</a>
                                </li>
                            </ul>

                        </div>
                        <div className="footer-menu__element footer-menu__element--inline">
                            <span className="footer-menu__category">Удостоверяющий центр</span>
                            <ul className="footer-menu__list">
                                <li className="footer-menu__item">
                                    <a className="footer-menu__link" href="/ecp" data-drupal-link-system-path="ecp">Электронная
                                        подпись</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a className="footer-menu__link" href="/ecp/kuc" data-drupal-link-system-path="ecp/kuc">Корпоративный
                                        УЦ</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a className="footer-menu__link" href="/ecp/map" data-drupal-link-system-path="ecp/map">Точки
                                        выдачи</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a className="footer-menu__link" href="/ecp/become-partner"
                                       data-drupal-link-system-path="ecp/become-partner">Стать партнером</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a className="footer-menu__link" href="/ecp/validation"
                                       data-drupal-link-system-path="ecp/validation">Проверка ЭП</a>
                                </li>
                            </ul>

                        </div>
                        <div className="footer-menu__element footer-menu__element--inline">
                            <span className="footer-menu__category">О площадке</span>
                            <ul className="footer-menu__list">
                                <li className="footer-menu__item">
                                    <a className="footer-menu__link" href="/about" data-drupal-link-system-path="about">О
                                        Компании</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a className="footer-menu__link" href="/about/news"
                                       data-drupal-link-system-path="about/news">Пресс-центр</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a className="footer-menu__link" href="/about/partners"
                                       data-drupal-link-system-path="about/partners">Партнеры</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a className="footer-menu__link" href="/about/careers"
                                       data-drupal-link-system-path="about/careers">Карьера</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a className="footer-menu__link" href="/about/contacts"
                                       data-drupal-link-system-path="about/contacts">Контакты</a>
                                </li>
                            </ul>

                        </div>
                    </nav>


                </div>
                <div className="intro-footer__bottom">
                    <div className="intro-footer__info-column">
                        <ul className="intro-footer__socialbar socialbar">
                            <li className="socialbar__item">
                                <a className="socialbar__link" href="https://www.youtube.com/channel/UCIONXxV4Tz3l88RogP_enuQ"
                                   target="_blank" rel="nofollow">
                                    <img src={youtube_logo}  alt={""}/>
                                </a>
                            </li>
                            <li className="socialbar__item">
                                <a className="socialbar__link" href="https://vk.com/roseltorg" target="_blank" rel="nofollow">
                                    <img src={vk_logo} alt={"ВКонтакте"}/>
                                </a>
                            </li>
                            <li className="socialbar__item">
                                <a className="socialbar__link" href="https://hh.ru/employer/100424" target="_blank"
                                   rel="nofollow">
                                    <img src={hh_logo} alt={"HeadHunter"}/>
                                </a>
                            </li>
                            <li className="socialbar__item">
                                <a className="socialbar__link" href="https://habr.com/ru/company/roseltorg/" target="_blank"
                                   rel="nofollow">
                                    <img src={habr_logo} alt={"Habr"}/>
                                </a>
                            </li>
                            <li className="socialbar__item">
                                <a className="socialbar__link" href="https://t.me/roseltorg_tg" target="_blank" rel="nofollow">
                                    <img src={telegram_logo} alt={"Telegram"}/>
                                </a>
                            </li>
                            <li className="socialbar__item">
                                <a className="socialbar__link" href="https://dzen.ru/roseltorg" target="_blank" rel="nofollow">
                                    <img src={dzen_logo} alt={"Дзен"}/>
                                </a>
                            </li>
                        </ul>
                        <p className="intro-footer__copyright">© АО «Единая электронная торговая площадка» 2009—2023</p>
                    </div>
                    <ul className="intro-footer__privacy">
                        <li className="intro-footer__privacy-item">
                            <a className="intro-footer__link" href="/privacy-policy">Политика конфиденциальности</a>
                        </li>
                        <li className="intro-footer__privacy-item"><a className="intro-footer__link"
                                                                      href="/personal_information">Согласие
                            на обработку персональных данных</a></li>

                        <li className="intro-footer__privacy-item">
                            <a className="intro-footer__link" href="/about/investors">Раскрытие информации</a>
                        </li>
                        <li className="intro-footer__privacy-item">
                            <a className="intro-footer__link" href="/about/sout">Сводные данные по результатам СОУТ</a>
                        </li>
                    </ul>
                    <div className="intro-footer__gos-sistem">
                        <p className="intro-footer__gos-sistem_title">Государственные информационные системы</p>
                        <a href="https://zakupki.gov.ru/epz/main/public/home.html" target="_blank"
                           className="intro-footer__gos-sistem_link">
                            <img src={eis_logo} alt={"ЕИС"}/>
                        </a>
                        <a href="https://torgi.gov.ru/new/public" target="_blank" className="intro-footer__gos-sistem_link">
                            <img src={gis_logo} alt={"ГИС"}/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}