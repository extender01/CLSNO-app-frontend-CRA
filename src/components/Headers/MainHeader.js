import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Media from 'react-media';

import Hamburger from './Hamburger';
// import {startLoggedUser }from '../../actions/userActions';
import {startLoadTests} from '../../actions/testActions';
import bp from '../../helper/mediaQueryBreakPoint';

import IMG_logo from '../../images/SNO_400W.png';
import IMG_user from '../../images/user.png';










class MainHeader extends React.Component {
    // state = {  }

    componentDidMount() {
        this.props.startLoadTests();

    }

    render() {
        return (
            <div className='header'>
                
                <div className='f header__line'>
        
                    {/* Media will render Hamburger only if width of viewport is less value of bp variable */}
                    <Media query={`(max-width: ${bp})`}>
                        {(matches) => 
                            matches ? <Hamburger /> : null
                        }
                    </Media> 
                    
                    <nav className='f_start-end-toggle header__logo'>
                        <HashLink className='header__title' to='/#home' exact={true}>
                            <img src={IMG_logo} height='40px' alt='SNO logo' />
                        </HashLink>
                    </nav>
                    
                    <div className ='f header__links'>
                        <HashLink to='/#o-laboratori' className='g1'>O laboratoři</HashLink>
                        <HashLink to='/#pacienti' className='g1'>Pro pacienty</HashLink>
                        <HashLink to='/#oddeleni' className='g1'>Pro oddělení</HashLink>
                        <Link to='/metody' className='g1'>Metody</Link>
                        <HashLink to='/#kontakt' className='g1'>Kontakty</HashLink>
                        
                    </div>
        
                    <div className='header__user'>
                        {this.props.isLogged ? (
                            <React.Fragment>
                                <div className='f_column'>
                                    <img src={IMG_user} height='20px' alt='logged user' />
                                    <p >{this.props.nick}</p>
                                </div>
                                <Link to='/login'>Odhlásit se</Link>
                            </React.Fragment>
                        ) : (
                            <div className='f_column g1'>
                                <Link to='/login'>Přihlásit se</Link>
                            </div>
                        )}
                    </div>
                </div> 
            </div>
        );
    }
}






const mapStateToProps = (state) => {
    return {
        nick: state.users.user.nick,
        isLogged: state.users.isLogged
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // checkWhoIsLogged: () => {
        //     dispatch(startLoggedUser());
        // },
        startLoadTests: () => {
            dispatch(startLoadTests());
        }
        
    };
};

MainHeader.propTypes = {
    checkWhoIsLogged: PropTypes.func,
    startLoadTests: PropTypes.func,
    nick: PropTypes.string,
    isLogged: PropTypes.bool
};



export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);