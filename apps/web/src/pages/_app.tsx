import RootLayout from "@/components/Layout/Layout";
import store from "@/store/store";
import "@/style.css";
import { Analytics } from "@vercel/analytics/react";
import moment from "moment";
import "moment/locale/tr";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import "tippy.js/dist/tippy.css";
import seo from "../../next-seo.config";
import type { Page } from "../types/page";
moment.locale("tr");

type Props = AppProps & {
  Component: Page;
};

const App = ({ Component, pageProps }: Props) => {
  return (
    <Fragment>
      <DefaultSeo {...seo} />
      <Provider store={store}>
        <RootLayout>
          <a href="https://www.producthunt.com/products/devsozluk/reviews?utm_source=badge-product_review&utm_medium=badge&utm_souce=badge-devsozluk" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=549647&theme=light" alt="DevS&#0246;zl&#0252;k - Open&#0032;source&#0032;social&#0032;platform&#0032;for&#0032;developers&#0046; | Product Hunt" style={{position: "fixed", right: 50, bottom: 50, width: 250, height: 54}} width="250" height="54" /></a>
          <Component {...pageProps} />
        </RootLayout>
        <Toaster />
      </Provider>
      <Analytics />
    </Fragment>
  );
};

export default App;
