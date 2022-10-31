import axios from "axios";
import { mapGetters } from "vuex";

export default {
    name : 'Login',
    data () {
        return {
            users :{
                email : "",
                password : ""
            },
            tokenStatus : false,
            userStatus : false
        }
    },
    computed: {
        ...mapGetters(['getToken','getUser']),
    },
    methods: {
        home(){
            this.$router.push({
                name : "Home"
            });
        },
        logIn(){
            this.$router.push({
                name : "login"
            });
        },
        logout(){
            this.$store.dispatch('setToken',null);
            this.logIn();
        },
        accountLogin(){
            axios.post('http://localhost:8000/api/user/login',this.users)
            .then((response)=>{
                if(response.data.token != null){
                    this.userStatus = false;
                    this.userInfo(response);
                    this.home();
                }else {
                    this.userStatus = true;
                }
            }).catch((error)=>{
                console.log(error);
            });
        },
        userInfo(response){
            this.$store.dispatch('setToken',response.data.token);
            this.$store.dispatch('setUserData',response.data.user);
        }
    }
}