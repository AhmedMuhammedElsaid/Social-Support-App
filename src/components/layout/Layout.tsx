import { FC, useEffect } from 'react';
import { getLocalStorageItem } from '../../utils/helpers';
import i18n from '../../i18n/i18n';
import { LANG_LOCAL_STORAGE_KEY } from '../../utils/Constants';
import { LayoutProps } from '../../types';

const Layout: FC<LayoutProps> = ({ children, header, sidebar, footer, }) => (

    useEffect(() => {
        const lang = getLocalStorageItem<string>(LANG_LOCAL_STORAGE_KEY) || "en"
        i18n.changeLanguage(lang);
        document.body.dir = i18n.dir(lang);
    }, []),

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
