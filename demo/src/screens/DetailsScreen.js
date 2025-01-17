import React from "react";
import { View, Text } from "react-native";


function DetailsScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
                title="Go back"
                onPress={() => navigation.goBack()}
            />
            <Button
                title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()}
            />
      </View>

    );
  }

  export default DetailsScreen;