import React, { ComponentType } from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider, theme } from '@chakra-ui/core';

type ArgumentsType<T> = T extends (...args: infer U) => any ? U : never;
type RenderArgs = ArgumentsType<typeof render>;

const Providers: ComponentType = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const customRender = (ui: RenderArgs[0], options?: RenderArgs[1]) =>
  render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';
export { customRender as render };
