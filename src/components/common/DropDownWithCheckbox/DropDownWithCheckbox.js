import React from 'react';
import Select from 'react-select';
import {colors} from "../../../constants/Colors";
import './DropDownWithCheckbox.scss'

export const DropDownWithCheckbox = props => {
  const {options, onChange, defaultValue} = props
  const styles = {
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: colors.$pink
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: colors.$white,
    }),
    option: (styles, {data, isDisabled, isFocused, isSelected}) => {
      return {
        ...styles,
        menu: {padding: 0, margin: 0, backgroundColor: colors.$grey4,},
        menuList: {padding: 0, margin: 0, backgroundColor: colors.$grey4,},
        menuPortal: {padding: 0, margin: 0, backgroundColor: colors.$grey4,},

        backgroundColor:
          isDisabled ? null
            : isSelected
            ? data.color
            : isFocused
              ? colors.$pink
              : colors.$grey4,
        ':active': {
          ...styles[':active'],
          backgroundColor: colors.$pink
        }
      }
    }
  };
  return (
    <Select
      defaultValue={defaultValue}
      classname={"drop-down-with-checkbox"}
      label={"Источник"}
      options={options}
      styles={styles}
      isMulti
      onChange={e=>{
        onChange(e)
      }}
      theme={theme => ({
        ...theme,
        colors: {
          ...theme.colors,
          neutral0: colors.$grey4,
          primary: colors.$pink
        },
      })}
    />
  )
}