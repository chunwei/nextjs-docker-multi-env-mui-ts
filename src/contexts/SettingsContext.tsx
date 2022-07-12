// import PropTypes from 'prop-types'
import React, { createContext } from 'react'
// hooks
import useLocalStorage from '../hooks/useLocalStorage'
// utils
import getColorPresets, { colorPresets, defaultPreset } from '../utils/getColorPresets'
// config
import { defaultSettings } from '../settings/UISettings'

// ----------------------------------------------------------------------
// type SettingsContextProps = any
const initialState = {
  ...defaultSettings,
  onChangeMode: () => {},
  onToggleMode: () => {},
  onChangeDirection: () => {},
  onChangeColor: () => {},
  onToggleStretch: () => {},
  onChangeLayout: () => {},
  onResetSetting: () => {},
  setColor: defaultPreset,
  colorOption: []
}

const SettingsContext = createContext(initialState)

// ----------------------------------------------------------------------

// SettingsProvider.propTypes = {
//   children: PropTypes.node
// }

const SettingsProvider = (props: any): JSX.Element => {
  const { children } = props
  console.log('SettingsProvider', typeof localStorage)
  const [settings, setSettings] = useLocalStorage('settings', {
    themeMode: initialState.themeMode,
    themeDirection: initialState.themeDirection,
    themeColorPresets: initialState.themeColorPresets,
    themeStretch: initialState.themeStretch,
    themeLayout: initialState.themeLayout
  })

  const onChangeMode = (event: any) => {
    setSettings({
      ...settings,
      themeMode: event.target.value
    })
  }

  const onToggleMode = () => {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === 'light' ? 'dark' : 'light'
    })
  }

  const onChangeDirection = (event: any) => {
    setSettings({
      ...settings,
      themeDirection: event.target.value
    })
  }

  const onChangeColor = (event: any) => {
    setSettings({
      ...settings,
      themeColorPresets: event.target.value
    })
  }

  const onChangeLayout = (event: any) => {
    setSettings({
      ...settings,
      themeLayout: event.target.value
    })
  }

  const onToggleStretch = () => {
    setSettings({
      ...settings,
      themeStretch: !settings.themeStretch
    })
  }

  const onResetSetting = () => {
    setSettings({
      themeMode: initialState.themeMode,
      themeLayout: initialState.themeLayout,
      themeStretch: initialState.themeStretch,
      themeDirection: initialState.themeDirection,
      themeColorPresets: initialState.themeColorPresets
    })
  }

  return (
    <SettingsContext.Provider
      value={{
        ...settings,
        // Mode
        onChangeMode,
        onToggleMode,
        // Direction
        onChangeDirection,
        // Color
        onChangeColor,
        setColor: getColorPresets(settings.themeColorPresets),
        colorOption: colorPresets.map((color) => ({
          name: color.name,
          value: color.main
        })),
        // Stretch
        onToggleStretch,
        // Navbar Horizontal
        onChangeLayout,
        // Reset Setting
        onResetSetting
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export { SettingsProvider, SettingsContext }
