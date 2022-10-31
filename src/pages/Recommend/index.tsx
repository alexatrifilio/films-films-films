import { useEffect } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Layout, MyPagination } from "../../components";
import { withAuth } from "../../hoc";
import { useAuth, useMovie, usePosts } from "../../hooks";

const RecommendPage = () => {
  const { search, movie, setMovie, results, page, setPage } = useMovie();
  const { savePost } = usePosts();
  const { me } = useAuth();

  useEffect(() => {
    search(movie, page);
  }, [page]);

  return (
    <Layout page="recommend">
      <>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            search(movie, page);
          }}
        >
          <div className="d-flex justify-content-between my-3">
            <Form.Control
              type="text"
              placeholder="Buscar Películas"
              value={movie}
              onChange={(e) => {
                setMovie(e.target.value);
              }}
              className="mx-3"
            />
            <Button variant="dark" type="submit">
              Buscar
            </Button>
          </div>
        </Form>
        <div className="d-flex flex-wrap justify-content-around">
          {me &&
            results?.map(({ id, poster_path, title, overview }) => {
              return (
                <Card
                  key={id}
                  style={{ width: "18rem" }}
                  className="m-3 px-3 py-2"
                >
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  />
                  <Card.Body>
                    <Card.Title> {title} </Card.Title>
                    <Card.Text>{overview}</Card.Text>
                    <Button
                      variant="dark"
                      onClick={() => {
                        savePost({
                          title,
                          detail: overview,
                          image: `https://image.tmdb.org/t/p/w500/${poster_path}`,
                          date: new Date(),
                          comments: [],
                          user: {
                            id: me.id,
                            name: me.name,
                            lastname: me.lastname,
                          },
                        });
                      }}
                    >
                      Recomendar
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
        </div>
        <MyPagination page={page} setPage={setPage} />
      </>
    </Layout>
  );
};

export const Recommend = withAuth(RecommendPage);
