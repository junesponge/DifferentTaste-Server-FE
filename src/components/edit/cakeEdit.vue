<template>
	<div id="cakeEdit">
		<mt-header title="编辑">
			<router-link to="/main" slot="left">
				<mt-button icon="back" v-on:click="checkSave()">返回</mt-button>
			</router-link>
		</mt-header>
		{{this.cake.name}}
	</div>
</template>

<script>
/* eslint-disable */
import Vue from 'vue'
import Mint from 'mint-ui';
import { Toast } from 'mint-ui';

import base from '@/util/base.js'

Vue.use(Mint);

export default {
	name: 'CakeEdit',
	data() {
        return {
            cake: this.$route.params.cake
        }
    },
    methods: {
    	checkSave: function() {
    		Mint.MessageBox.confirm('确定保存?').then(action => {

    		});
    	}
    }
}
</script>

<style>

</style>