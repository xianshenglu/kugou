import { NavLink } from 'react-router'
import styles from './App.module.css'
import { microFrontEndMode } from './models/microFrontEndMode'

function App() {
  const subAppLinks = Object.entries(microFrontEndMode).map(([key, value]) => {
    return <NavLink className={styles.App__navLink} to={value} key={key}>{key}</NavLink>
  })

  return (
    <>
      <NavLink className={styles.App__navLink} to='/'>Home</NavLink>
      {subAppLinks}
      <hr />
    </>
  )
}

export default App
