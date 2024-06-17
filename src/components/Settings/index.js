import classNames from 'classnames/bind';
import styles from './Settings.module.scss';
import { useState } from 'react';
const cx = classNames.bind(styles);

// function Settings() {
//     return (
//         <div className={cx('wrapper')}>
//             <div data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight2" aria-controls="offcanvasRight">
//                 <i class="fa fa-gear"></i>
//             </div>

//             <div
//                 class="offcanvas offcanvas-end"
//                 tabindex="-1"
//                 id="offcanvasRight2"
//                 aria-labelledby="offcanvasRightLabel"
//             >
//                 <div class="offcanvas-header" style={{ margin: '10px' }}>
//                     <h2 id="offcanvasRightLabel">Cài đặt hiển thị</h2>
//                     <button
//                         type="button"
//                         class="btn-close text-reset"
//                         data-bs-dismiss="offcanvas"
//                         aria-label="Close"
//                     ></button>
//                 </div>
//                 <hr />
//                 <div class="offcanvas-body" style={{ marginTop: '20px' }}>
//                     <div className={cx('display-options')}>
//                         <div className={cx('theme')}>
//                             <p className={cx('title')}>Dark Theme</p>
//                             <div className={cx('checkbox_item')}>
//                                 <label className={cx('checkbox_wrap')}>
//                                     <input type="checkbox" name="checkbox" className={cx('checkbox_inp')} />
//                                     <span className={cx('checkbox_mark')}></span>
//                                 </label>
//                             </div>
//                         </div>
//                         <div className={cx('options')}>
//                             <p className={cx('title')}>View</p>
//                             <div className={cx('custom-select')}>
//                                 <select>
//                                     <option value="0">Flowing text</option>
//                                     <option value="1">Audi</option>
//                                     <option value="2">BMW</option>
//                                     <option value="3">Citroen</option>
//                                     <option value="4">Ford</option>
//                                 </select>
//                             </div>
//                         </div>
//                         <div className={cx('options')}>
//                             <p className={cx('title')}>Font</p>
//                             <div className={cx('custom-select')}>
//                                 <select>
//                                     <option value="0">Verdana</option>
//                                     <option value="1">Audi</option>
//                                     <option value="2">BMW</option>
//                                     <option value="3">Citroen</option>
//                                     <option value="4">Ford</option>
//                                 </select>
//                             </div>
//                         </div>
//                         <div className={cx('options')}>
//                             <p className={cx('title')}>Font size</p>
//                             <div className={cx('custom-select')}>
//                                 <select>
//                                     <option value="0">64</option>
//                                     <option value="1">50</option>
//                                     <option value="2">45</option>
//                                     <option value="3">24</option>
//                                 </select>
//                             </div>
//                         </div>
//                         <div className={cx('options')}>
//                             <p className={cx('title')}>Line height</p>
//                             <div className={cx('line-height')}>
//                                 <img src="https://www.svgrepo.com/show/376554/line-height-line.svg" />
//                                 <select>
//                                     <option value="0">100%</option>
//                                     <option value="1">80%</option>
//                                     <option value="2">65%</option>
//                                     <option value="3">50%</option>
//                                 </select>
//                             </div>
//                         </div>
//                         <div className={cx('options')}>
//                             <p className={cx('title')}>Justify</p>
//                             <div className={cx('justify')}>
//                                 <div className={cx('justify-icon', 'active')}>
//                                     <i class="fa-solid fa-align-left"></i>
//                                 </div>
//                                 <div className={cx('justify-icon')}>
//                                     <i class="fa-solid fa-align-justify"></i>
//                                 </div>
//                                 <div className={cx('justify-icon')}>
//                                     <i class="fa-solid fa-align-right"></i>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
function Settings({ onSettingsChange }) {
    const [settings, setSettings] = useState({
        darkTheme: false,
        view: '0',
        font: '0',
        fontSize: '0',
        lineHeight: '0',
        justify: 'left',
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;

        const newSettings = {
            ...settings,
            [name]: newValue,
        };

        setSettings(newSettings);
        onSettingsChange(newSettings);
    };

    return (
        <div className={cx('wrapper')}>
            <div data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight2" aria-controls="offcanvasRight">
                <i className="fa fa-gear"></i>
            </div>

            <div
                className="offcanvas offcanvas-end"
                tabIndex="-1"
                id="offcanvasRight2"
                aria-labelledby="offcanvasRightLabel"
            >
                <div className="offcanvas-header" style={{ margin: '10px' }}>
                    <h2 id="offcanvasRightLabel">Cài đặt hiển thị</h2>
                    <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <hr />
                <div className="offcanvas-body" style={{ marginTop: '20px' }}>
                    <div className={cx('display-options')}>
                        <div className={cx('theme')}>
                            <p className={cx('title')}>Dark Theme</p>
                            <div className={cx('checkbox_item')}>
                                <label className={cx('checkbox_wrap')}>
                                    <input
                                        type="checkbox"
                                        name="darkTheme"
                                        className={cx('checkbox_inp')}
                                        checked={settings.darkTheme}
                                        onChange={handleChange}
                                    />
                                    <span className={cx('checkbox_mark')}></span>
                                </label>
                            </div>
                        </div>
                        <div className={cx('options')}>
                            <p className={cx('title')}>View</p>
                            <div className={cx('custom-select')}>
                                <select name="view" value={settings.view} onChange={handleChange}>
                                    <option value="0">Flowing text</option>
                                    <option value="1">Audi</option>
                                    <option value="2">BMW</option>
                                    <option value="3">Citroen</option>
                                    <option value="4">Ford</option>
                                </select>
                            </div>
                        </div>
                        <div className={cx('options')}>
                            <p className={cx('title')}>Font</p>
                            <div className={cx('custom-select')}>
                                <select name="font" value={settings.font} onChange={handleChange}>
                                    <option value="caption">Caption</option>
                                    <option value="menu">Menu</option>
                                    <option value="revert-layer">Revert layer</option>
                                </select>
                            </div>
                        </div>
                        <div className={cx('options')}>
                            <p className={cx('title')}>Font size</p>
                            <div className={cx('custom-select')}>
                                <select name="fontSize" value={settings.fontSize} onChange={handleChange}>
                                    <option value="18">18</option>
                                    <option value="20" selected>
                                        20
                                    </option>
                                    <option value="24">24</option>
                                </select>
                            </div>
                        </div>
                        <div className={cx('options')}>
                            <p className={cx('title')}>Line height</p>
                            <div className={cx('line-height')}>
                                <img src="https://www.svgrepo.com/show/376554/line-height-line.svg" alt="line height" />
                                <select name="lineHeight" value={settings.lineHeight} onChange={handleChange}>
                                    <option value="1">1</option>
                                    <option value="1.5" selected>
                                        1.5
                                    </option>
                                    <option value="2">2</option>
                                </select>
                            </div>
                        </div>
                        <div className={cx('options')}>
                            <p className={cx('title')}>Justify</p>
                            <div className={cx('justify')}>
                                <div className={cx('justify-icon', settings.justify === 'left' && 'active')}>
                                    <i
                                        className="fa-solid fa-align-left"
                                        onClick={() => handleChange({ target: { name: 'justify', value: 'left' } })}
                                    ></i>
                                </div>
                                <div className={cx('justify-icon', settings.justify === 'justify' && 'active')}>
                                    <i
                                        className="fa-solid fa-align-justify"
                                        onClick={() => handleChange({ target: { name: 'justify', value: 'justify' } })}
                                    ></i>
                                </div>
                                <div className={cx('justify-icon', settings.justify === 'right' && 'active')}>
                                    <i
                                        className="fa-solid fa-align-right"
                                        onClick={() => handleChange({ target: { name: 'justify', value: 'right' } })}
                                    ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;
