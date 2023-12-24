<template>
<!--  <van-card-->
<!--      v-for="user in userList"-->
<!--      :desc="user.profile"-->
<!--      :title="`${user.username}(${user.planetCode})`"-->
<!--      :thumb="user.avatarUrl"-->
<!--  >-->
<!--    <template #tags>-->
<!--      <van-tag plain type="primary" v-for="tag in user.tags" style="margin-right: 8px; margin-top: 8px;">-->
<!--        {{tag}}-->
<!--      </van-tag>-->
<!--    </template>-->
<!--    <template #footer>-->
<!--      <van-button size="mini">联系我</van-button>-->
<!--    </template>-->
<!--  </van-card>-->
  <user-card-list :user-list="userList"/>
  <van-empty v-if="!userList || userList.length < 1" image="search" description="未查到相关结果" />
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios.ts"
import {showFailToast, showSuccessToast} from "vant";
import qs from 'qs';
import UserCardList from "../components/UserCardList.vue";

const route = useRoute();

const userList = ref([]);

onMounted( async() => {
  const userListData = await myAxios.get('user/search/tags', {
    params: {
      tagNameList: tags
    },
    paramsSerializer: params => {
      return qs.stringify(params, {indices: false})
    }
  })
      .then(function (response) {
        console.log('user/search/tags succeed', response);
        return response?.data;
      })
      .catch(function (error) {
        console.error('user/search/tags error', error);
        showFailToast("请求失败");
      })
  // console.log(userListData);
  if (userListData){
    userListData.forEach(user => {
      if (user.tags){
        user.tags = JSON.parse(user.tags);
      }
    })
    userList.value = userListData;
  }
})

const {tags} = route.query;

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