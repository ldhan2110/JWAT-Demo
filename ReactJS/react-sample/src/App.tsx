import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BasicReduxDemo } from './demo/redux/BasicReduxDemo'
import { Provider } from 'react-redux'
import { store } from './demo/redux/redux-toolkit/store'
import { BasicZustandDemo } from './demo/zustand/basic/BasicZustandDemo'

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* Uncomment each components to see demo */}
      {/* <Demo1 /> */}
      {/* <Demo2 /> */}
      {/* <Demo3 /> */}
      {/* <Demo4 /> */}
      {/* <Demo5 /> */}
      {/* <Demo6 /> */}
      {/* <Demo7 /> */}
      {/* <Demo8 /> */}
      {/* <Demo9 /> */}
      {/* <Demo10 /> */}

      {/* Zustand Demo */}
      <BasicZustandDemo />

      {/* Redux Toolkit Demo */}
      {/* <Provider store={store}>
        <BasicReduxDemo />
      </Provider> */}
    </>
  )
}

export default App




















