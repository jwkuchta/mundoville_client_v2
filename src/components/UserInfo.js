import React from 'react'
import { Grid, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import SocialMediaIcons from '../components/SocialMediaIcons'
import Reviews from '../components/Reviews'

const UserInfo = ({ user, currentUser }) => {

    let currentYear =  new Date().getFullYear()
    let age = currentYear - parseInt(user.yob)
    let bio = 'Write a little about yourself so other can get to know you better! What do you like to do in your free time? Are you a cat person or a dog person (or a bird person?). What activities would you enjoy sharing with other travellers? What do you expect out of this experience?'
    let noInfo = 'No info provided'

    return (
        <div style={{'backgroundColor': '#276890', padding: '0px'}} className='user-info'>
            <div style={{'backgroundColor': '#eeeef0', 'padding': '30px', 'color': '#1C4E68'}}>
                <Grid.Row>
                    <Icon name='check' size='large'></Icon>Occupation
                </Grid.Row>
                <Grid.Row> 
                    &nbsp; &nbsp; &nbsp; &nbsp;{user.occupation || noInfo} 
                </Grid.Row>
                <Grid.Row>
                    <Icon name='check' size='large'></Icon>Age
                </Grid.Row>
                <Grid.Row> &nbsp; &nbsp; &nbsp; &nbsp;{age}</Grid.Row>
                <Grid.Row>
                    <Icon name='check' size='large'></Icon>Username
                </Grid.Row>
                <Grid.Row> &nbsp; &nbsp; &nbsp; &nbsp;{user.username} </Grid.Row>
                <Grid.Row>
                    <Icon name='check' size='large'></Icon>Full Name
                </Grid.Row>
                <Grid.Row>&nbsp; &nbsp; &nbsp; &nbsp; {user.first_name} {user.last_name} </Grid.Row>
                <Grid.Row>
                    <Icon name='at' size='large'></Icon>Email
                </Grid.Row>
                <Grid.Row>&nbsp; &nbsp; &nbsp; &nbsp; {user.email} </Grid.Row>
                <Grid.Row>
                    <Icon name='map marker alternate' size='large'></Icon>Location
                </Grid.Row>
                <Grid.Row>
                    &nbsp; &nbsp; &nbsp; &nbsp; {user.city && user.country ? `${user.city}, ${user.country}` : noInfo} 
                </Grid.Row>
                <Grid.Row>
                    <Icon name='comment' size='large'></Icon>Languages
                </Grid.Row>
                <Grid.Row>
                    &nbsp; &nbsp; &nbsp; &nbsp; 
                    {!user.language1 && !user.language2 && !user.language3 && noInfo}
                    {user.language1 && user.language1} &nbsp;
                    {user.language2 && user.language2} &nbsp; 
                    {user.language3 && user.language3}
                </Grid.Row>
                <Grid.Row>
                    <Icon name='heart outline' size='large'></Icon>Interests
                </Grid.Row>
                <Grid.Row>&nbsp; &nbsp; &nbsp; &nbsp;
                    {user.interests || "Tell us what things and activities you love so others can get to know you better!"}
                </Grid.Row>
            </div><br></br>

            <div style={{'backgroundColor': '#eeeef0', 'padding': '30px', 'color': '#1C4E68'}}>
                {user.bio ? 
                <>
                <Grid.Row><h3><strong>About me</strong></h3></Grid.Row><br></br>
                <Grid.Row>{bio}</Grid.Row> 
                </>
                :
                <>
                <Grid.Row><h3><strong>About me</strong></h3></Grid.Row>
                <Grid.Row>{bio}</Grid.Row> 
                </>}
            </div><br></br>
            <div style={{'backgroundColor': '#eeeef0', 'padding': '0px', 'color': '1C4E68'}}>
            <Grid.Row className='social-icons'>
                {user === currentUser 
                ? 
                <Reviews />
                :
                <SocialMediaIcons /> 
            }
            </Grid.Row>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
        allUsers: state.users
    }
}

export default connect(mapStateToProps)(UserInfo)
