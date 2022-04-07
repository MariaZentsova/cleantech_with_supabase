import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

class Document extends NextDocument {
    static async getInitialProps(ctx) {
        const initialProps = await NextDocument.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>

                    <meta title="Sustinero | Renewable energy and clean tech news" />
                    <link rel="icon" sizes="96x96" href="/favicons/favicon.ico" />
                    <meta name="theme-color" content="#319795"></meta>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
                    <noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerPolicy="no-referrer-when-downgrade" /></noscript>
                </body>
            </Html>
        );
    }
}

export default Document;