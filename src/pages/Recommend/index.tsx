import { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { movieApi } from "../../api/movies";
import { Layout } from "../../components";
import { withAuth } from "../../hoc";
import { Movie } from "../../types";

const RecommendPage = () => {
  const [movie, setMovie] = useState("");
  const [results, setResults] = useState<Movie[] | undefined>(undefined);
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
          <Form.Control
            type="text"
            placeholder="Buscar Películas"
            value={movie}
            onChange={(e) => {
              setMovie(e.target.value);
            }}
            className="my-3"
          />
          <Button variant="dark" type="submit" className="mb-4">
            Buscar
          </Button>
        </Form>
        {results?.map(({ id, poster_path, title, overview }) => {
          return (
            <Card key={id} style={{ width: "18rem" }} className="m-3 px-3 py-2">
              <Card.Img variant="top" src={poster_path} />
              <Card.Body>
                <Card.Title> {title} </Card.Title>
                <Card.Text>{overview}</Card.Text>
                <Button variant="dark"> Recomendar </Button>
              </Card.Body>
            </Card>
          );
        })}
      </>
    </Layout>
  );
};

export const Recommend = withAuth(RecommendPage);
