import AccountInformation from "../features/AccountInformation"
import Orders from "../features/Orders"
import Product from "../features/Product"
import User from "../features/User"

const publicRoutes = [
    {path: '/', component: Product },
    {path: '/product', component: Product},
    {path: '/accountinfo', component: AccountInformation},
    {path: '/orders', component: Orders},
    {path: '/user', component: User},
]

const privateRoutes = [

]

export {publicRoutes, privateRoutes}