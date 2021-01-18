import SubmenuCategory from "./SubmenuCategory";



function Submenu({ submenu }) {

    return (
        <div className="submenu">
            {submenu.map((category) => (
                <div className="submenu__category" key={category.name}>
                    <h1 className="submenu__heading">{category.name}</h1>
                    {!!category.submenu && <SubmenuCategory submenu={category.submenu}></SubmenuCategory>}
                </div>
            ))}
        </div>
    )
}

export default Submenu