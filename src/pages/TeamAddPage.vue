<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="addTeamData.name"
          name="name"
          label="队伍名称"
          placeholder="请输入队伍名称"
          :rules="[{ required: true, message: '请输入队伍名称' }]"
      />

      <van-field
          v-model="addTeamData.description"
          rows="1"
          autosize
          label="队伍描述"
          type="textarea"
          placeholder="请输入队伍描述"
      />

      <van-field
          v-model="addTeamData.expireTime"
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

      <van-field name="stepper" label="队伍最大人数">
        <template #input>
          <van-stepper v-model="addTeamData.maxNum" min="3" max="10"/>
        </template>
      </van-field>

      <van-field name="radio" label="队伍状态">
        <template #input>
          <van-radio-group v-model="addTeamData.status" direction="horizontal">
            <van-radio name="0">公开</van-radio>
            <van-radio name="1">私有</van-radio>
            <van-radio name="2">加密</van-radio>
          </van-radio-group>
        </template>
      </van-field>

      <van-field v-if="Number(addTeamData.status) === 2"
          v-model="addTeamData.password"
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
import {ref} from "vue";
import myAxios from "../plugins/myAxios";
import {showFailToast, showSuccessToast} from "vant";
import {useRouter} from "vue-router";
import {timeFormat} from "../constants/team.ts";

const router = useRouter();

// 过期时间选择器
const showPicker = ref(false);
const onConfirm = ( {selectedValues} ) => {
  // 将时间选择器（string[]）类型转换成Date类型
  const result = selectedValues.join('/');
  // 对国际化时间转换成中国时区时间
  const expireTime = new Date(result);
  addTeamData.value.expireTime = timeFormat(expireTime)
  // 隐藏时间选择器
  showPicker.value = false;
}

// 初始化表单数据对象
const initFormData = {
  "name": "",
  "description": "",
  "expireTime": null,
  "maxNum": 3,
  "password": "",
  "status": 0,
}

// 需要用户填写表单数据
const addTeamData = ref({...initFormData})

const minDate = new Date;
minDate.setDate(minDate.getDate() + 1);  // 将minDate的日期向前移动一天

const onSubmit = async () =>{
  const postData = {
    ...addTeamData.value,
    expireTime: new Date(addTeamData.value.expireTime).toISOString(),
    status: Number(addTeamData.value.status)
  }

  // todo 前端参数校验
  const res = await myAxios.post("/team/add", postData);
  if (res?.code === 0 && res.data){
    showSuccessToast("添加成功")
    router.push({
      path: "/team",
      replace: true,
    })
  } else {
    showFailToast("添加失败")
  }
}
</script>

<style scoped>

</style>