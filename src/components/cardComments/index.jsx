import { CommentCard, Container, Content, UserInfo } from "./style"


export function CardComments({comment}){

    return(
        <Container>
            <CommentCard>

                <UserInfo>
                    <img src={comment.userImg} alt={comment.username}/>
                    <h3>{comment.username}</h3>
                </UserInfo>

                <Content>
                    {comment.content}
                </Content>

            </CommentCard>
        </Container>
    )
}