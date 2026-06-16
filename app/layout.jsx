import './globals.css';

export const metadata = {
  title: 'Diabetes Feast — Connecting Meals, Exercise and Diabetes',
  description: 'A personal wellness journal transforming daily diabetic habits into actionable insights — for patients and for doctors.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
