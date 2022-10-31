import axios from "axios";
import { mapGetters } from "vuex";
export default {
    name  : "NewsDetail",
    data () {
        return {
            postId : 0,
            posts :{},
            viewCount : 0
        }
    },
    computed: {
        ...mapGetters(['getToken','getUser']),
    },
    methods: {
        loadPost (id) {
            let post = {
                postId : id
            };
            axios.post('http://localhost:8000/api/post/detail',post).then((response)=>{
                    if (response.data.post.image != null) {
                        response.data.post.image = 'http://127.0.0.1:8000/postImage/'+response.data.post.image;
                    }else{
                        response.data.post.image = 'http://127.0.0.1:8000/default.png';
                    }
                this.posts = response.data.post;
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
        back(){
            this.$router.push({
                name : "Home"
            })
        },
        viewCountLoad(){
            let data = {
                user_id : this.getUser.id,
                post_id : this.$route.params.newsID
            };
            axios.post('http://localhost:8000/api/post/actionlog',data).then((response)=>{
                // console.log(response);
                this.viewCount = response.data.postData.length;
            });
        }
    },
    mounted() {
        this.viewCountLoad();
        this.postId = this.$route.params.newsID;
        this.loadPost(this.postId)
    },  
}