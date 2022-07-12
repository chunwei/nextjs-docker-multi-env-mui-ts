// import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
// @mui
import { CssBaseline } from '@mui/material'
import {
  createTheme,
  ThemeOptions,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider
} from '@mui/material/styles'

// hooks
import useSettings from '../hooks/useSettings'
//
import palette from './palette'
import typography from './typography'
import breakpoints from './breakpoints'
import componentsOverride from './overrides'
import shadows, { CustomShadows, customShadows } from './shadows'

// ----------------------------------------------------------------------

// ThemeProvider.propTypes = {
//   children: PropTypes.node
// }
declare module '@mui/material/styles' {
  // interface ThemeOptions {
  //   direction?: string
  // }
  interface Theme {
    customShadows: CustomShadows
  }
  interface PaletteColor {
    lighter?: string
    darker?: string
  }
  interface TypeBackground {
    neutral?: string
  }
}

const ThemeProvider = (props: any): JSX.Element => {
  const { children } = props
  const { themeMode, themeDirection } = useSettings()
  const isLight = themeMode === 'light'

  const themeOptions = useMemo<ThemeOptions>(
    () => ({
      palette: isLight ? palette.light : palette.dark,
      typography,
      breakpoints,
      shape: { borderRadius: 8 },
      direction: themeDirection,
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: isLight ? customShadows.light : customShadows.dark
    }),
    [isLight, themeDirection]
  )

  const theme = createTheme(themeOptions)
  theme.components = componentsOverride(theme)

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  )
}

export default ThemeProvider
