
# react-native-cool-picker

Enhance your React Native applications with `react-native-cool-picker`, a customizable picker component designed to offer a smooth, iOS-style selection experience. Perfect for time, date, or any custom data selection, this picker integrates seamlessly with your React Native projects, providing a stylish and intuitive user interface component.

## Installation

Install the package using Yarn or npm:

**Yarn:**
`yarn add react-native-cool-picker` 

**npm:**
`npm install react-native-cool-picker` 

## Usage

Here's how to implement `react-native-cool-picker` in your React Native application:

```jsx

	import React from 'react';
	import { View } from 'react-native';
	import CoolPicker from "react-native-cool-picker";

	const MyComponent = () => {
	    const minutesItems = Array.from({ length: 59 }, (_, i) => ({ label: `${i + 1} Minutes`, value: `${i + 1}` }));
	    const hoursItems = Array.from({ length: 24 }, (_, i) => ({ label: `${i + 1} Hours`, value: `${i + 1}` }));

	    return (
	        <View style={{ backgroundColor: 'rgb(98, 189, 167)' }}>
	            <CoolPicker 
	                items={minutesItems}
	                numberOfItemsToShow={5}
	                initialSelectedIndex={21}
	                animateInitialSelectedIndex={false}
	                containerStyles={{ backgroundColor: 'transparent', width: 130 }}
	                highlightStyles={{ width: 100 }}
	                pickerItemHeight={24} />
	        </View>
	    );
	};
	export default MyComponent;
```



![Cool Picker Example](https://s8.uupload.ir/files/ezgif-1-3638d371f7_9zrv.gif)

## Props

Configure `react-native-cool-picker` using the following props for a tailored component experience:

| Prop                          | Type      | Description                                                                               | Example                                                     |
| ----------------------------- | --------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| `items`                       | `Array`   | Array of objects with `label` and `value` keys for picker items.                          | `[ { label: '10 Minutes', value: '10' }, ... ]`             |
| `pickerItemHeight`            | `Number`  | Height of each picker item.                                                               | `34`                                                        |
| `textStyles`                  | `Object`  | Styles for the picker item text.                                                          | `{ fontSize: 16 }`                                           |
| `containerStyles`             | `Object`  | Styles for the picker container.                                                          | `{ backgroundColor: 'transparent', width: 130 }`            |
| `highlightStyles`             | `Object`  | Styles for the highlighted item indicator.                                                | `{ width: 100 }`                                            |
| `numberOfItemsToShow`         | `Number`  | Number of items to display in the picker at once. Must be an odd number.                  | `5`                                                         |
| `initialSelectedIndex`        | `Number`  | Index of the initially selected item.                                                     | `0`                                                         |
| `animateInitialSelectedIndex` | `Boolean` | Whether to animate the picker to the initially selected item.                             | `true`                                                      |
| `onItemSelected`              | `Function`| Callback function triggered when an item is selected. Receives the selected item object.  | `(selectedItem) => console.log(selectedItem)`               |


## Example Items Array


```jsx
const items = [
    { label: '10 Minutes', value: '10' },
    { label: '20 Minutes', value: '20' },
    { label: '30 Minutes', value: '30' },
];
``` 

## Support

For support, issues, or contributions, please [open an issue](https://github.com/CattyVayrex/react-native-cool-picker/issues) on GitHub. Contributions are always welcome!

## License

`react-native-cool-picker` is MIT licensed. See LICENSE for details.

----------

## Star Us!

Found `react-native-cool-picker` helpful? Give us a star on [GitHub](https://github.com/CattyVayrex/react-native-cool-picker) to support the project!