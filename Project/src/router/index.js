import dynamic from 'dva/dynamic';

// 引入一级路由
// import LoginPage from '../routes/LoginPage';
// import MainPage from '../routes/MainPage';
// import Logins from '../routes/Login/logins';
// import PlayPage from '../routes/PlayPage';
// 引入二级路由
// import AccountPage from '../routes/account/Index';
// import DiscoverPage from '../routes/discover/Index';
// import FriendPage from '../routes/friend/Index';
// import MyPage from '../routes/my/Index';
// import VideoPage from '../routes/video/Index';
// import SearchPage from '../routes/discover/search';
// import MusicPage from '../routes/anchor/MusicList';

//引入三级路由
// import AnchorPage from '../routes/anchor/Index';
// import PersonalityPage from '../routes/personality/Index'

// 引入一级路由
const LoginPage = dynamic({
  component: () => import('../routes/LoginPage')
})

const MainPage = dynamic({
  component: () => import('../routes/MainPage')
})
const Logins = dynamic({
  component: () => import('../routes/Login/logins')
})
const PlayPage = dynamic({
  component: () => import('../routes/PlayPage')
})
//引二级路由
const AccountPage = dynamic({
  component: () => import('../routes/account/Index')
})
const DiscoverPage = dynamic({
  component: () => import('../routes/MainPage')
})
const FriendPage = dynamic({
  component: () => import('../routes/friend/Index')
})
const MyPage = dynamic({
  component: () => import('../routes/my/Index')
})
const VideoPage = dynamic({
  component: () => import('../routes/video/Index')
})
const SearchPage = dynamic({
  component: () => import('../routes/discover/search')
})
const MusicPage = dynamic({
  component: () => import('../routes/anchor/MusicList')
})
//引入三级路由
const AnchorPage = dynamic({
  component: () => import('../routes/anchor/Index')
})
const PersonalityPage = dynamic({
  component: () => import('../routes/personality/Index')
})
export default {
  routes: [{
    path: '/login',
    component: LoginPage,
  },{
    path:'/play/:id',
    component:PlayPage
  },{
    path:'/logins',
    component:Logins
  },{
    path: '/main',
    component: MainPage,
    children: [{
      path: '/main/account',
      component: AccountPage
    },{
      path:'/main/search',
      component:SearchPage
    },{
      path:'/main/MusicList',
      component:MusicPage
    },{
      path: '/main/discover',
      component: DiscoverPage,
      children:[{
        path:'/main/discover/anchor',
        component:AnchorPage
      },{
        path:'/main/discover/personality',
        component:PersonalityPage
      }]
    },{
      path: '/main/friend',
      component: FriendPage
    },{
      path: '/main/my',
      component: MyPage
    },{
      path: '/main/video',
      component: VideoPage
    }]
  },{
    path: '/',
    redirect: '/main/discover/anchor'
  }]
}
