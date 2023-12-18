import { withAuth } from "../../hoc";
import { useAuth, usePosts } from "../../hooks";
import { Layout } from "../../components";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FC } from "react";

const ProfilePage: FC = () => {
  const { me } = useAuth();
  //const { getPosts } = usePosts();

  return (
    <Layout page="profile">
      <Container>
        <Row>
          {me && (
            <>
              <Col xs={6} md={4}>
                <Image src={me?.avatar} roundedCircle />
              </Col>
              <Col xs={6} md={8}>
                <h2>{`${me.name} ${me.lastname}`}</h2>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </Layout>
  );
};

export const Profile = withAuth(ProfilePage);
