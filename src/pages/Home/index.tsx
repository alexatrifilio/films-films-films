import { FC } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Layout, Posts } from "../../components";
import { PostForm } from "../../components/Posts/PostForm";
import { withAuth } from "../../hoc";
import { useAuth, usePosts } from "../../hooks";

const HomePage: FC = () => {
  const { savePost } = usePosts();
  const { me } = useAuth();

  return (
    <Layout page="homepage">
      <Container>
        <Row>
          <Col xs={4}>
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
              <Card>
                {me && (
                  <PostForm
                    onPost={(payload) => {
                      savePost({
                        ...payload,
                        user: {
                          name: me?.name,
                          lastname: me?.lastname,
                          id: me?.id,
                          avatar: me?.avatar,
                        },
                        comments: [
                          {
                            date: new Date().toLocaleDateString(),
                            commentDetail: "",
                            user: {
                              name: "",
                              lastname: "",
                              id: "",
                              avatar: "",
                            },
                          },
                        ],
                        date: new Date().toLocaleDateString(),
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
