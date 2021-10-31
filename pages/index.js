import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'

export default function Home() {
  return (
    <div className={styles.container} className="bg-gray-900">
      <Head>
        <title>JAWS PANKRATION 2021</title>
        <meta name="description" content="JAWS PANKRATION 2021" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src = "https://player.live-video.net/1.5.0/amazon-ivs-player.min.js"
        strategy="afterInteractive"
        onLoad = {() => {
          if (IVSPlayer.isPlayerSupported) {
            const player = IVSPlayer.create();
            player.attachHTMLVideoElement(document.getElementById('video-player'));
            player.load(process.env.IVS_STREAM_URL);
            player.play();
          }
        }}
      />
      <header className="text-center">
        <Image src="/jawspankration_main-image.png" alt="JAWS PANKRATION header" width={1440} height={230} />
      </header>
      <main className={styles.main}>
        <video id="video-player" width="1000" height="700" controls playsInline className="px-8"></video>

        <div className={styles.grid} className="text-white">
          {/* TODO: fetch watching count data */}
          123 waching
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
