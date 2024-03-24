## Cool ios style react native picker

First add the package using this command:

    yarn add react-native-cool-picker
Or if you're using npm:

    npm install react-native-cool-picker


Here's an example code for how you can use it:

     import  CoolPicker  from  "react-native-cool-picker";
     import { View } from  'react-native';
     
     const Something = () => {
     
        const items = []
	    const items2 = []
	    
	    for (let i = 1; i <= 59; i++) {
	        items.push({ label: `${i} Minutes`, value: `${i}` });
	    }
	    for (let i = 1; i <= 24; i++) {
	        items2.push({ label: `${i} Hours`, value: `${i}` });
	    }
	
		return(
			<View style = {{ backgroundColor: 'rgb(98, 189, 167)' }}>
				<CoolPicker 
					items={items}
					numberOfItemsToShow={5}
					initialSelectedIndex={21}
					animateInitialSelectedIndex={false}
					containerStyles={{ backgroundColor:  'transparent', width:  130 }}
					highlightStyles={{ width:  100 }}
					pickerItemHeight={24}  />
			</View>
		)	    
     }
     
     export default Something


This should be how it looks

![Example output](https://s8.uupload.ir/files/ezgif-1-3638d371f7_9zrv.gif)

.....



| Props|type  |Example|
|--|--|--|
| items |List  |`[ { label: '10 Minutes', value: '10' }, { label: '20 Minutes', value: '20' } ]`|
|pickerItenHeight|int|`34`|
|textStyles|style|`{ {fontSize: 16} }`|
|containerStyles|style|I don't have time to write example
|highlightStyles|style|I still don't have time|
|numberOfItemsToShow|int (odd)|`5`
|initialSelectedIndex|int|`0`|
|animateInitialSelectedIndex|bool|`true`|
|onItemSelected|function|`(selectedItem) => console.log(selectedItem)`

....
An example of how Items should look like:

    const items = [
    	{label: 'Item 1', Value: '1'},
    	{label: 'Item 2, Value: '2'},
    	{label: 'Item 3', Value: '3'},
    ]


.....................

## **If you found this helpful, don't forget to give a shining Star !**
