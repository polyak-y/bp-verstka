import Main from 'pages/Main';
import Drive from 'pages/Drive';
import Eco from 'pages/Eco';
import Media from 'pages/Media';
import Dobro from 'pages/Dobro';

const router = [
    {path: '/', component: Main, exact: true},
    {path: 'dobro', component: Dobro, exact: false},
    {path: 'eco', component: Eco, exact: false},
    {path: 'media', component: Media, exact: false},
    {path: 'drive', component: Drive, exact: false},
    {path: '*', component: Main, exact: false},
];

export default router;
