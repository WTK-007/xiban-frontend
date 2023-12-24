<template>
  <van-cell center title="匹配模式">
    <template #right-icon>
      <van-switch v-model="isMatchMode" />
    </template>
  </van-cell>
  <user-card-list :user-list="userList" :loading="loading"/>
  <van-empty v-if="!userList || userList.length < 1" description="数据为空" />
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import { ref, watchEffect} from "vue";
import myAxios from "../plugins/myAxios.ts"
import {showFailToast, showSuccessToast} from "vant";
import qs from 'qs';
import UserCardList from "../components/UserCardList.vue";
import {UserType} from "../models/user.ts";

const route = useRoute();
const isMatchMode = ref<boolean>(false);

const userList = ref([]);
const loading = ref(true);
/**
 * 加载数据
 */
const loadData = async () => {
  let userListData = [];
  loading.value = true;

  // 匹配模式，根据标签匹配用户
  if (isMatchMode.value){
    const num = 5;
    userListData = await myAxios.get('user/match', {
      params: {
        num,
      },
    })
        .then(function (response) {
          console.log('user/match succeed', response);
          return response?.data;
        })
        .catch(function (error) {
          console.error('user/recommend error', error);
          showFailToast("请求失败");
        })
  } else { // 普通模式，根据分页匹配用户
    userListData = await myAxios.get('user/recommend', {
      params: {
        pageSize: 8,
        pageNum: 1,
      },
      paramsSerializer: params => {
        return qs.stringify(params, {indices: false})
      }
    })
        .then(function (response) {
          console.log('user/recommend succeed', response);
          return response?.data?.records;
        })
        .catch(function (error) {
          console.error('user/recommend error', error);
          showFailToast("请求失败");
        })
  }
  if (userListData){
    userListData.forEach( (user: UserType) => {
      if (user.tags){
        user.tags = JSON.parse(user.tags);
      }
    })
    userList.value = userListData;
  }
  // // 延时3s
  // await new Promise(resolve => setTimeout(resolve, 3000));
  loading.value = false;
}

const {tags} = route.query;

// 监听数据变化
watchEffect(() => {
  loadData();
})

// const mockUser = {
//   id: 12345,
//   username: '曦演',
//   userAccount: '12345',
//   profile: '一个斜杠青年，精通各大技术，年入百万，名下资产千万',
//   avatarUrl: 'https://img2.baidu.com/it/u=3096699763,2795196671&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1699549200&t=ed8874b6c21d4c0cb20770d0af8b34e1',
//   gender:  0,
//   phone: '123456789',
//   email: '123456789@qq.com',
//   userStatus: 0,
//   userRole: 0,
//   planetCode: '1234',
//   tags: ['java','emo','打工中','单身狗','斜杠青年'],
//   creatTime: new Date(),
// }




</script>

<style scoped>

</style>