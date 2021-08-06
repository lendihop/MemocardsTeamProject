import React, {useEffect} from "react";
import CardsTable from "./p3-tables/CardsTable";
import {Container, Grid, Icon} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../n1-main/m2-bll/store/redux-store";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link, Redirect} from "react-router-dom";
import {SearchContainer} from "./p1-search/SearchContainer";
import {PaginationContainer} from "./p2-pagination/PaginationContainer";

export const CardsList: React.FC = () => {

    const dispatch = useDispatch()

    const packName = useSelector<AppRootStateType, string>(state => state.cards.currentPackData.name);

    const packsTrue = useSelector<AppRootStateType, boolean>(state => state.cards.packsTrue)
    if (!packsTrue) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <Container>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                style={{height: "92vh"}}
            >
                <Link to='/packs-list'><ArrowBackIcon style={{ fontSize: 40 }}/></Link>
                <h1>{packName}</h1>
                <SearchContainer/>
                <CardsTable/>
                <PaginationContainer/>
            </Grid>
        </Container>
    )
}
