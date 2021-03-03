import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ErrorMessage from "../errorMessage/";
import { HousesPage, CharacterPage, BooksPage, BooksItem } from "../pages/";
import ItemList from "../itemList";
import GotService from "../../services/gotService";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends Component {
    state = {
        error: false,
    };

    gotService = new GotService();

    componentDidCatch() {
        this.setState({ error: true });
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage />;
        }
        return (
            <Router>
                <div>
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{ size: 5, offset: 0 }}>
                                <RandomChar />
                            </Col>
                        </Row>

                        <Route
                            path="/"
                            exact
                            component={() => <h1>Welcome to GOT DB</h1>}
                        />
                        <Route path="/characters" component={CharacterPage} />
                        <Route path="/houses" component={HousesPage} />
                        <Route path="/books" exact component={BooksPage} />
                        <Route
                            path="/books/:id"
                            render={({ match }) => {
                                const { id } = match.params;
                                return <BooksItem bookId={id} />;
                            }}
                        />
                    </Container>
                </div>
            </Router>
        );
    }
}
