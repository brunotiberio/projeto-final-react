import { CommentCard, Container, Content, UserInfo } from "./style"
import Pug from "./../../assets/PUG.jpg"

export const CardComments = () =>{
//{userImg, username, content}
    return(
        <Container>
            <CommentCard>

                <UserInfo>
                    <img src={Pug} alt="um pug"/>
                    <h3>O pug</h3>
                </UserInfo>

                <Content>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Content>

            </CommentCard>
        </Container>
    )
}