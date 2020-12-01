import React from "react";
import { Card, Accordion } from 'react-bootstrap';

import quotes from './quotes';

const QuoteApp = () => {
    return (
        <div className="container my-3">
            {quotes.map((quote) => (
                <Accordion defaultActiveKey="0" key={quote.id}>
                    <Card>
                        {quote.title && <Card.Header>{quote.title}</Card.Header>}
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {quote.text}
                                </p>
                                <footer className="blockquote-footer">
                                    <cite title="Source Title">{quote.author}</cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                        {quote.explanation && (
                            <>
                                <Accordion.Toggle as={Card.Footer} eventKey="1">
                                    Click me!
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body dangerouslySetInnerHTML={{ __html: quote.explanation}} />
                                </Accordion.Collapse>
                            </>
                        )}
                    </Card>
                </Accordion>
            ))}
        </div>
    );
}

export default QuoteApp;