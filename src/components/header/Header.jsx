function Header() {
    const [isSideMenuVisible, setIsSideMenuVisible] = useState(false);

    const toggleSideMenu = () => {

        setIsSideMenuVisible(prev => !prev);
    }
    return (
        <>
            <div className="header-main">
                <h1>Mi Página de Fotos</h1>
                <img src="/public/logo.png" alt="Logo de la página" />
            </div>
            {
                
                isSideMenuVisible ?

                    <div>
                        <div className='header-side-menu'>
                            <ul>
                                <li>Inicio</li>
                                <li>menu</li>
                                <li>reclamaciones</li>
                            </ul>
                        </div>
                    </div>
                    :

                    <></>
            }
        </>
    );
}
export default Header;