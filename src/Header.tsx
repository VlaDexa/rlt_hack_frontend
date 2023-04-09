import roseltorg_logo from "./assets/logos/roseltorg.svg";
import triangle from "./assets/triangle.svg";
import "./styles_from_site.css";

export function Header() {
    return (
        <header className="intro-header intro-header--static">
            <div className="intro-header__wrapper content-wrapper content-wrapper--intro">
                <a className="intro-header__logo" href="/">
                    <img src={roseltorg_logo} alt={"Росэлторг"}/>
                </a>

                <nav className="header-menu menu header-menu-main">
                    <ul className="menu__list">
                        <li className="menu__block block__active">
                            <span className="menu__category" tabIndex={0}>Торги</span>
                            <div className="menu__submenu-container">
                                <ul className="menu__submenu">
                                    <li className="menu__item">
                                        <a className="menu__link is-active" href="https://www.roseltorg.ru/procedures/search"
                                           data-drupal-link-system-path="procedures/search">Все процедуры</a>
                                    </li>
                                    <li className="menu__item">
                                        <a className="menu__link" href="https://www.roseltorg.ru/search/44fz"
                                           data-drupal-link-system-path="search/44fz">44-ФЗ</a>
                                    </li>
                                    <li className="menu__item">
                                        <a className="menu__link" href="https://www.roseltorg.ru/search/com"
                                           data-drupal-link-system-path="search/com">223-ФЗ</a>
                                    </li>
                                    <li className="menu__item">
                                        <a className="menu__link" href="https://www.roseltorg.ru/search/sale"
                                           data-drupal-link-system-path="search/sale">Продажа имущества</a>
                                    </li>
                                    <li className="menu__item">
                                        <a className="menu__link" href="https://www.roseltorg.ru/business"
                                           data-drupal-link-system-path="business">Частные закупки</a>
                                    </li>
                                    <li className="menu__item">
                                        <a className="menu__link" href="https://www.roseltorg.ru/search/fkr"
                                           data-drupal-link-system-path="search/fkr">615-ПП РФ. Закупки по капитальному
                                            ремонту</a>
                                    </li>
                                    <li className="menu__item last__item _visible">
                                        <a className="menu__link" rel="nofollow" href="#">Еще</a>
                                        <ul className="menu-next-lvl">
                                            <li className="menu__item">
                                                <a className="menu__link" href="https://www.roseltorg.ru/corporate"
                                                   data-drupal-link-system-path="corporate">Корпоративные секции</a>
                                            </li>
                                            <li className="menu__item">
                                                <a className="menu__link" href="https://www.roseltorg.ru/agro"
                                                   data-drupal-link-system-path="agro">Агроплощадка</a>
                                            </li>
                                            <li className="menu__item">
                                                <a className="menu__link" href="https://www.roseltorg.ru/kim"
                                                   data-drupal-link-system-path="kim">Корпоративный интернет-магазин</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="menu__block">
                            <span className="menu__category" tabIndex={0}>Услуги и сервисы</span>
                            <div className="menu__submenu-container">
                                <ul className="menu__submenu">


                                    <li className="menu__item">
                                        <a className="menu__link" href="https://www.roseltorg.ru/speed" data-drupal-link-system-path="speed">Помощь
                                            в регистрации</a>
                                    </li>
                                    <li className="menu__item">
                                        <a className="menu__link" href="https://www.roseltorg.ru/bg" data-drupal-link-system-path="bg">Банковские
                                            гарантии</a>
                                    </li>
                                    <li className="menu__item">
                                        <a className="menu__link" href="https://www.roseltorg.ru/bid" data-drupal-link-system-path="bid">Экспертиза
                                            заявки</a>
                                    </li>
                                    <li className="menu__item">
                                        <a className="menu__link" href="https://www.roseltorg.ru/realty-support"
                                           data-drupal-link-system-path="realty-support">Сопровождение имущественных
                                            торгов</a>
                                    </li>
                                    <li className="menu__item">
                                        <a className="menu__link" href="https://www.roseltorg.ru/education"
                                           data-drupal-link-system-path="education">Обучение</a>
                                    </li>
                                    <li className="menu__item last__item _visible">
                                        <a className="menu__link" rel="nofollow" href="#">Еще</a>
                                        <ul className="menu-next-lvl">
                                            <li className="menu__item">
                                                <a className="menu__link" href="https://www.roseltorg.ru/specschet"
                                                   data-drupal-link-system-path="specschet">Специальный счет</a>
                                            </li>
                                            <li className="menu__item">
                                                <a className="menu__link" href="https://www.roseltorg.ru/edo"
                                                   data-drupal-link-system-path="edo">ЭДО «Росинвойс»</a>
                                            </li>
                                            <li className="menu__item">
                                                <a className="menu__link" href="https://www.roseltorg.ru/compliance"
                                                   data-drupal-link-system-path="compliance">Комплаенс-проверка</a>
                                            </li>
                                            <li className="menu__item">
                                                <a className="menu__link" href="https://www.roseltorg.ru/insurance-fkr"
                                                   data-drupal-link-system-path="insurance-fkr">Страхование СМР ФКР</a>
                                            </li>
                                            <li className="menu__item">
                                                <a className="menu__link" href="https://www.roseltorg.ru/import"
                                                   data-drupal-link-system-path="import">Центр импортозамещения</a>
                                            </li>
                                            <li className="menu__item">
                                                <a className="menu__link" href="https://www.roseltorg.ru/express-credit"
                                                   data-drupal-link-system-path="express-credit">Экспресс-кредит</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="menu__block">
                            <span className="menu__category" tabIndex={0}>Удостоверяющий центр</span>
                            <div className="menu__submenu-container">
                                <ul className="menu__submenu">


                                    <li className="menu__item">
                                        <a className="menu__link" href="https://www.roseltorg.ru/ecp" data-drupal-link-system-path="ecp">Электронная
                                            подпись</a>
                                    </li>
                                    <li className="menu__item">
                                        <a className="menu__link" href="https://www.roseltorg.ru/ecp/kuc"
                                           data-drupal-link-system-path="ecp/kuc">Корпоративный УЦ</a>
                                    </li>
                                    <li className="menu__item">
                                        <a className="menu__link" href="https://www.roseltorg.ru/ecp/map"
                                           data-drupal-link-system-path="ecp/map">Точки выдачи</a>
                                    </li>
                                    <li className="menu__item">
                                        <a className="menu__link" href="https://www.roseltorg.ru/ecp/become-partner"
                                           data-drupal-link-system-path="ecp/become-partner">Стать партнером</a>
                                    </li>
                                    <li className="menu__item">
                                        <a className="menu__link" href="https://www.roseltorg.ru/ecp/validation"
                                           data-drupal-link-system-path="ecp/validation">Проверка ЭП</a>
                                    </li>
                                    <li className="menu__item last__item">
                                        <a className="menu__link" rel="nofollow" href="#">Еще</a>
                                        <ul className="menu-next-lvl"></ul>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="menu__block">
                            <span className="menu__category" tabIndex={0}>Клиентам</span>
                            <div className="menu__submenu-container">
                                <ul className="menu__submenu">


                                    <li className="menu__item">
                                        <a className="menu__link" href="https://www.roseltorg.ru/for-customers"
                                           data-drupal-link-system-path="for-customers">Стать заказчиком</a>
                                    </li>
                                    <li className="menu__item">
                                        <a className="menu__link" href="https://www.roseltorg.ru/for-suppliers"
                                           data-drupal-link-system-path="for-suppliers">Стать поставщиком</a>
                                    </li>
                                    <li className="menu__item">
                                        <a className="menu__link" href="https://www.roseltorg.ru/search/sale"
                                           data-drupal-link-system-path="search/sale">Стать покупателем</a>
                                    </li>
                                    <li className="menu__item">
                                        <a className="menu__link" href="https://www.roseltorg.ru/property-sellers"
                                           data-drupal-link-system-path="property-sellers">Стать продавцом</a>
                                    </li>
                                    <li className="menu__item">
                                        <a className="menu__link" href="https://www.roseltorg.ru/rates"
                                           data-drupal-link-system-path="rates">Тарифы</a>
                                    </li>
                                    <li className="menu__item last__item">
                                        <a className="menu__link" rel="nofollow" href="#">Еще</a>
                                        <ul className="menu-next-lvl"></ul>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="menu__block">
                            <span className="menu__category" tabIndex={0}>О площадке</span>
                            <div className="menu__submenu-container">
                                <ul className="menu__submenu">


                                    <li className="menu__item">
                                        <a className="menu__link" href="https://www.roseltorg.ru/about" data-drupal-link-system-path="about">О
                                            Компании</a>
                                    </li>
                                    <li className="menu__item">
                                        <a className="menu__link" href="https://www.roseltorg.ru/about/news"
                                           data-drupal-link-system-path="about/news">Пресс-центр</a>
                                    </li>
                                    <li className="menu__item">
                                        <a className="menu__link" href="https://www.roseltorg.ru/about/partners"
                                           data-drupal-link-system-path="about/partners">Партнеры</a>
                                    </li>
                                    <li className="menu__item">
                                        <a className="menu__link" href="https://www.roseltorg.ru/about/careers"
                                           data-drupal-link-system-path="about/careers">Карьера</a>
                                    </li>
                                    <li className="menu__item">
                                        <a className="menu__link" href="https://www.roseltorg.ru/about/contacts"
                                           data-drupal-link-system-path="about/contacts">Контакты</a>
                                    </li>
                                    <li className="menu__item last__item">
                                        <a className="menu__link" rel="nofollow" href="#">Еще</a>
                                        <ul className="menu-next-lvl"></ul>
                                    </li>
                                </ul>
                            </div>
                        </li>

                    </ul>
                </nav>

                <div className="header-nav">


                    <div className="header-menu menu nav-help">
                        <ul className="menu__list">
                            <li className="menu__block">
          <span className="menu__category" tabIndex={0}>
            Помощь
          </span>
                                <div className="menu__submenu-container">
                                    <ul className="menu__submenu">
                                        <li className="menu__item">
                                            <a className="menu__link" href="https://www.roseltorg.ru/knowledge_db"
                                               data-drupal-link-system-path="knowledge_db">База знаний</a>
                                        </li>
                                        <li className="menu__item">
                                            <a className="menu__link"
                                               href="https://cpp.roseltorg.ru/?_ga=1.173714602.864565488.1475831048">Центр
                                                поддержки</a>
                                        </li>
                                        <li className="menu__item">
                                            <a className="menu__link" href="https://t.me/RoseltorgCPP_bot">Чат
                                                поддержки</a>
                                        </li>
                                        <li className="menu__item">
                                            <a className="menu__link" href="https://www.roseltorg.ru/faq" data-drupal-link-system-path="faq">Вопрос
                                                — ответ</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                        </ul>
                    </div>

                    <div className="lang-selector" role="select">
                        <button className="lang-selector__current-value" type="button" aria-label="Выбрать язык">
                            <span className="lang-selector__value-text">Ru</span>
                            <svg href={triangle} className={"lang-selector__icon"}>
                                <use href={triangle}></use>
                            </svg>
                        </button>
                        <ul className="lang-selector__options">
                            <li className="lang-selector__item lang-selector__item--selected" aria-selected="true">
                                <a className="lang-selector__link notranslate selected" data-google-lang="ru" href="#"
                                   aria-label="Русский" aria-selected="true">Ru</a>
                            </li>
                            <li className="lang-selector__item" aria-selected="false">
                                <a className="lang-selector__link notranslate" data-google-lang="en" href="#"
                                   aria-label="English">En</a>
                            </li>
                        </ul>
                    </div>
                    <button className="header-nav__button button-menu button-menu--sidemenu js-open-side-nav"
                            type="button" aria-label="Открыть меню"></button>

                    <div className="header-auth">
                        <div className="header-auth__item header-auth__link js-register-popup-link">
                            Регистрация
                        </div>
                        <div
                            className="header-auth__item button button--new button--primary button--sm js-login-popup-link">
                            Войти
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}