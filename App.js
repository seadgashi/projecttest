import React from 'react';
import { View, Text } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

const App = () => {
  return (
    <StyledView className="flex-1 justify-center items-center bg-blue-500">
      <StyledText className="text-white text-lg">Hello!</StyledText>
    </StyledView>
  );
};

export default App;
