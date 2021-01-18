import Submenu from "./Submenu"
import "./Navigation.scss"


function Navigation({ menu, showSubmenu, closeSubmenu }) {
    return (
        <div className="header-nav">
            <nav className="menu">
                <ul className="menu__items">
                    {menu ? menu.map((menuItem) => {
                        return (
                            <li className="menu__item" key={menuItem.name} onMouseEnter={showSubmenu} onMouseLeave={closeSubmenu}>
                                <a href='./' className="menu__link">{menuItem.name}</a>
                                {!!menuItem.submenu && <Submenu submenu={menuItem.submenu} ></Submenu>}
                            </li>
                        )
                    }) : <div>Loading...</div>}
                </ul>
            </nav>
        </div>
    )
}

export default Navigation