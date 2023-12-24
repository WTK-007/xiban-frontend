// 定义一些路由
import Index from "../pages/Index.vue";
import Team from "../pages/TeamPage.vue";
import Search from "../pages/SearchPage.vue";
import EditUserPage from "../pages/UserEditPage.vue";
import SearchResultPage from "../pages/SearchResultPage.vue";
import UserLoginPage from "../pages/UserLoginPage.vue";
import TeamAddPage from "../pages/TeamAddPage.vue";
import TeamUpdatePage from "../pages/TeamUpdatePage.vue";
import UserUpdatePage from "../pages/UserUpdatePage.vue";
import UserTeamJoinPage from "../pages/UserTeamJoinPage.vue";
import UserTeamCreatePage from "../pages/UserTeamCreatePage.vue";
import UserPage from "../pages/UserPage.vue";



const routes = [
    { path: '/', component: Index },
    { path: '/user', title: '个人信息', component: UserPage},
    { path: '/search', title:'找伙伴',  component: Search},
    { path: '/user/edit', title:'编辑信息', component: EditUserPage},
    { path: '/user/list', title:'用户列表', component: SearchResultPage},
    { path: '/user/login', title:'登录', component: UserLoginPage},
    { path: '/user/update', title:'更新信息', component: UserUpdatePage},
    { path: '/user/team/join', title:'我加入的队伍', component: UserTeamJoinPage},
    { path: '/user/team/create', title:'我创建的队伍', component: UserTeamCreatePage},
    { path: '/team', title:'队伍列表', component: Team },
    { path: '/team/add', title:'添加队伍', component: TeamAddPage},
    { path: '/team/update', title:'更新队伍', component: TeamUpdatePage},
];

export default routes;