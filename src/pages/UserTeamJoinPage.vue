<template>
  <div>
    <van-search
        v-model="searchText"
        show-action
        placeholder="搜索队伍"
        @search="onSearch"
        @cancel="onCancel"
    />
    <team-card-list :teamList="teamList"/>
    <van-empty v-if="teamList?.length < 1" image="search" description="未找到相关队伍" />
  </div>
</template>


<script setup lang="ts">
import {useRouter} from "vue-router";
import TeamCardList from "../components/TeamCardList.vue";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios";
import {showFailToast} from "vant";
import {timeFormaDetailt, timeFormat} from "../constants/team";

const router = useRouter()

// 搜索队伍
const searchText = ref('');
// 清楚搜索框中的内容
const onCancel = () =>{
  searchText.value = '';
  listTeam();
}
const onSearch = (val) => {
  listTeam(val);
}

/**
 * 查询队伍列表
 * @param val
 */
const listTeam = async (val = '') => {
  const res = await myAxios.get("/team/list/my/join", {
    params:{
      searchText: val,
      pageNum: 1,
    },
  });
  if (res && res.code === 0){
    // 对组队时间进行格式化
    const list = res.data
    for (let i = 0; i < list.length; i++) {
      const expireTime = new Date(list[i].expireTime)
      list[i].expireTime = timeFormat(expireTime)
      const createTime = new Date(list[i].createTime)
      list[i].createTime = timeFormaDetailt(createTime)
    }
    teamList.value = list
  } else {
    showFailToast("加载队伍失败，请重试")
  }
}


const teamList = ref([]);

// (页面加载时只执行一次)查询队伍
onMounted( () => {
  listTeam()
})

</script>

<style scoped>

</style>