import React, { useState } from "react";
import keys from "../../../config/keys";

import { Form, Table } from 'react-bootstrap';
import { ArrowBarUp } from 'react-bootstrap-icons';

import { WeatherApp as WeatherAppElem } from './WeatherApp.styled';

const api = {
    key: keys.API_KEY,
    base: keys.BASE_URL,
};

const WeatherApp = () => {
    const dateBuild = (d) => {
        let date = String(new window.Date());
        date = date.slice(3, 15);
        return date;
    };

    const [query, setQuery] = useState("");
    const [weather, setWeather] = useState({});

    const search = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then((res) => res.json())
                .then((result) => {
                    console.log('result', result);
                    setQuery("");
                    setWeather(result);
                });
        }
    };

    return (
        <div className="container my-3">
            <WeatherAppElem
                className={
                    typeof weather.main !== "undefined"
                        ? weather.main.temp > 18
                            ? "hot"
                            : "cold"
                        : ""}
            >
                <Form>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Search..."
                            onChange={(e) => {
                                setQuery(e.target.value);
                            }}
                            value={query}
                            onKeyPress={search} />
                        <Form.Text className="text-muted">
                            Enter a place or town to see what the weather is there...
                        </Form.Text>
                    </Form.Group>
                </Form>
                {weather.cod === 200
                    ? (
                        <>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <td colSpan="3">
                                            {dateBuild(new Date())}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Location</th>
                                        <th>Temperature</th>
                                        <th>Forecast</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{weather.name}, {weather.sys.country}</td>
                                        <td className="temperature">{Math.round(weather.main.temp)}°C</td>
                                        <td>{weather.weather[0].main}</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <div className="compass">
                                <span className="compass__indicator compass__indicator--n">N</span>
                                <span className="compass__indicator compass__indicator--e">E</span>
                                <span className="compass__indicator compass__indicator--s">S</span>
                                <span className="compass__indicator compass__indicator--w">W</span>
                                <ArrowBarUp size={96} style={{ transform: `rotate(${weather.wind.deg}deg)`, }} />
                            </div>
                        </>
                    ) : (
                        weather.cod ? (
                            <p>This place does not exist</p>
                        ) : ""
                    )
                }
            </WeatherAppElem>
        </div>
    );
}

export default WeatherApp;