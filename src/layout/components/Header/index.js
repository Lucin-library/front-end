import styles from "./Header.module.scss";
import "./style.css"
import classNames from "classnames/bind";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Button from "../../../components/Button";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <section className={cx("top-header")}>
        <div className={cx("container")}>
          <div class="row">
            <div class="col-md-4 col-xs-12 col-sm-4">
              <div className={cx("search-box")}>
                <button className={cx("btn-search")}>
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
                <input
                  type="text"
                  className={cx("input-search")}
                  placeholder="Type to Search..."
                />
              </div>
            </div>
            <div class="col-md-4 col-xs-12 col-sm-4">
              <div class="text-center" className={cx("logo")}>
                <a href="#">LUCIN</a>
              </div>
            </div>
            <div class="col-md-4 col-xs-12 col-sm-4">
              <div
                class="top-menu text-right list-inline"
                className={cx("authen")}
              >
                <Button to="/login" small primary>
                  Đăng nhập
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cx("categories")}>
        <div class="container" className={cx("navigation")}>
          <div class="nav-option">
            <a href="#">Trang chủ</a>
          </div>

          <div class="dropdown-center nav-option">
            <a
              class="dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              href="#"
            >
              Thể loại
              <span class="tf-ion-ios-arrow-down"></span>
            </a>
            <div class="dropdown-menu" >
              <div class="row">
                <div class="col-lg-12">
                  <ul>
                    <li>
                      <a href="#">Yay</a>
                    </li>
                    <li>
                      <a href="#">Yay</a>
                    </li>
                    <li>
                      <a href="#">Yay</a>
                    </li>
                    <li>
                      <a href="#">Yay</a>
                    </li>
                    <li>
                      <a href="#">Yay</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="dropdown-center nav-option">
            <a
              class="dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              href="#"
            >
              Văn học
              <span class="tf-ion-ios-arrow-down"></span>
            </a>
            <div class="dropdown-menu" >
              <div class="row">
                <div class="col-lg-12">
                  <ul>
                    <li>
                      <a href="#">Yay</a>
                    </li>
                    <li>
                      <a href="#">Yay</a>
                    </li>
                    <li>
                      <a href="#">Yay</a>
                    </li>
                    <li>
                      <a href="#">Yay</a>
                    </li>
                    <li>
                      <a href="#">Yay</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="dropdown-center nav-option">
            <a
              class="dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              href="#"
            >
              Khoa học - Công nghệ
              <span class="tf-ion-ios-arrow-down"></span>
            </a>
            <div class="dropdown-menu" >
              <div class="row">
                <div class="col-lg-12">
                  <ul>
                    <li>
                      <a href="#">Yay</a>
                    </li>
                    <li>
                      <a href="#">Yay</a>
                    </li>
                    <li>
                      <a href="#">Yay</a>
                    </li>
                    <li>
                      <a href="#">Yay</a>
                    </li>
                    <li>
                      <a href="#">Yay</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
