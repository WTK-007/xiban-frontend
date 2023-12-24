<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="updateTeamData.name"
          name="name"
          label="队伍名称"
          placeholder="请输入队伍名称"
          :rules="[{ required: true, message: '请输入队伍名称' }]"
      />

      <van-field
          v-model="updateTeamData.description"
          rows="1"
          autosize
          label="队伍描述"
          type="textarea"
          placeholder="请输入队伍描述"
      />

      <van-field
          v-model="updateTeamData.expireTime"
          is-link
          readonly
          name="datePicker"
          label="过期时间"
          placeholder="选择队伍过期时间"
          @click="showPicker = true"
      />

      <van-popup v-model:show="showPicker" position="bottom">
        <van-date-picker
            title="请选择过期时间"
            :min-date=minDate
            @confirm="onConfirm"
            @cancel="showPicker = false" />
      </van-popup>

      <van-field name="radio" label="队伍状态">
        <template #input>
          <van-radio-group v-model="updateTeamData.status" direction="horizontal">
            <van-radio name="0">公开</van-radio>
            <van-radio name="1">私有</van-radio>
            <van-radio name="2">加密</van-radio>
          </van-radio-group>
        </template>
      </van-field>

      <van-field v-if="Number(updateTeamData.status) === 2"
          v-model="updateTeamData.password"
          type="password"
          name="password"
          label="密码"
          placeholder="请输入队伍密码"
          :rules="[{ required: true, message: '请输入队伍密码' }]"
      />

    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>


</template>

<script setup lang="ts">
import {markRaw, onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios";
import {showFailToast, showSuccessToast} from "vant";
import {useRoute, useRouter} from "vue-router";
import {timeFormat} from "../constants/team";
import {TeamType} from "../models/team";

const router = useRouter();
const route = useRoute();

// 过期时间选择器
const showPicker = ref(false);
const onConfirm = ( {selectedValues} ) => {
  // 将时间选择器（string[]）类型转换成Date类型
  const result = selectedValues.join('/');
  // 对国际化时间转换成中国时区时间
  const expireTime = new Date(result);
  updateTeamData.value.expireTime = timeFormat(expireTime)
  // 隐藏时间选择器
  showPicker.value = false;
}


// 需要用户填写表单数据
const updateTeamData = ref<TeamType>({});

const id = route.query.id;

// 页面加载，先查询该队伍的数据
onMounted(async () => {
  const res =  await myAxios.get("/team/get", {
    params: {
      id,
    }
  });
  if (res?.code === 0 && res.data){
    updateTeamData.value = res.data;
  } else {
    showFailToast("加载队伍失败，请刷新重试");
  }

})



// 提交表单，更新队伍
const onSubmit = async () =>{
  const postData = {
    ...updateTeamData.value,
    expireTime: new Date(updateTeamData.value.expireTime).toISOString(),
    status: Number(updateTeamData.value.status)
  }

  // todo 前端参数校验
  const res = await myAxios.post("/team/update", postData);
  if (res?.code === 0 && res.data){
    showSuccessToast("更新成功")
    router.push({
      path: "/team",
      replace: true,
    })
  } else {
    showFailToast("更新失败")
  }
}

// 设置过期时间的日期选择器为大于当前日期
const minDate = new Date;
minDate.setDate(minDate.getDate() + 1);  // 将minDate的日期向前移动一天

</script>

<style scoped>

</style>