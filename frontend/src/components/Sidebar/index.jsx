import styles from './styles.module.scss';
import { useHistory } from 'react-router-dom';
import { isAuthenticated, logout } from '../auth/auth';

export function Sidebar(){

    let history = useHistory();
    
    function sair(){
        console.log("Saindo da aplicação");
        logout();
        history.push('/');
    }

    return(
        <div className={styles.container}>
            <header>
                <img src="/logo_sidebar.svg" className={styles.logo} alt="logo"/>
            </header>
            
            <div className={styles.navigation}>
                <button 
                className={`${styles.btnNavigation} ${styles.isActive}`}
                // onClick={() => push('/')}
                >
                    <img src="/icon_dashboard.svg" alt="dashboard"/>
                </button>

                <button 
                className={`${styles.btnNavigation} ${styles.isActive}`}
                // onClick={() => push('/profile')}
                >
                    <img src="/icon_user.svg" alt="Usuário"/>
                </button>

                <button 
                className={`${styles.btnNavigation} `}
                // onClick={() => push('/security')}
                >
                    <img src="/icon_security.svg" alt="Segurança"/>
                </button>
            </div>

            <div className={styles.exit}>
                <button onClick={sair}>
                    <img src="/icon_exit.svg" alt="Sair"/>
                </button>
            </div>
        </div> 
    )
}

