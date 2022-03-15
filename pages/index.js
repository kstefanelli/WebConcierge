import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Web Concierge</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        {/* right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Email</p>
          <p className="link">Images</p>
        </div>
      </header>
    </div>
  );
}
