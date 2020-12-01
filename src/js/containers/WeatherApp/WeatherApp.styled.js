import styled from 'styled-components';

const WeatherApp = styled.div`
    color: black;

    &.hot .temperature {
        color: red;
    }

    &.cold .temperature {
        color: blue;
    }

    .compass {
        display: inline-block;
        border-radius: 50%;
        padding: 10px;
        margin: 30px;
        border: 5px solid black;
        position: relative;

        &__indicator {
            position: absolute;
            font-weight: bold;

            &--n {
                top: -50px;
                left: 45%;
                transform: translate(0, 50%);
            }

            &--e {
                top: 45%;
                right: -25px;
                transform: translate(50%, 0);
            }

            &--s {
                bottom: -50px;
                left: 45%;
                transform: translate(0, -50%);
            }

            &--w {
                top: 45%;
                left: -25px;
                transform: translate(-50%, 0);
            }
        }
    }
`;

export {
    WeatherApp
};
