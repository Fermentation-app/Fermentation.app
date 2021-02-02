// This a custom bigger text input specifically styled to match header exceptations, usually meant for ferment titles and heavy titles.
// Since our form for registering ferment WILL be long and complex, we chose to simplify and spread it out for readability.

// This component ONLY WORKS within a <Formik> component and as a child of a <Field> component.

import {TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {Fonts, Colors} from 'res';

const SubheaderTextInput = (props) => {
  // Formik sends in the props that automagically connects the Input form with the
  // general Formik Context (provided within the AddFerment screen with <Formik> component)

  const {
    field: {name, onBlur, onChange, value},
    form: {setFieldTouched},
    ...inputProps
  } = props;

  // The onChange(name)(text) is specific to Formik allows us to send in from the parent component a "name" prop that serves as an ID ;
  // The text is the value put in by the user.
  // setFieldTouched is a Formik hook and onBlur allow the parent component to be aware of which Input is in interaction with the user.

  return (
    <>
      <TextInput
        style={styles.subheaderText}
        value={value}
        onChangeText={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        {...inputProps}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  subheaderText: {
    fontSize: Fonts.subheaderSize,
    fontFamily: Fonts.primaryTypo,
    textAlign: 'center',
    color: Colors.primary,
  },
});

export default SubheaderTextInput;
