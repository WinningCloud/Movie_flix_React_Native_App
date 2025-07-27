import { Text, View, Image } from "react-native";
import React from 'react'
import {Link} from "expo-router";
import {icons} from "@/constants/icons";
export default function Saved() {
    return (
        <View className="flex-1 items-center justify-center bg-primary ">

            <Image source={icons.save} className="size-10"></Image>
            <Text className="text-4xl font-bold text-light-200">
                Saved
            </Text>
        </View>
    );
}
