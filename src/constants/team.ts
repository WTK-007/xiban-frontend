 export const teamStatusEnum = {
     0: '公开',
     1: '私有',
     2: '加密'
 }

 // 对时间进行格式化
 export const timeFormat= (time) =>{
     return new Intl.DateTimeFormat('zh-CN', {
         year: 'numeric',
         month: '2-digit',
         day: '2-digit',
         hour12: false
     }).format(time);
 }

 // 对时间进行格式化(带时分秒)
 export const timeFormaDetailt= (time) =>{
     return new Intl.DateTimeFormat('zh-CN', {
         year: 'numeric',
         month: '2-digit',
         day: '2-digit',
         hour: '2-digit',
         minute: '2-digit',
         second: '2-digit',
         hour12: false
     }).format(time);
 }