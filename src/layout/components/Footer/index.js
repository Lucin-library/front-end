import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import classNames from "classnames/bind";
import styles from "./Footer.module.scss"

const cx = classNames.bind(styles);

function Footer (){
    return (
        <footer className={cx("footer", "section")}>
            <div class="container">
                <div class="row tex">
                    <div class="col-md-12">
                        <ul className={cx("social-media")}>
                            <li>
                                <a href="#">
                                    <i class="fa-brands fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fa-brands fa-square-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fa-brands fa-twitter"></i>
                                </a>
                            </li>
                        </ul>
                        <ul className={cx("footer-menu", "text-uppercase")}>
                            <li>
                                <a href="contact.jsp">CONTACT</a>
                            </li>
                            <li>
                                <a href="indnex.html">SHOP</a>
                            </li>
                            <li>
                                <a href="pricing.jsp">PRICING</a>
                            </li>
                            <li>
                                <a href="contact.jsp">PRIVACY POLICY</a>
                            </li>
                        </ul>
                        <p className={cx("copyright-text")}>Copyright &copy;2021, Designed &amp; Developed by Lucin</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;