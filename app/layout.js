import './globals.css';

export const metadata = {
  title: 'María Pía Zaniboni - Full Stack Developer',
  description: 'Portfolio de Full Stack Developer especializada en Laravel, React y Next.js. Disponible para proyectos freelance.',
  keywords: 'developer, freelance, laravel, react, next.js, php, full stack',
  authors: [{ name: 'María Pía Zaniboni' }],
  openGraph: {
    title: 'María Pía Zaniboni - Full Stack Developer',
    description: 'Desarrollo de aplicaciones web escalables con Laravel y React',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
