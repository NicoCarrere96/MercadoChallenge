import Head from 'next/head';
import React, { Fragment } from 'react';
import Header from './Header';

interface Props {
    title: string,
    children?: any
}

const MainLayout = ({ children, title }: Props) => {
    return (
        <Fragment>
            <Head>
                <title>{title} | Mercado Libre</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link
                    rel="shortcut icon"
                    href="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.15.2/mercadolibre/favicon.svg"
                />
                <link
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                    rel="stylesheet"
                />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            </Head>
            <Header />
            <main className="container mt-4">{children}</main>
        </Fragment>
    );
};

export default MainLayout;