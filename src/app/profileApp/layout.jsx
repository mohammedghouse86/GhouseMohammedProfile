import Head from 'next/head';
export const metadata = {
  title: "Ghouse Mohammed Web Developer Profile",
  description: "Ghouse Mohammed Web Developer Profile",
};

export default function ProfileApp({ children, PNavbar }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <div>
        <div style={{ padding: '20px' }}>
          {PNavbar} {/* Rendering the Navbar component */}
        </div>
        {children} {/* Rendering the rest of the page content */}
      </div>
      </>
  );
}
