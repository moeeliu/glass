import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Main from '@/components/Main'
import Accept from '@/components/Accept'
import Feedback from '@/components/Feedback'
import Shelves from '@/components/Shelves'
import Patch from '@/components/Patch'
import Position from '@/components/Position'
import Send from '@/components/Send'
import Ship from '@/components/Ship'
import Shipdo from '@/components/Shipdo'

Vue.use(Router)

export default new Router({
  routes: [
//  {
//    path: '/',
//    name: 'Hello',
//    component: Hello
//  },
    {
    	path:'/',
    	name:'Main',
    	component:Main
    },
    {
    	path:'/accept',
    	name:'Accept',
    	component:Accept
    },
    {
    	path:'/feedback',
    	name:'Feedback',
    	component:Feedback
    },
    {
    	path:'/shelves',
    	name:'Shelves',
    	component:Shelves
    },
    {
    	path:'/patch',
    	name:'Patch',
    	component:Patch
    },
    {
    	path:'/position',
    	name:'Position',
    	component:Position
    },
    {
    	path:'/send',
    	name:'Send',
    	component:Send
    },
    {
    	path:'/ship',
    	name:'Ship',
    	component:Ship
    },
    {
    	path:'/ship/do',
    	name:'Shipdo',
    	component:Shipdo
    }
  ]
})
