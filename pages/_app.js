import '../styles/globals.css'
import {
  RecoilRoot,
} from 'recoil';
import Script from 'next/dist/client/experimental-script'

function MyApp({ Component, pageProps }) {

  return (
    <RecoilRoot>
      <Script async src="https://stats.anthony-adam.fr/tracker.js" data-ackee-server="https://stats.anthony-adam.fr" data-ackee-domain-id="79c45307-311c-4080-8461-84e4d92fcb71" />
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
