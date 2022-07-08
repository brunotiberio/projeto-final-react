import { CommentCard, Container, Content, UserInfo } from "./style"


export const CardComments = ({userImg, username, content}) =>{

    return(
        <Container>
            <CommentCard>

                <UserInfo>
                    <img src={userImg} alt={username}/>
                    <h3>{username}</h3>
                </UserInfo>

                <Content>
                    {content}
                </Content>

            </CommentCard>
        </Container>
    )
}