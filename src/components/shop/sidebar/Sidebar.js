import './Sidebar.scss'

function Sidebar() {
    return (
        <aside className="shop__sidebar">
            <div className="box-category box">
                <div className="box-category__headline headline">categories</div>
                <ul className="box-category__items">
                    <li className="box-category__item"><a href="./" className="box-category__link">Phones</a></li>
                    <li className="box-category__item"><a href="./" className="box-category__link">Televisiions</a></li>
                    <li className="box-category__item"><a href="./" className="box-category__link">Camera</a></li>
                    <li className="box-category__item"><a href="./" className="box-category__link">Computers</a></li>
                    <li className="box-category__item"><a href="./" className="box-category__link">Headphones</a></li>
                </ul>
            </div>
            <div className="box-filter box">
                <div className="box-filter__headline headline">refine search</div>
                <div className="box-filter__filters">
                    <div className="box-filter__filter">
                        <a href="./" className="box-filter__link">color</a>
                        <div className="box-filter__list-group">
                            <div className="box-filter__list-item">
                                <label className="box-filter__label">
                                    <input className="box-filter__input" type="checkbox" name="color_01" />
                                white
                            </label>
                            </div>
                            <div className="box-filter__list-item">
                                <label className="box-filter__label">
                                    <input className="box-filter__input" type="checkbox" name="color_02" />
                                black
                            </label>
                            </div>
                            <div className="box-filter__list-item">
                                <label className="box-filter__label">
                                    <input className="box-filter__input" type="checkbox" name="color_03" />
                                red
                            </label>
                            </div>
                            <div className="box-filter__list-item">
                                <label className="box-filter__label">
                                    <input className="box-filter__input" type="checkbox" name="color_04" />
                                yellow
                            </label>
                            </div>
                        </div>
                    </div>
                    <div className="box-filter__filter">
                        <a href="./" className="box-filter__link">price</a>
                        <div className="box-filter__list-group">
                            <div className="box-filter__list-item">
                                <label className="box-filter__label">
                                    <input className="box-filter__input" type="checkbox" name="price_01" />
                                $50.00 - $200.00
                            </label>
                            </div>
                            <div className="box-filter__list-item">
                                <label className="box-filter__label">
                                    <input className="box-filter__input" type="checkbox" name="price_02" />
                                    $201.00 - $500.00
                            </label>
                            </div>
                            <div className="box-filter__list-item">
                                <label className="box-filter__label">
                                    <input className="box-filter__input" type="checkbox" name="price_03" />
                                    $501.00 - $800.00
                            </label>
                            </div>
                            <div className="box-filter__list-item">
                                <label className="box-filter__label">
                                    <input className="box-filter__input" type="checkbox" name="price_04" />
                                    $801.00 - $1200.00
                            </label>
                            </div>
                        </div>
                    </div>
                    <div className="box-filter__filter">
                        <a href="./" className="box-filter__link">size</a>
                        <div className="box-filter__list-group">
                            <div className="box-filter__list-item">
                                <label className="box-filter__label box-filter__label-size">
                                    <input className="box-filter__input" type="checkbox" name="size_01" />
                                xl
                            </label>
                            </div>
                            <div className="box-filter__list-item">
                                <label className="box-filter__label box-filter__label-size">
                                    <input className="box-filter__input" type="checkbox" name="size_02" />
                                l
                            </label>
                            </div>
                            <div className="box-filter__list-item">
                                <label className="box-filter__label box-filter__label-size">
                                    <input className="box-filter__input" type="checkbox" name="size_03" />
                                m
                            </label>
                            </div>
                            <div className="box-filter__list-item">
                                <label className="box-filter__label box-filter__label-size">
                                    <input className="box-filter__input" type="checkbox" name="size_04" />
                                s
                            </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </aside >
    )
}

export default Sidebar