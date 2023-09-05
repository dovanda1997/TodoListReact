import React, { useState } from 'react'
import PropTypes from 'prop-types';

/**
 * 
 * @typeof FilterOptionProps
 * 
 * @property {string} label Nhan cua input
 * @property {string} value Gia tri o input
 * @property {string} checked Cho biet o input co dc chn hay ko
 */

/** hien thi mot check box
 * @param {FilterOptionProps} props
 */

const FilterOption = ({label, value, checked, onChange}) => {
  const handelChange =() =>{
    onChange(value)
  }
  return (
   <label className='filter-option p-d-lr'>
    <input
    type='radio'
    name='filter-option'
    value={value}
    checked={checked}
    onChange={handelChange}
   
    />
   {label}
    
   </label>
  )
}
FilterOption.PropTypes = {
    label:PropTypes.string,
    value:PropTypes.string,
    checked:PropTypes.string,
}

export default FilterOption