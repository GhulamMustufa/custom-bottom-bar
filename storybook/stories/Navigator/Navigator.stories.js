import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react-native';
import Navigator from './index';

storiesOf('Navigator', module).add('to Storybook', () => <Navigator/>);
