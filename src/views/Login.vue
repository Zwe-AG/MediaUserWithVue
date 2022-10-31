<template>
    <div>
        <div class="d-flex justify-content-center py-3">
            <a href="#" class="btn btn-danger" @click="home()">Home</a>
            <a href="#" class="btn btn-primary ms-3" @click="logIn()">Log In </a>
            <!-- <a href="#" class="text-dark text-decoration-none" @click="logout()" v-else>Log Out </a> -->
        </div>
        <!-- Start Login  -->
        <div class="container col-5 shadow-sm my-5">
            <div class="alert alert-danger" role="alert" v-if="userStatus">
                User Password is wrong!!!
            </div>
            <form>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="users.email">
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" v-model="users.password">
                </div>
                <div class="d-grid mt-3">
                    <button type="button" class="btn btn-dark" @click="accountLogin()">Login</button>
                </div>
            </form>
        </div>
        <!-- End Login  -->
    </div>
</template>

<script src="../js/login.js"></script>


