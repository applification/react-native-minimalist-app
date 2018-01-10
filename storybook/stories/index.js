import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import CenterView from './CenterView';

import {
  Text,
  Content,
  HeaderText,
  BodyText,
  Profile,
  Divider
} from 'react-native-minimalist';

storiesOf('Minimalist UI Text', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Text', () => <Text>Hey Hey Hey!!!</Text>)
  .add('Text Other', () => <Text>Other text</Text>);

storiesOf('Minimalist UI Content', module)
  .add('DefaultProps (white)', () => <Content />)
  .add('Passed in Props (pink)', () => (
    <Content backgroundColor="pink">
      <Text>Children props</Text>
    </Content>
  ));

storiesOf('HeaderText', module)
  .add('HeaderText', () => <HeaderText>Big Header</HeaderText>)
  .add('HeaderText in red', () => (
    <HeaderText color="red">Red Header</HeaderText>
  ))
  .add('HeaderText should be single line even if long', () => (
    <HeaderText>React Native Minimalist</HeaderText>
  ));

storiesOf('BodyText', module).add('BodyText', () => (
  <BodyText>Body text</BodyText>
));

storiesOf('Profile', module)
  .add('Profile', () => <Profile />)
  .add('Profile URI', () => (
    <Profile
      source={{
        uri:
          'https://pbs.twimg.com/profile_images/941645845409226752/Lt1apZ3Q_400x400.jpg'
      }}
    />
  ));

storiesOf('Divider', module)
  .add('Divider', () => <Divider />)
  .add('Divider Red', () => <Divider color="red" />)
  .add('Divider fullWidth', () => <Divider fullWidth />);
