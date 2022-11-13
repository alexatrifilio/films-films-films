import { FC } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Layout, Posts } from "../../components";
import { PostForm } from "../../components/Posts/PostForm";
import { withAuth } from "../../hoc";
import { useAuth, usePosts } from "../../hooks";
import "./style.scss";

const HomePage: FC = () => {
  const { savePost } = usePosts();
  const { me } = useAuth();

  return (
    <Layout page="homepage">
      <Container>
        <Row>
          <Col xs={3}>
            <Row>
              <div> esto es amigos a agregar </div>
            </Row>
            <Row>
              <Col>
                <div>esto es Amigos agregados</div>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Card className="post-form-card">
                {me && (
                  <PostForm
                    className="post-form"
                    onPost={(payload) => {
                      savePost({
                        ...payload,
                        user: {
                          name: me?.name,
                          lastname: me?.lastname,
                          id: me?.id,
                          avatar: me?.avatar,
                        },
                        comments: [],
                        date: new Date(),
                      });
                    }}
                  />
                )}
              </Card>
            </Row>
            <Row>
              <Posts />
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export const Home = withAuth(HomePage);
