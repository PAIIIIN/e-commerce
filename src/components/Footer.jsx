import '../style/footer.scss'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
const Footer = () => {
  return <footer className="footer bg-stone-600">
  <ul className="social-icon">
    <li className="social-icon__item"><a className="social-icon__link" href="https://www.instagram.com/s1lentce/">
        <AiOutlineInstagram/>
      </a></li>
    <li className="social-icon__item"><a className="social-icon__link" href="https://github.com/PAIIIIN">
        <AiFillGithub/>
      </a></li>
    <li className="social-icon__item"><a className="social-icon__link" href="https://twitter.com/S1LENTCE">
        <BsTwitter/>
      </a></li>
    <li className="social-icon__item"><a className="social-icon__link" href="#">
        <ion-icon name="logo-instagram"></ion-icon>
      </a></li>
  </ul>
  <ul className="menu">
    <li className="menu__item"><a className="menu__link" href="#">Home</a></li>
    <li className="menu__item"><a className="menu__link" href="#">About</a></li>
    <li className="menu__item"><a className="menu__link" href="#">Services</a></li>
    <li className="menu__item"><a className="menu__link" href="#">Team</a></li>
    <li className="menu__item"><a className="menu__link" href="#">Contact</a></li>

  </ul>
  <p className='text-white'> 2023 S1lence &copy;</p>
</footer>
};

export default Footer;
