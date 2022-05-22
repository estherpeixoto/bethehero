import { getStorage, setStorage } from '@utils/storage'
import { useEffect, useState } from 'react'
import { FiMoon } from 'react-icons/fi'
import { ButtonIcon } from './ButtonIcon'

export const DarkModeToggle = () => {
  const [checked, setChecked] = useState(
    getStorage('theme') === 'dark' ? true : false
  )

  const html = document.getElementsByTagName('HTML')[0]

  useEffect(() => {
    html.setAttribute('data-theme', getStorage('theme'))
  }, [])

  const toggleThemeChange = () => {
    if (checked === false) {
      setStorage('theme', 'dark')
      html.setAttribute('data-theme', getStorage('theme'))
      setChecked(true)
    } else {
      setStorage('theme', 'light')
      html.setAttribute('data-theme', getStorage('theme'))
      setChecked(false)
    }
  }

  return (
    <ButtonIcon onClick={toggleThemeChange}>
      <FiMoon size={24} />
    </ButtonIcon>
  )
}
