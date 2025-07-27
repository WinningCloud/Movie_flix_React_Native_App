import { Text, View, Image } from "react-native";
import React from 'react'
import {Link} from "expo-router";
import {icons} from "@/constants/icons";
export default function Profile() {
    return (
        <View className="flex-1 items-center justify-center bg-primary">
            <Image source={icons.person} className="size-10" tintColor="white"></Image>
            <Text className="text-4xl font-bold text-light-200">
                User6389
            </Text>

        </View>
    );
}
