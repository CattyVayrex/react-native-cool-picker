import { useRef, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Animated, Text } from 'react-native';
import { debounce } from 'lodash';

const CoolPicker = ({
  items,
  pickerItemHeight = 34,
  textStyles = {},
  containerStyles = {},
  highlightStyles = {},
  numberOfItemsToShow = 5,
  initialSelectedIndex = 0,
  animateInitialSelectedIndex = true,
  onItemSelected = (selectedItem) => console.log(selectedItem)
}) => {

    numberOfItemsToShow % 2 == 0 && console.warn("numberOfItemsToShow an even number? you crazy dude? this should be an odd number :)");

    const scrollViewRef = useRef(null);
    const actualInitialSelectedIndex = initialSelectedIndex + ((numberOfItemsToShow - 1) / 2)
    const pickerHeight = pickerItemHeight * numberOfItemsToShow;

    // Store the scroll position as an Animated.Value
    const scrollY = useRef(new Animated.Value(0)).current;
    const HalfPickerHeight = pickerHeight / 2;

    useEffect(() => {
        // Calculate initial scroll position based on actualInitialSelectedIndex
        const initialScrollPosition = pickerItemHeight * actualInitialSelectedIndex - (pickerHeight - pickerItemHeight) / 2;
        // Scroll to the initial position
        scrollViewRef.current?.scrollTo({ y: initialScrollPosition, animated: animateInitialSelectedIndex });
    }, [actualInitialSelectedIndex, pickerItemHeight, pickerHeight]);

    // Function to calculate scale based on item's position
    const calculateScale = (itemIndex) => {
        const itemCenterPosition = pickerItemHeight * (itemIndex + (numberOfItemsToShow - 1)/2) + pickerItemHeight / 2;
        return scrollY.interpolate({
            inputRange: [
                itemCenterPosition - pickerHeight,
                itemCenterPosition - HalfPickerHeight,
                itemCenterPosition,
            ],
            outputRange: [0.7, 1, 0.7],
            extrapolate: 'clamp',
        });
    };


    // Create a debounced version of the function that determines the selected item
    const handleSelectionChange = debounce((yOffset) => {
        const index = Math.round(yOffset / pickerItemHeight);
        const selectedItem = items[index];
        if (selectedItem) {
            onItemSelected(selectedItem.value);
        }
    }, 80);


    // Function to handle scroll event and determine the selected item
    const handleScroll = (event) => {
        const yOffset = event.nativeEvent.contentOffset.y;
        handleSelectionChange(yOffset); // Use the debounced function here
    };    


    const renderItems = () => {
        return items.map((item, index) => {
            const scale = calculateScale(index);
            return (
                <Animated.View key={index} style={[styles.item, { transform: [{ scale }] }, { height: pickerItemHeight }]}>
                    <Text style={[styles.text, textStyles]}>{item.label}</Text>
                </Animated.View>
            );
        });
    };

    return (
        <View style={[styles.container, containerStyles, { height: pickerHeight }]}>
            <ScrollView
                ref={scrollViewRef}
                snapToInterval={pickerItemHeight}
                decelerationRate="fast"
                showsVerticalScrollIndicator={false}
                onScroll={Animated.event(
                  [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                  { useNativeDriver: false, listener: handleScroll } // Added listener to handle scroll
                )}
                scrollEventThrottle={16}
            >
                <View style={{ height: (pickerHeight - pickerItemHeight) / 2 }} />
                {renderItems()}
                <View style={{ height: (pickerHeight - pickerItemHeight) / 2 }} />
            </ScrollView>
            <View style={[styles.highlight, highlightStyles, { top: (pickerHeight - pickerItemHeight) / 2, height: pickerItemHeight, left: ((containerStyles.width ? containerStyles.width : styles.container.width) - ( highlightStyles.width ? highlightStyles.width : styles.highlight.width))/2 }]} />
        </View>
    );
};


// Default styles
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: 130,
        backgroundColor: '#cecece'
    },
    item: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 14,
        color: '#000',
    },
    highlight: {
        position: 'absolute',
        left: 0,
        width: 130,
        alignSelf: 'center',
        right: 0,
        borderRadius: 8,
        pointerEvents: 'none',
        backgroundColor: 'rgba(232, 235, 242, 0.85)',
        zIndex: -1,
    },
});

export default CoolPicker;
