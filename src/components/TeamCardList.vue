<template>
  <div id="teamCardList">
    <van-card
        v-for="team in props.teamList"
        :thumb="teamLogo"
        :desc="team.description"
        :title="`${team.name}`"
    >
      <template #tags>
        <van-tag  plain type="danger"  style="margin-right: 8px; margin-top: 8px;">
          {{teamStatusEnum[team.status]}}
        </van-tag>
      </template>
      <template #bottom>
        <div>
          {{`队伍人数：${team.hasJoinNum}/${team.maxNum}`}}
        </div>
        <div v-if="team.expireTime">
          {{`过期时间：${team.expireTime}`}}
        </div>
        <div v-if="team.createTime">
          {{`创建时间：${team.createTime}`}}
        </div>
      </template>
      <template #footer>
        <!-- 仅不是创建人且没加入队伍 -->
        <van-button v-if="team.userId !== currentUser?.id && !team.hasJoin"
                    size="small" type="primary" plain
                    @click="judgeTeam(team.id, team.status)">加入队伍</van-button>
        <van-button v-if="team.userId === currentUser?.id"
                    size="small" type="success" plain
                    @click="doUpdateTeam(team.id)">更新队伍</van-button>
        <!--  仅不是创建人且加入队伍可见 -->
        <van-button v-if="team.userId !== currentUser?.id && team.hasJoin"
                    size="small" type="danger" plain
                    @click="doQuitTeam(team.id)">退出队伍</van-button>
        <van-button v-if="team.userId === currentUser?.id"
                    size="small" type="danger" plain
                    @click="doDeleteTeam(team.id)">解散队伍</van-button>
      </template>
    </van-card>
      <van-dialog v-model:show="showPasswordDialog" title="请输入密码" show-cancel-button @confirm="doJoinTeam" @cancel="cancel">
        <van-field v-model="password"  placeholder="请输入密码"/>
      </van-dialog>
  </div>

</template>

<script setup lang="ts">
import { TeamType } from "../models/team";
import {teamStatusEnum} from "../constants/team";
import teamLogo from "../assets/teamLogo.png"
import {showFailToast, showSuccessToast} from "vant";
import myAxios from "../plugins/myAxios.ts";
import {getCurrentUser} from "../service/user.ts";
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();


interface TeamCardListProps {
  teamList: TeamType[];
}
const props = withDefaults(defineProps<TeamCardListProps>(),{
  // @ts-ignore
  teamList: [] as TeamType[]
});

// 更新队伍
// 获取当前登录用户
const currentUser = ref();

onMounted( async () => {
  currentUser.value = await getCurrentUser();
});


const showPasswordDialog = ref(false);
const password = ref('');

// 要加入的队伍Id
const joinTeamId = ref();
const judgeTeam = (teamId: string, status: number) => {
  joinTeamId.value = teamId;
  if (status === 0){
    doJoinTeam();
  } else {
    showPasswordDialog.value = true;
  }
}

// 密码框取消按钮功能
const cancel = () => {
  password.value = '';
  joinTeamId.value = 0;
}
/**
 * 加入队伍
 * @param id
 */
const doJoinTeam = async () =>{
  if(!joinTeamId.value){
    return;
  }
  const res = await myAxios.post("/team/join",{
    teamId: joinTeamId.value,
    password: password.value,
  })
  if (res?.code === 0){
    showSuccessToast("操作成功")
    location.reload();
  } else {
    password.value = '';
    showFailToast("操作失败" + (res?.description ? `${res.description}` : ''))
  }
}

/**
 * 退出队伍
 * @param id
 */
const doQuitTeam = async (id: number) =>{
  const res = await myAxios.post("/team/quit",{
    teamId: id
  })
  if (res?.code === 0){
    showSuccessToast("操作成功")
    location.reload();
  } else {
    showFailToast("操作失败" + (res?.description ? `${res.description}` : ''))
  }
}

/**
 * 解散队伍
 * @param id
 */
const doDeleteTeam = async (id: number) =>{
  const res = await myAxios.post("/team/delete",{
    teamId: id
  })
  if (res?.code === 0){
    showSuccessToast("操作成功")
    location.reload();
  } else {
    showFailToast("操作失败" + (res?.description ? `${res.description}` : ''))
  }
}

/**
 * 跳转至更新队伍页
 * @param id
 */
const doUpdateTeam = async (id: number) => {
  router.push({
    path: "/team/update",
    query: {
      id,
    }
  })
}
</script>

<style scoped>
#teamCardList :deep(.van-image__img) {
  height: 130px;
  object-fit: unset;
}
</style>