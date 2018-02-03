<template>
	<div id="cake">
		<mt-cell :title="item.name" :value="item.type" v-for="item in list" :key="item.id">
			<img slot="icon" class="icon" :src="item.imagePath" width="40" height="40" />
			<mt-button type="default" v-on:click="$router.push({ name: 'CakeEdit', params: { cake: item }})">编辑</mt-button>&nbsp;
			<mt-button type="danger" v-on:click="deleteItem(item)">删除</mt-button>
		</mt-cell>
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
	data() {
        return {
            list: []
        }
    },
	methods: {
		loadData: function() {

			Mint.Indicator.open('加载中...');
			let _this = this;

            base.axios.get(base.backendPath + '/good/findCakes').then(function (response) {

                if(response.data != "" && response.data != null) {
                	for(let i in response.data) {
                		let item = response.data[i];
            			item.imagePath = base.backendPath + "/static/images/cake/" + item.type + "/" + JSON.parse(item.imagesPath)[0];
	                    _this.list.push(item);
	                }
                } else {
                	Toast({
						message: "No Data Found.",
						duration: 2000
					});
                }

            	Mint.Indicator.close();

            }).catch(function (error) {
                console.log(error);
                Toast({
					message: error.data,
					duration: 2000
				});

            	Mint.Indicator.close();
            });

		},
		deleteItem: function(item) {
			Mint.MessageBox.confirm('确定删除?').then(action => {
				Mint.Indicator.open();
				let _this = this;

				base.axios.delete(base.backendPath + '/good/deleteCake', {params: item}).then(function (response) {

					Mint.Indicator.close();
					if(response.data == true) {
						Toast({
							message: "操作成功",
							duration: 2000
						});
						for (let i in _this.list) {
							if(_this.list[i] == item) {
								_this.list.splice(i, 1);
							}
						}
					} else {
						Toast({
							message: "操作失败",
							duration: 2000
						});
					}

				}).catch(function (error) {
	                console.log(error);
	                Toast({
						message: error.message,
						duration: 2000
					});

	            	Mint.Indicator.close();
	            });
			});
		}
	},
	mounted() {
		this.loadData();
	}
}
</script>

<style>
	#cake{
		margin-top: 35px;
		width: 360px;
		overflow: hidden;
		float: left;
	}
	.mint-cell-wrapper {
		margin-top: 2px;
		margin-bottom: 2px;
	}
	.mint-cell-text {
		position: relative;
		top: 15px;
	}
	.icon {
		float: left;
	}
</style>
