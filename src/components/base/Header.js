import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';

import logo from "../../assets/img/logo.png";
import icons from "../../assets/img/icons.svg";
import {fetchRecipes} from "../../redux/actions";

class Header extends React.Component {
    onSearch = formValues => {
        this.props.fetchRecipes(formValues.search)
    };

    renderInput = ({input, meta, label, type, placeholder}) => {
        return (
            <input
                className="search__field"
                type={type}
                placeholder={placeholder}
                {...input}
            />
        );
    };

    render() {
        const {handleSubmit} = this.props;

        return (
            <header className="header">
                <img src={logo} alt="Logo" className="header__logo"/>
                <form onSubmit={handleSubmit(this.onSearch)} className="search">
                    <Field
                        name="search"
                        component={this.renderInput}
                        type="text"
                        placeholder="Search over 1,000,000 recipes..."
                    />
                    <button className="btn search__btn">
                        <svg className="search__icon">
                            <use href={`${icons}#icon-magnifying-glass`}/>
                        </svg>
                        <span>Search</span>
                    </button>
                </form>
                <div className="likes">
                    <div className="likes__field">
                        <svg className="likes__icon">
                            <use href={`${icons}#icon-heart`}/>
                        </svg>
                    </div>
                    <div className="likes__panel">
                        <ul className="likes__list">

                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues.search) {
        errors.search = 'Search Field can not be empty';
    }

    return errors;
};

export default compose(
    connect(null, {fetchRecipes}),
    reduxForm({form: 'search', validate})
)(Header);