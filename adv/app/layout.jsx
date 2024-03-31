import '@/assets/styles/globals.css';

export const metadata = {
    title: 'ADV | Find The Perfect Rental',
    description: 'Best houses',
    keywords: 'rental, find rentals, find properties',
};

const MainLayout = ({children}) => {
    return (
        <html lang='en'>
            <body>
                <div>{children}</div>
            </body>
        </html>
    )
};

export default MainLayout;