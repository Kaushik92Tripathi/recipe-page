import Layout from "@/components/Layout";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return (
    <div className="bg-gradient-to-br from-yellow-100 to-orange-200 min-h-screen font-sans">
      {getLayout(<Component {...pageProps} />)}
    </div>
  );
}

export default MyApp;
