import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'
import '../styles/Home.css'
import '../styles/Register.css'
import '../styles/media.css'
import '../styles/landing.css'
// import "@/styles/Login.css";
// import "../styles/GameList.css";
// import "../styles/ItemCard.css";
import { Provider } from 'react-redux'
import store from '../store/store'

export default function App ({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
