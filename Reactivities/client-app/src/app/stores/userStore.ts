import {User, UserFormValues} from "../models/user";
import {makeAutoObservable, runInAction} from "mobx";
import {th} from "date-fns/locale";
import agent from "../api/Agent";
import {store} from "./store";
import {router} from "../router/Routes";

export default class UserStore {
    user: User | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    get isLoggedIn() {
        return !!this.user;
    }

    login = async (creds: UserFormValues) => {
        try {
            const user = await agent.Account.login(creds);
            store.commonStore.setToken(user.token);
            runInAction(() => this.user = user);
            router.navigate('/activities')
            store.modalStore.closeModal();
            console.log(user);
        } catch (e) {
            throw e;
        }
    }
    
    logout = () => {
        store.commonStore.setToken(null);
        this.user = null;
        router.navigate('/')
    }
    
    getUser = async () => {
        try {
            const user = await agent.Account.current();
            runInAction(() => this.user = user);
        } catch (e){
            console.log(e);
        }
    }

    register = async (creds: UserFormValues) => {
        try {
            const user = await agent.Account.register(creds);
            store.commonStore.setToken(user.token);
            runInAction(() => this.user = user);
            router.navigate('/activities')
            store.modalStore.closeModal();
            console.log(user);
        } catch (e) {
            throw e;
        }
    }
}