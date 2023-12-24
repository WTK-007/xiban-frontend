
<template>
  <template v-if="user">
    <van-cell title="当前用户" :value="user.username"/>
    <van-cell title="修改信息" is-link to="/user/update"/>
    <van-cell title="我创建的队伍" is-link to="/user/team/create"/>
    <van-cell title="我加入的队伍" is-link to="/user/team/join"/>
  </template>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {getCurrentUser} from "../service/user.ts";

const router = useRouter();
// const user = {
//   id: 1,
//   username: '曦演',
//   userAccount: 'xiyan',
//   avatarUrl: 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
//   gender: '男',
//   phone: "123456789",
//   email: "13467896@qq.com",
//   planetCode: 1234,
//   creatTime: new Date(),
// }

const user = ref();

onMounted(async () => {
  user.value = await getCurrentUser();
})



// const toEdit = (editKey: string, editName: string, currentValue: string) => {
//   router.push({
//     path: '/user/edit',
//     query: {
//       editKey,
//       editName,
//       currentValue
//     }
//   });
// }


</script>

<style scoped>

</style>