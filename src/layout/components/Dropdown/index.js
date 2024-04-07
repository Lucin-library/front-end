import './index.css';

function Dropdown({ title, elements, image = null }) {
    return (
        <div class="dropdown-center nav-option">
            <a class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" href="#">
                {title}
                {image !== null && <img src={image} alt="" />}
                <span class="tf-ion-ios-arrow-down"></span>
            </a>
            <div class="dropdown-menu">
                <div class="row">
                    <div class="col-lg-12">
                        <ul>
                            {elements.map((el) => (
                                <li>
                                    <a href={el.href}>
                                        {el.icon}
                                        {el.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;
