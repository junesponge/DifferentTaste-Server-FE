<template>
<section class='login'>
    <div>
        <img src="@/assets/logo.png" width="200" height="200" />
    </div>
    <br />
    <input v-model="user.name" placeholder="username" />
    <input v-model="user.password" placeholder="password" type="password" v-on:keyup.enter="submit" />
    <br /><br />
    <label class="message">{{ message }}</label>
    <br /><br />
    <button v-on:click="submit">Login</button>
</section>
</template>

<script>
/* eslint-disable */
import base from '@/util/base.js'
export default {
    name: 'Login',
    data() {
        return {
            user: {
                name: null,
                password: null
            },
            message: null
        }
    },
    methods: {
        submit: function() {
            console.log(base);
            let _this = this;
            base.axios.post(base.backendPath + '/user/login', base.Qs.stringify(this.user)).then(function (response) {
                console.log(response);
                if(response.data == false) {
                    _this.message = 'Login fail.';
                } else {
                    console.log(_this.$router);
                    _this.message = 'Logging...';
                    _this.$router.push({ name: 'Main' });
                }
            }).catch(function (error) {
                console.log(error);
                _this.message = 'Could not reach server, please contact admin.';
            });
        }
    }
}
</script>

<style type="text/css">
    .message {
        color: #c31e3a;
    }
</style>

