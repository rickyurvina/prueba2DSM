import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  HelperText,
  TextInput,
  List,
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
} from 'react-native-paper';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [text, setText] = React.useState('');
  const onChangeText = text => setText(text);

  const hasErrors = () => {
    return !text.includes('@');
  };
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;
  return (
    <SafeAreaView style={backgroundStyle}>
      <View>
        <TextInput label="Email" value={text} onChangeText={onChangeText} />
        <HelperText type="error" visible={hasErrors()}>
          Email address is invalid!
        </HelperText>
      </View>
      <View>
        <List.Item
          title="First Item"
          description="Item description"
          left={props => <List.Icon {...props} icon="folder" />}
        />
      </View>
      <View>
        <Card>
          <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
            left={LeftContent}
          />
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
          <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
