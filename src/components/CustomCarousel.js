// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import Carousel from 'react-native-reanimated-carousel';

// const App = () => {
//     const data = [
//         { key: '1', label: 'Item 1' },
//         { key: '2', label: 'Item 2' },
//         { key: '3', label: 'Item 3' },
//     ];

//     return (
//         <View style={styles.container}>
//             <Carousel
//                 loop
//                 width={300} // Width of the carousel
//                 height={200} // Height of the carousel
//                 autoPlay={true} // Enable autoplay
//                 data={data}
//                 renderItem={({ item }) => (
//                     <View style={styles.slide}>
//                         <Text>{item.label}</Text>
//                     </View>
//                 )}
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     slide: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#ccc',
//         borderRadius: 8,
//         height: 200,
//     },
// });

// export default App;
