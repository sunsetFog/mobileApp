export default [
    { path: '/login', name: 'Login', meta: { title: '登录' }, component: () => import('@/views/loginUnit/index') },
    { path: '/registerUnit/index', name: 'registerUnit', meta: { title: '注册' }, component: () => import('@/views/registerUnit/index') }
]
