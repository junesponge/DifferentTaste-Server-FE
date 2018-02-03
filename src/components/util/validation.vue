<template>
    <div></div>
</template>

<script>
/* eslint-disable */
import base from '@/util/base.js'

export default {
    data() {
        return {
            name: null,
            message: null
        }
    },
    methods: {
        validate: function() {
            let _this = this;
            base.axios.get(base.backendPath + '/user/validate').then(function (response) {
                console.log(response);
                if(response.data != "" && response.data != null) {
                    _this.message = 'Welcome';
                    _this.name = response.data;
                } else {
                    _this.$router.push({ name: 'Login' });
                }
            }).catch(function (error) {
                console.log(error);
                _this.$router.push({ name: 'Error' });
            });
        }
    },
    created() {
        this.validate();
    }
    // ,watch: {
    //     '$route' (to, from) {
    //         console.log(to);
    //         console.log(from);
    //         this.$router.go(0);
    //     }
    // }
}
</script>