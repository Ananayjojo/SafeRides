import {  FlatList, Text, TouchableOpacity, View, Image} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


const data = [
{
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",

}
];

const NavOptions = () => {

    const navigation = useNavigation();

    return(
        <FlatList 
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
            <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
                style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                <View>
                    <Image 
                        style={{width: 120, height: 120, resizeMode: 'contain'}}
                        source={{uri: item.image}}
                        />
                        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                        <Icon 
                        style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                        name="arrowright" 
                        color="white" 
                        type = "antdesign"/>
                </View>
            </TouchableOpacity>
        )} 
        />
    );
};

export default NavOptions;

