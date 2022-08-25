import "@/css/fonts.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "@/css/main.css";
import "toastr/build/toastr.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/Header";
import {ApolloProvider} from "@apollo/client";
import client from "@/config/apollo_client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
    <ThemeProvider attribute="class" defaultTheme="system">
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
