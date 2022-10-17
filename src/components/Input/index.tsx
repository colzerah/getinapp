import React from 'react';
import {InputAccessoryViewProps, Keyboard} from 'react-native';
import {useTheme} from 'styled-components';
import {search} from '../../assets';

import {Container, InputComponent, IconSearch} from './styles';

interface IInputProps {
  type?: 'button' | 'default';
  onChange?(value: string): void;
  onPress?(): void;
  placeholder?: string;
  value?: string;
  focus?: boolean;
}

export function Input({
  type = 'default',
  onChange,
  onPress,
  placeholder,
  value,
  focus = false,
}: IInputProps): JSX.Element {
  const {colors} = useTheme();
  const typeButton = type === 'default';

  return (
    <Container>
      <InputComponent
        autoFocus={focus}
        value={value}
        onPressIn={() => {
          if (!typeButton) {
            if (onPress) {
              onPress();
            }
          }
        }}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor={colors.dark}
        selectionColor={colors.primary}></InputComponent>
      <IconSearch source={search} riseMode="stretch" />
    </Container>
  );
}
