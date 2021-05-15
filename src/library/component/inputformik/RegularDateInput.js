// RegularDateInput
// This is a custom date component made for DatePicker to interact with Formik easily.
// Since our form for registering ferment WILL be long and complex, we chose to simplify and spread it out for readability.

// This component ONLY WORKS within a <Formik> component and as a child of a <Field> component.

import React from 'react';
import {StyleSheet, View} from 'react-native';
import DatePicker from 'react-native-date-picker';

const RegularDateInput = (props) => {
  const {
    field: {name, value},
    form: {setFieldValue},
  } = props;

  // Here, as for FormTextInput, we take the "name" to id the field, value to have an initial value to pass to the picker
  // SetFieldValue allows us to bind Formik with this component onDateChange without too much problem.
  // The DatePicker is quite simple. Here we chose to use the android variant for more integration with the general context
  // we might either create our own Date Picker or chose to adapt the variation around the user' OS.

  // Styling wise, might be easier to use the "traditionnal way" through Stylesheet. Will see how it works out.

  return (
    <View style={styles.container}>
      <DatePicker
        androidVariant="nativeAndroid"
        date={value}
        onDateChange={(val) => setFieldValue(name, val)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default RegularDateInput;
