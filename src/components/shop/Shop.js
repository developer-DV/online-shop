import Content from './content/Content'
import './Shop.scss'
import Sidebar from './sidebar/Sidebar'

function Shop() {
    return (
        <section className="shop">
            <div className="container">
                <div className="shop-inner">
                    <Sidebar />
                    <Content />
                </div>
            </div>
        </section>
    )
}

export default Shop