import Slider from "../../layout/components/Slider"
import SlideShow from "../../components/Slideshow"
import datas from "../../components/Datas";

import classNames from "classnames/bind";
import styles from "./Homepage.module.scss"

const cx = classNames.bind(styles);

export default function HomePage() {
  return (
    <div className={cx("wrapper")}>
      <Slider />
      <SlideShow datas={datas} title="Sách đề cử"/>
      <SlideShow datas={datas} title="Sách mới cập nhật"/>
      <SlideShow datas={datas} title="Tác phẩm kinh điển"/>
    </div>
  );
}
