import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import React, { useContext, useEffect } from 'react'
import { withEmotionCache } from '@emotion/react'
import { ChakraProvider } from '@chakra-ui/react';
import { Fonts } from './Fonts/index';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { ServerStyleContext, ClientStyleContext } from './context'
import { theme } from "./Theme/index";

interface DocumentProps {
  children: React.ReactNode;
}

export const Document = withEmotionCache(({ children }: DocumentProps, emotionCache) => {
  const serverStyleData = useContext(ServerStyleContext);
  const clientStyleData = useContext(ClientStyleContext);

  // Only executed on client
  useEffect(() => {
    // re-link sheet container
    emotionCache.sheet.container = document.head;
    // re-inject tags
    const tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush();
    tags.forEach((tag) => {
      (emotionCache.sheet as any)._insertTag(tag);
    });
    // reset cache to reapply global styles
    clientStyleData?.reset();
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        {serverStyleData?.map(({ key, ids, css }) => (
            <style
              key={key}
              data-emotion={`${key} ${ids.join(' ')}`}
              dangerouslySetInnerHTML={{ __html: css }}
            />
          ))}
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
)

export default function App() {
  return (
    <Document>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Header />
        <Outlet />
        <Footer />
      </ChakraProvider>
    </Document>
    
  );
}
