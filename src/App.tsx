import { useState } from 'react'

import reactLogo from './assets/react.svg'

import styles from './App.module.css'

import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a
          href='https://vite.dev'
          target='_blank'
        >
          <img
            src={viteLogo}
            className={styles.logo}
            alt='Vite logo'
          />
        </a>
        <a
          href='https://react.dev'
          target='_blank'
        >
          <img
            src={reactLogo}
            className={[styles.logo, styles.react].join(', ')}
            alt='React logo'
          />
        </a>
      </div>
      <h1>Module A</h1>
      <div className={styles.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className={styles.readTheDocs}>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
