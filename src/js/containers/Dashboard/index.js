import React from 'react';
import { Card, Button } from 'react-bootstrap';

import data from "../../../data/data";

class Dashboard extends React.Component {
    render() {
        const { title, items } = data.dashboard;
        return (
            <div className="container mt-3">
                <h1>{title}</h1>
                <div className="row">
                    {items.map((item) => {
                        return (
                            <div className="col-12 col-md-3 col-lg-4 my-2" key={item.id}>
                                <Card>
                                    <Card.Img variant="top" src={item.image} />
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        {item.text && (
                                            <Card.Text>{item.text}</Card.Text>
                                        )}
                                        <Button variant="primary" href={item.target}>Show</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Dashboard;