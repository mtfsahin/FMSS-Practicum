import React from 'react';
import PropTypes from 'prop-types';
import "../SwitchButton/index.css";


const SwitchButton = ({ customContainer, outerClass, switchButtonID, inputClass, onChange, disabled }) => {
    return (
        customContainer
            ? customContainer
            : (<span className={outerClass}>
                <input id={switchButtonID} className={inputClass} type="checkbox" onChange={(e) => onChange(e)} disabled={disabled} />
                <label htmlFor={switchButtonID} ></label>
            </span>)
    );
}

//propTpes ile  propsların olmasını istediğim typlerını belirttim
SwitchButton.propTypes = {
    outerClass: PropTypes.string,
    switchButtonID: PropTypes.any.isRequired,
    inputClass: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool
}

//default propsları set ettim
SwitchButton.defaultProps = {
    outerClass: "",
    switchButtonID: "",
    inputClass: "",
    onChange: () => { },
    disabled: false
};

export default SwitchButton;