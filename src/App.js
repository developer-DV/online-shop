import './App.scss';
import Navigation from './components/navigation/Navigation';
import Shop from './components/shop/Shop';
import Mainslider from './components/slider/Mainslider';
import Category from './components/top-category/Category';
import loupe from './img/loupe.png'

function App() {

  // const [menu, setMenu] = useState(null)

  // const getMenu = () => {
  //     return fetch("http://localhost:3000/menu").then(res => res.json())
  // }

  // useEffect(() => {
  //     getMenu().then(response => { setMenu(() => (response)) })
  // }, [])

  let menu = [
    {
      name: "Home",
      link: "/home",
      submenu: null
    },
    {
      name: "Shop",
      link: "/shop",
      submenu: [
        {
          name: "Electronics",
          link: "/electronics",
          submenu: [
            {
              name: "Cell Phones",
              link: "/cellphones"
            },
            {
              name: "Сomputers",
              link: "/computers"
            },
            {
              name: "Headphones",
              link: "/headphones"
            },
          ]
        },
        {
          name: "accessories",
          link: "/accessories",
          submenu: [
            {
              name: "Cell Phones",
              link: "/cellphones"
            },
            {
              name: "Сomputers",
              link: "/computers"
            },
            {
              name: "Headphones",
              link: "/headphones"
            },
          ]
        }
      ]
    },
    {
      name: "Cell Phones",
      link: "/cellphones",
      submenu: [
        {
          name: "smartphones",
          link: "/smartphones",
          submenu: [
            {
              name: "Iphone",
              link: "/iphone"
            },
            {
              name: "android",
              link: "/android"
            },
            {
              name: "huawei",
              link: "/headphones"
            },
          ]
        }
      ]
    },
    {
      name: "Сomputers",
      link: "/computers",
      submenu: null
    },
    {
      name: "Headphones",
      link: "/headphones",
      submenu: null
    },
    {
      name: "Contacts",
      link: "/contacts",
      submenu: null
    },
  ]

  const showSubmenuMouseEnter = (e) => {
    if (e.currentTarget.children.length > 1) {
      let submenu = e.currentTarget.getElementsByClassName('submenu')
      submenu[0].style.transform = "scale(1)"
    }
    else return false

  }

  const closeSubmenuMouseLeave = (e) => {
    if (e.currentTarget.children.length > 1) {
      let submenu = e.currentTarget.getElementsByClassName('submenu')
      submenu[0].style.transform = "scale(0)"
    }
    else return false
  }

  return (
    <div className="wrapper">
      <header className="header">
        <div className="header-top">
          <div className="container">
            <div className="header-top__inner">
              <nav className="header-top__nav">
                <ul>
                  <li className="header-top__nav-item"><a href="./" className="header-top__nav-link">orders</a></li>
                  <li className="header-top__nav-item"><a href="./" className="header-top__nav-link">compare</a></li>
                  <li className="header-top__nav-item"><a href="./" className="header-top__nav-link">wishlist</a></li>
                  <li className="header-top__nav-item"><a href="./" className="header-top__nav-link">log in</a></li>
                </ul>
              </nav>
              <div className="header-top__headline">
                <p className="header-top__text">Call us: <a href="tel:+3(800)23456789" className="header-top__phone">+3(800) 2345-6789</a> 7 Days a week from 9:00 am to 7:00 pm</p>
              </div>
              <div className="header-top__search">
                <input className="header-top__search-text" type="text" />
                <button className="header-top__search-btn"><img src={loupe} alt="loupe" /></button>
              </div>
            </div>
          </div>
        </div>
        <div className="header-logo">
          <div className="container">
            <div className="header-logo__inner">
              <div className="header-logo__logo">
                <a href="./"><img src="http://thementic.com/opencart/OPC01/OPC0100012/image/catalog/demo/banners/Logo.jpg" alt="logo" /></a>
              </div>
              <div className="header-logo__card">
                <div className="card">
                  <a href="./" className="card__link">
                    <span className="card__count">0</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Navigation menu={menu} closeSubmenu={closeSubmenuMouseLeave} showSubmenu={showSubmenuMouseEnter} />
      </header>
      <Mainslider />
      <Category />
      <Shop />
    </div>
  );
}

export default App;
