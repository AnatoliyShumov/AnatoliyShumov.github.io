import React from 'react';
import PieMenu, { PieCenter, Slice } from 'react-pie-menu';
import { MemoryRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import heart from "../../img/heart.svg"
import co2 from "../../img/co2.svg"
import home from "../../img/home.svg"
import key from "../../img/key.svg"
import percent from "../../img/percent.svg"
import study from "../../img/study.svg"
import protection from "../../img/protection.svg"
import baby from "../../img/baby-boy.svg"

import * as styles from './pie-menu.style';

const theme = {
    pieMenu: {
        container: styles.container,
        center: styles.center,
        // contentHeight: "2rem",
    },
    slice: {
        container: styles.button,
    },
};

const Button = props => (
    <Link to={{
        pathname: props.routePath
    }}>
        <Slice {...props} centralAngle={2} ><img src={`${props.srcImg}`} alt={`${props.alt}`}/></Slice>
    </Link>
);

const Center = props => (
    <Switch>
        <Route
            exact
            path="/"
            render={() => (
                <PieCenter {...props}>
                    <h1>Є речі про які не варто знати</h1>
                </PieCenter>
            )}
        />
        <Route path="/heart">
            <PieCenter {...props}>
                <h1>Є речі про які варто знати</h1>
                <p><span>Знижка на сплату податків</span> - це реально.</p>
                <p>Лише оберіть види витрат що ви понесли</p>
            </PieCenter>
        </Route>
        <Route path="/study">
            <PieCenter {...props}>
                <h1>Освіта</h1>
                <p>витрати понесені за власне навчання та/або навчання члена сімї першого ступеня споріднення(в тому числі працесздатних дітей віком до 23 років та/або непрацездатних дітей незалежно від віку), які не отримують заробітну плату, окрім коштів за навчання на військовій кафедрі</p>

            </PieCenter>
        </Route>
    </Switch>
);

const PieMenus = () => (
    
    <Router>
        <ThemeProvider theme={theme}>
            <PieMenu  radius='360px' centerRadius='260px'  Center={Center} startOffsetAngle={0}>
                <Button routePath={"/heart"}        srcImg={heart}      alt={"heart"}   backgroundColor="#F1F5F9" />
                <Button routePath={"/study"}        srcImg={study}      alt={"study"}   backgroundColor="#F1F5F9" />
                <Button routePath={"/home"}         srcImg={home}       alt={"home"}    backgroundColor="#F1F5F9" />
                <Button routePath={"/percent"}      srcImg={percent}    alt={"percent"} backgroundColor="#F1F5F9" />
                <Button routePath={"/key"}          srcImg={key}        alt={"key"}     backgroundColor="#F1F5F9" />
                <Button routePath={"/co2"}          srcImg={co2}        alt={"co2"}     backgroundColor="#F1F5F9" />
                <Button routePath={"/protection"}   srcImg={protection} alt={"protection"} backgroundColor="#F1F5F9" />
                <Button routePath={"/baby"}         srcImg={baby} alt={"baby"}          backgroundColor="#F1F5F9" />
            </PieMenu>
        </ThemeProvider>
    </Router>
);

export default PieMenus;


