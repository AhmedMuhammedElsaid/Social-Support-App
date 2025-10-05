import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
    header?: ReactNode;
    sidebar?: ReactNode;
    footer?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
    children,
    header,
    sidebar,
    footer,
}) => (
    <div className="min-h-screen flex flex-col bg-gray-100">
        {header && (<header className="bg-white shadow-sm p-4">{header}</header>)}
        <div className="flex flex-1">
            {sidebar && (<aside className="w-64 bg-white border-r hidden md:block">{sidebar} </aside>)}
            <main className="flex-1 p-4">{children} </main>
        </div>
        {footer && (<footer className="bg-white p-4 border-t mt-auto text-center">{footer} </footer>)}
    </div>
);
export default Layout;
