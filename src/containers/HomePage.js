import React  from 'react'
import { Container, Image } from 'semantic-ui-react'
import plane from '../photos/plane.gif'
import LoginForm from '../components/LoginForm'
import { connect } from 'react-redux'
import SignupForm from '../components/SignupForm'

const HomePage = ({ option }) => {
    // debugger
    return (
        // <>
        <Container fluid className="mainPage" style={{position: 'relative'}}>
            <Image className='background-img'
                fluid 
                src={plane}
            />
            <Container fluid className='main-page-description' >
                <h3>It's just like couch surfing</h3>
                <h3>except for the creepy factor</h3>
                <h3>'cause no couches are involved</h3>
                <h3>don't just be a tourist</h3>
                <h3>hang out with locals while you travel</h3>
            </Container>
            {option === 'login' && <Container fluid className='login-form'><LoginForm /></Container>}
            {option === 'signup' && <Container fluid className='signup-form'><SignupForm /></Container>} 
        </Container>
        // </>
    )            
}

const mapStateToProps = state => {
    return {option: state.options.option}
}

export default connect(mapStateToProps)(HomePage)