function skillMember() {
  return {
    name: 'skillMember',
    type: 'member',
    path: 'skill',
    component: () => import('@/views/skill/member'),
    meta: {
      title: '技能',
      icon: 'skill',
      role: ['admin', 'editor']
    }
  }
}