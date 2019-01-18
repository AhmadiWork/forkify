import React from 'react';

import test_1 from "../../assets/img/test-1.jpg";
import icons from "../../assets/img/icons.svg";

export default () => {
    return (
        <div className="recipe">

            <figure className="recipe__fig">
                <img src={test_1} alt="Tomato" className="recipe__img"/>
                <h1 className="recipe__title">
                    <span>Pasta with tomato cream sauce</span>
                </h1>
            </figure>
            <div className="recipe__details">
                <div className="recipe__info">
                    <svg className="recipe__info-icon">
                        <use href={`${icons}#icon-stopwatch`}/>
                    </svg>
                    <span className="recipe__info-data recipe__info-data--minutes">45</span>
                    <span className="recipe__info-text"> minutes</span>
                </div>
                <div className="recipe__info">
                    <svg className="recipe__info-icon">
                        <use href={`${icons}#icon-man`}/>
                    </svg>
                    <span className="recipe__info-data recipe__info-data--people">4</span>
                    <span className="recipe__info-text"> servings</span>

                    <div className="recipe__info-buttons">
                        <button className="btn-tiny">
                            <svg>
                                <use href={`${icons}#icon-circle-with-minus`}/>
                            </svg>
                        </button>
                        <button className="btn-tiny">
                            <svg>
                                <use href={`${icons}#icon-circle-with-plus`}/>
                            </svg>
                        </button>
                    </div>

                </div>
                <button className="recipe__love">
                    <svg className="header__likes">
                        <use href={`${icons}#icon-heart-outlined`}/>
                    </svg>
                </button>
            </div>


            <div className="recipe__ingredients">
                <ul className="recipe__ingredient-list">
                    <li className="recipe__item">
                        <svg className="recipe__icon">
                            <use href={`${icons}#icon-check`}/>
                        </svg>
                        <div className="recipe__count">1000</div>
                        <div className="recipe__ingredient">
                            <span className="recipe__unit">g</span>
                            pasta
                        </div>
                    </li>
                </ul>

                <button className="btn-small recipe__btn">
                    <svg className="search__icon">
                        <use href={`${icons}#icon-shopping-cart`}/>
                    </svg>
                    <span>Add to shopping list</span>
                </button>
            </div>

            <div className="recipe__directions">
                <h2 className="heading-2">How to cook it</h2>
                <p className="recipe__directions-text">
                    This recipe was carefully designed and tested by
                    <span className="recipe__by">The Pioneer Woman</span>. Please check out directions at their website.
                </p>
                <a className="btn-small recipe__btn" href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/" target="_blank" rel="noopener noreferrer">
                    <span>Directions</span>
                    <svg className="search__icon">
                        <use href={`${icons}#icon-triangle-right`}/>
                    </svg>
                </a>
            </div>

        </div>
    );
}