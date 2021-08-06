import React from 'react';
import {Error404} from "../../../n2-features/f0-test/t2-404/Error404";
import {Redirect, Route, Switch} from 'react-router-dom';
import {PasswordRecovery} from "../../../n2-features/f1-auth/a3-passwordRecovery/PasswordRecovery";
import {NewPasswordContainer} from "../../../n2-features/f1-auth/a4-enterPassword/NewPasswordContainer";
import {Profile} from "../../../n2-features/f1-auth/a5-profile/Profile";
import {Test} from '../../../n2-features/f0-test/t1-test/test';
import {Main} from '../Main/Main';
import {RegistrationContainer} from "../../../n2-features/f1-auth/a2-registration/RegistrationContainer";
import {LoginContainer} from "../../../n2-features/f1-auth/a1-loginization/LoginContainer";
import {CheckOnEmail} from "../../../n2-features/f1-auth/a3-passwordRecovery/CheckOnEmail";
import {PacksList} from "../../../n2-features/f2-packsList/PacksList";
import {CardsList} from "../../../n2-features/f2-packsList/CardsList";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../m2-bll/store/redux-store";


export const Routes = () => {
    // const isInitialized = useSelector<AppRootStateType, boolean>(state => state.app.isInitialized)
    // if (isInitialized) {
    //     return <Redirect to={'/profile'}/>
    // }
    console.log('routes')
    return (
        <Switch>
            <Route exact path="/" strict render={() => <Main/>}/>
            <Route path="/packs-list" render={() => <PacksList/>}/>
            <Route path="/cards-list" render={() => <CardsList/>}/>
            <Route path="/profile" render={() => <Profile/>}/>
            <Route path="/test" render={() => <Test/>}/>
            <Route path="/login" render={() => <LoginContainer/>}/>
            <Route path="/registration" render={() => <RegistrationContainer/>}/>
            <Route path="/password-recovery" render={() => <PasswordRecovery/>}/>
            <Route path="/set-new-password/:token?" render={() => <NewPasswordContainer/>}/>
            <Route path={"/404"} render={() => <Error404/>}/>
            <Route path={"/check-on-email"} render={() => <CheckOnEmail/>}/>
            <Redirect from="*" to="/404"/>
        </Switch>
    );
}
