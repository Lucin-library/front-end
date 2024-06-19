import { useNavigate } from 'react-router-dom';
import './index.css';
import { useState } from 'react';

function Dropdown({ title, elements, image = null }) {
    console.log(elements);
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
                                    {typeof el === 'object' ? (
                                        <a href={el.href}>
                                            {el.icon}
                                            {el.name}
                                        </a>
                                    ) : (
                                        <a href={`/book/recommend/genre/${el}`}>{el}</a>
                                    )}
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
