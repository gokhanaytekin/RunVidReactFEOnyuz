import React from 'react';

//Normal Page Imports
const ContactForm = React.lazy(() => import('./Pages/ContactForm'));
const ApiKeys = React.lazy(() => import('./Pages/ApiKeys'));
const ChangeLog = React.lazy(() => import('./Pages/Changelog'));
const CustomerComments = React.lazy(() => import('./Pages/CustomerComments'));
const DepartmantManager = React.lazy(() => import('./Pages/DepartmantManager'));
const Error = React.lazy(() => import('./Pages/Error'));
const HelpManagement = React.lazy(() => import('./Pages/HelpManagement'));
const Language = React.lazy(() => import('./Pages/Language'));
const LanguageManagement = React.lazy(() => import('./Pages/LanguageManagement'));
const Log = React.lazy(() => import('./Pages/Log'));
const Mail = React.lazy(() => import('./Pages/Mail'));
const MemberMenagament = React.lazy(() => import('./Pages/MemberMenagament'));
const MenuList = React.lazy(() => import('./Pages/MenuList'));
const MessageNew = React.lazy(() => import('./Pages/MessageNew'));
const Profile = React.lazy(() => import('./Pages/Profile'));
const Promotions = React.lazy(() => import('./Pages/Promotions'));
const Reports = React.lazy(() => import('./Pages/Reports'));
const SystemFeatures = React.lazy(() => import('./Pages/SystemFeatures'));
const Videos = React.lazy(() => import('./Pages/Videos/Videos'));
const Ticket = React.lazy(() => import('./Pages/Ticket'));
const Timezone = React.lazy(() => import('./Pages/Timezone'));
const TransactionHistory = React.lazy(() => import('./Pages/TransactionHistory'));
const UserLists = React.lazy(() => import('./Pages/UserLists'));
//Normal Page Imports End

//System Settings Pages Imports
const SystemSettingsGeneral = React.lazy(() => import('./Pages/SystemSettings/SystemSettingsGeneral'));
const SystemSettingsEmail = React.lazy(() => import('./Pages/SystemSettings/SystemSettingsEmail'));
const SystemSettingsLanguage = React.lazy(() => import('./Pages/SystemSettings/SystemSettingsLanguage'));
const SystemSettingsLocation = React.lazy(() => import('./Pages/SystemSettings/SystemSettingsLocation'));
const SystemSettingsMoney = React.lazy(() => import('./Pages/SystemSettings/SystemSettingsMoney'));
const SystemSettingsNotification = React.lazy(() => import('./Pages/SystemSettings/SystemSettingsNotification'));
const SystemSettingsSms = React.lazy(() => import('./Pages/SystemSettings/SystemSettingsSms'));
const SystemSettingsTimezone = React.lazy(() => import('./Pages/SystemSettings/SystemSettingsTimezone'));
//System Settings Page Imports End

//General Settings Pages Imports
const GeneralSettingsGeneral = React.lazy(() => import('./Pages/GeneralSettings/GeneralSettingsGeneral'));
const GeneralSettingsAbout = React.lazy(() => import('./Pages/GeneralSettings/GeneralSettingsAbout'));
const GeneralSettingsAddBlog = React.lazy(() => import('./Pages/GeneralSettings/GeneralSettingsAddBlog'));
const GeneralSettingsAddExtra = React.lazy(() => import('./Pages/GeneralSettings/GeneralSettingsAddExtra'));
const GeneralSettingsAddHow = React.lazy(() => import('./Pages/GeneralSettings/GeneralSettingsAddHow'));
const GeneralSettingsAddQuestion = React.lazy(() => import('./Pages/GeneralSettings/GeneralSettingsAddQuestion'));
const GeneralSettingsAddSlider = React.lazy(() => import('./Pages/GeneralSettings/GeneralSettingsAddSlider'));
const GeneralSettingsBlog = React.lazy(() => import('./Pages/GeneralSettings/GeneralSettingsBlog'));
const GeneralSettingsExtra = React.lazy(() => import('./Pages/GeneralSettings/GeneralSettingsExtra'));
const GeneralSettingsFaq = React.lazy(() => import('./Pages/GeneralSettings/GeneralSettingsFaq'));
const GeneralSettingsFooter = React.lazy(() => import('./Pages/GeneralSettings/GeneralSettingsFooter'));
const GeneralSettingsHow = React.lazy(() => import('./Pages/GeneralSettings/GeneralSettingsHow'));
const GeneralSettingsSlider = React.lazy(() => import('./Pages/GeneralSettings/GeneralSettingsSlider'));
const GeneralSettingsSolution = React.lazy(() => import('./Pages/GeneralSettings/GeneralSettingsSolution'));
const GeneralSettingsUserComment = React.lazy(() => import('./Pages/GeneralSettings/GeneralSettingsUserComments'));
//General Settings Pages Imports End

//Video Pages Imports
const VideoDetails = React.lazy(() => import('./Pages/Video/VideoDetails'));
const VideoPromotions = React.lazy(() => import('./Pages/Video/VideoPromotions'));
const VideoPublish = React.lazy(() => import('./Pages/Video/VideoPublish'));
const VideoUpload = React.lazy(() => import('./Pages/Video/VideoUpload'));
const VideoVideos = React.lazy(() => import('./Pages/Video/VideoVideos'));
//Video Pages Imports End

//Videos Pages Imports
const FirstVideosDrive = React.lazy(() => import('./Pages/Videos/FirstVideosDrive'));
const SecondVideosDrive = React.lazy(() => import('./Pages/Videos/SecondVideosDrive'));
const VideosDriveDetails = React.lazy(() => import('./Pages/Videos/VideosDriveDetails'));
const VideosUpload = React.lazy(() => import('./Pages/Videos/VideosUpload'));
//Videos Pages Imports End

//Price Plans Pages Imports
const PricePlansBuy = React.lazy(() => import('./Pages/PricePlansBuy'));
const PricePlans = React.lazy(() => import('./Pages/PricePlans'));
//Price Plans Pages Imports End

const routes = [
    { path: '/contactform', component: ContactForm, exact: true },
    { path: '/apikeys', component: ApiKeys, exact: true },
    { path: '/changelog', component: ChangeLog, exact: true },
    { path: '/customercomments', component: CustomerComments, exact: true },
    { path: '/departmantmanager', component: DepartmantManager, exact: true },
    { path: '/error', component: Error, exact: true },
    { path: '/helpmanagement', component: HelpManagement, exact: true },
    { path: '/language', component: Language, exact: true },
    { path: '/language/management', component: LanguageManagement, exact: true },
    { path: '/log', component: Log, exact: true },
    { path: '/mail', component: Mail, exact: true },
    { path: '/membermanagement', component: MemberMenagament, exact: true },
    { path: '/menulist', component: MenuList, exact: true },
    { path: '/mail/new', component: MessageNew, exact: true },
    { path: '/profile', component: Profile, exact: true },
    { path: '/promotions', component: Promotions, exact: true },
    { path: '/reports', component: Reports, exact: true },
    { path: '/systemfeatures', component: SystemFeatures, exact: true },
    { path: '/videos', component: Videos, exact: true },
    { path: '/ticket', component: Ticket, exact: true },
    { path: '/timezone', component: Timezone, exact: true },
    { path: '/transactionhistory', component: TransactionHistory, exact: true },
    { path: '/userlists', component: UserLists, exact: true },
    // System Settings Pages Routes
    { path: '/systemsettings/general', component: SystemSettingsGeneral, exact: true },
    { path: '/systemsettings/email', component: SystemSettingsEmail, exact: true },
    { path: '/systemsettings/language', component: SystemSettingsLanguage, exact: true },
    { path: '/systemsettings/location', component: SystemSettingsLocation, exact: true },
    { path: '/systemsettings/money', component: SystemSettingsMoney, exact: true },
    { path: '/systemsettings/notification', component: SystemSettingsNotification, exact: true },
    { path: '/systemsettings/sms', component: SystemSettingsSms, exact: true },
    { path: '/systemsettings/timezone', component: SystemSettingsTimezone, exact: true },
    // General System Pages Routes
    { path: '/generalsettings/general', component: GeneralSettingsGeneral, exact: true },
    { path: '/generalsettings/about', component: GeneralSettingsAbout, exact: true },
    { path: '/generalsettings/add/blog', component: GeneralSettingsAddBlog, exact: true },
    { path: '/generalsettings/add/extra', component: GeneralSettingsAddExtra, exact: true },
    { path: '/generalsettings/add/how', component: GeneralSettingsAddHow, exact: true },
    { path: '/generalsettings/add/question', component: GeneralSettingsAddQuestion, exact: true },
    { path: '/generalsettings/add/slider', component: GeneralSettingsAddSlider, exact: true },
    { path: '/generalsettings/blog', component: GeneralSettingsBlog, exact: true },
    { path: '/generalsettings/extra', component: GeneralSettingsExtra, exact: true },
    { path: '/generalsettings/faq', component: GeneralSettingsFaq, exact: true },
    { path: '/generalsettings/footer', component: GeneralSettingsFooter, exact: true },
    { path: '/generalsettings/how', component: GeneralSettingsHow, exact: true },
    { path: '/generalsettings/slider', component: GeneralSettingsSlider, exact: true },
    { path: '/generalsettings/solution', component: GeneralSettingsSolution, exact: true },
    { path: '/generalsettings/usercomment', component: GeneralSettingsUserComment, exact: true },
    //Video Pages Routes
    { path: '/video/details', component: VideoDetails, exact: true },
    { path: '/video/promotions', component: VideoPromotions, exact: true },
    { path: '/video/publish', component: VideoPublish, exact: true },
    { path: '/video/upload', component: VideoUpload, exact: true },
    { path: '/video/videos', component: VideoVideos, exact: true },
    //Videos Pages Routes
    { path: '/videos/drive/first', component: FirstVideosDrive, exact: true },
    { path: '/videos/drive/second', component: SecondVideosDrive, exact: true },
    { path: '/videos/drive/details', component: VideosDriveDetails, exact: true },
    { path: '/videos/upload', component: VideosUpload, exact: true },
    //Price Plans Routes
    { path: '/priceplans', component: PricePlans, exact: true },
    { path: '/priceplans/buy', component: PricePlansBuy, exact: true }
  ];
  
  export default routes;