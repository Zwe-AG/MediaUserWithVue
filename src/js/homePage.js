import axios, { Axios } from "axios"
import { mapGetters } from "vuex";
export default {
    name : "HomePage",
    data () {
        return {
            postLists : {},
            categoryLists : {},
            searchKey : "",
            tokenStatus : false,
            userStatus : false
        }
    },
    computed: {
        ...mapGetters(['getToken','getUser']),
    },
    methods: {
        getAllPost(){
            let posts = axios.get('http://127.0.0.1:8000/api/allpost')
            .then((response)=>{
                for (let i = 0; i < response.data.post.length; i++) {
                    // console.log(response.data.post[i].image);
                    if (response.data.post[i].image != null) {
                        response.data.post[i].image = 'http://127.0.0.1:8000/postImage/'+response.data.post[i].image;
                    }else{
                        response.data.post[i].image = 'http://127.0.0.1:8000/default.png';
                    }
                }
                this.postLists = response.data.post;
            });
            // console.log(posts);
        },
        newsDetail(id){
            this.$router.push({
                name : "newsDetail",
                params : {
                    newsID : id
                },
            });
        },
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
        loadcategory(){
            axios.get('http://localhost:8000/api/allCategory').then((response)=>{
                // console.log(response.data);
                this.categoryLists = response.data.category;
            }).catch((e)=>{
                console.log(e);
            })
        },
        search(){
            // console.log(this.searchKey);
            let search = {
                key : this.searchKey
            };
            axios.post('http://localhost:8000/api/category/search',search).then((response)=>{
                // console.log(response.data);
                for (let i = 0; i < response.data.searchData.length; i++) {
                    if (response.data.searchData[i].image != null) {
                        response.data.searchData[i].image = 'http://127.0.0.1:8000/postImage/'+response.data.searchData[i].image;
                    }else{
                        response.data.searchData[i].image = 'http://127.0.0.1:8000/default.png';
                    }
                }
                this.postLists = response.data.searchData;
            });
        },
        categorySearch(searchKey){
            let search = {
                key : searchKey
            };
            axios.post('http://localhost:8000/api/choose/category',search).then((response)=>{
                for (let i = 0; i < response.data.resultData.length; i++) {
                    if (response.data.resultData[i].image != null) {
                        response.data.resultData[i].image = 'http://127.0.0.1:8000/postImage/'+response.data.resultData[i].image;
                    }else{
                        response.data.resultData[i].image = 'http://127.0.0.1:8000/default.png';
                    }
                }
                this.postLists = response.data.resultData;
            });
        },
        checkToken(){
            if (this.getToken != null && this.getToken != undefined && this.getToken != "") {
                this.tokenStatus = true;
            } else {
                this.tokenStatus = false;
            }
        }
    },
    mounted() {
        // console.log(this.getToken);
         this.checkToken();
         this.getAllPost();
         this.loadcategory();
    },
}

// 'http://127.0.0.1:8000/postImage/imageName.jpg'
// 'http://localhost:8000/postImage/imageName.jpg'
// 'http://localhost:8000/media_app/public/postImage/imageName.jpg'