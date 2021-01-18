
function SubmenuCategory({ submenu }) {

    return (
        <ul className="submenu__items">
            {submenu.map((submenuItem) => {
                return (
                    <li className="submenu__item" key={submenuItem.name}>
                        <a href='./' className="submenu__link">{submenuItem.name}</a>
                    </li>
                )
            })}
        </ul>


    )
}

export default SubmenuCategory