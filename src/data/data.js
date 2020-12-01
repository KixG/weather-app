import weather from "../assets/images/weather.jpg";
import text from "../assets/images/text.png";

export default {
    dashboard: {
        title: "Dashboard",
        items: [
            {
                id: 1,
                title: "Weather app",
                text: "",
                image: weather,
                target: "/weather-app",
            },
            {
                id: 2,
                title: "Quotes",
                text: "",
                image: text,
                target: "/quotes",
            }
        ]
    }
}