import './Footer.scss'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="container">
                    <div className="footer__service">
                        <div className="service-item">
                            <button className="service-item__img service-item__shippng"></button>
                            <div className="service-item__inner">
                                <h4 className="service-item__headline">Free Shipping</h4>
                                <p className="service-item__text">Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                        <div className="service-item">
                            <button className="service-item__img service-item__support"></button>
                            <div className="service-item__inner">
                                <h4 className="service-item__headline">Support online 24/7</h4>
                                <p className="service-item__text">Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                        <div className="service-item">
                            <button className="service-item__img service-item__gift"></button>
                            <div className="service-item__inner">
                                <h4 className="service-item__headline">Festival gift vouchers</h4>
                                <p className="service-item__text">Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer