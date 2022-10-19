import { useContext, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { movieApi, recommendedApi } from "../../api";
import { Layout } from "../../components";
import { AuthContext } from "../../contexts";
import { withAuth } from "../../hoc";
import { useRecommended } from "../../hooks";
import { Movie, Recommended } from "../../types";

const RecommendPage = () => {
  const [movie, setMovie] = useState("");
  const [results, setResults] = useState<Movie[] | undefined>(undefined);
  const { saveToApi } = useRecommended();
  const { me } = useContext(AuthContext);
  const search = async () => {
    const data = await movieApi.search(movie, 1);
    setResults(data);
  };

  return (
    <Layout page="recommend">
      <>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            search();
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
          {results?.map(({ id, poster_path, title, overview }) => {
            return (
              <Card
                key={id}
                style={{ width: "18rem" }}
                className="m-3 px-3 py-2"
              >
                <Card.Img variant="top" src={poster_path} />
                <Card.Body>
                  <Card.Title> {title} </Card.Title>
                  <Card.Text>{overview}</Card.Text>
                  <Button
                    variant="dark"
                    onClick={saveToApi({
                      title,
                      detail: overview,
                      image: poster_path,
                      comments: [],
                      date: new Date(),
                      user: {
                        id: me?.id,
                        name: me?.name,
                        lastname: me?.lastname,
                      },
                    })}
                  >
                    {" "}
                    Recomendar{" "}
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </>
    </Layout>
  );
};

export const Recommend = withAuth(RecommendPage);
