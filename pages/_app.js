// pages/_app.js
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-yellow-100 to-orange-200">
            <Header />
            <main className="flex-grow">
                <Component {...pageProps} />
            </main>
            <Footer />
        </div>
    );
}

export default MyApp;