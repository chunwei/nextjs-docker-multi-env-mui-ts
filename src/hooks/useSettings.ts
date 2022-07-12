/*
 * @Author: Chunwei Lu
 * @Date: 2022-07-04 10:17:04
 * @LastEditTime: 2022-07-04 10:17:09
 * @LastEditors: Chunwei Lu
 * @FilePath: /nextjs-docker-multi-env/src/hooks/useSettings.ts
 */
import { useContext } from 'react'
import { SettingsContext } from '../contexts/SettingsContext'

// ----------------------------------------------------------------------

const useSettings = () => useContext(SettingsContext)

export default useSettings
