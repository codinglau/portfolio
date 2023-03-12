import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
