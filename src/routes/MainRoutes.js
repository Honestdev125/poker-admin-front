import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import AuthGuard from 'utils/route-guard/AuthGuard';
import { element } from 'prop-types';

// dashboard routing

// widget routing
const WidgetStatistics = Loadable(lazy(() => import('views/widget/Statistics')));
const WidgetData = Loadable(lazy(() => import('views/widget/Data')));
const WidgetChart = Loadable(lazy(() => import('views/widget/Chart')));

// application - user social & account profile routing
const AppUserSocialProfile = Loadable(lazy(() => import('views/application/users/social-profile')));
const AppUserAccountProfile1 = Loadable(lazy(() => import('views/application/users/account-profile/Profile1')));
const AppUserAccountProfile2 = Loadable(lazy(() => import('views/application/users/account-profile/Profile2')));
const AppUserAccountProfile3 = Loadable(lazy(() => import('views/application/users/account-profile/Profile3')));

// application - user cards & list variant routing
const AppProfileCardStyle1 = Loadable(lazy(() => import('views/application/users/card/CardStyle1')));
const AppProfileCardStyle2 = Loadable(lazy(() => import('views/application/users/card/CardStyle2')));
const AppProfileCardStyle3 = Loadable(lazy(() => import('views/application/users/card/CardStyle3')));
const AppProfileListStyle2 = Loadable(lazy(() => import('views/application/users/list/Style2')));

// application - customer routing
const AppCustomerList = Loadable(lazy(() => import('views/application/customer/CustomerList')));
const AppCustomerOrderList = Loadable(lazy(() => import('views/application/customer/OrderList')));
const AppCustomerCreateInvoice = Loadable(lazy(() => import('views/application/customer/CreateInvoice')));
const AppCustomerOrderDetails = Loadable(lazy(() => import('views/application/customer/OrderDetails')));
const AppCustomerProduct = Loadable(lazy(() => import('views/application/customer/Product')));
const AppCustomerProductReview = Loadable(lazy(() => import('views/application/customer/ProductReview')));

// application routing
const AppChat = Loadable(lazy(() => import('views/application/chat')));
const AppKanban = Loadable(lazy(() => import('views/application/kanban')));
const AppKanbanBacklogs = Loadable(lazy(() => import('views/application/kanban/Backlogs')));
const AppKanbanBoard = Loadable(lazy(() => import('views/application/kanban/Board')));
const AppMail = Loadable(lazy(() => import('views/application/mail')));
const AppCalendar = Loadable(lazy(() => import('views/application/calendar')));
const AppContactCard = Loadable(lazy(() => import('views/application/contact/Card')));
const AppContactList = Loadable(lazy(() => import('views/application/contact/List')));

// application e-commerce pages
const AppECommProducts = Loadable(lazy(() => import('views/application/e-commerce/Products')));
const AppECommProductDetails = Loadable(lazy(() => import('views/application/e-commerce/ProductDetails')));
const AppECommProductList = Loadable(lazy(() => import('views/application/e-commerce/ProductList')));
const AppECommCheckout = Loadable(lazy(() => import('views/application/e-commerce/Checkout')));

// forms component routing
const FrmComponentsTextfield = Loadable(lazy(() => import('views/forms/components/TextField')));
const FrmComponentsButton = Loadable(lazy(() => import('views/forms/components/Button')));
const FrmComponentsCheckbox = Loadable(lazy(() => import('views/forms/components/Checkbox')));
const FrmComponentsRadio = Loadable(lazy(() => import('views/forms/components/Radio')));
const FrmComponentsSwitch = Loadable(lazy(() => import('views/forms/components/Switch')));
const FrmComponentsAutoComplete = Loadable(lazy(() => import('views/forms/components/AutoComplete')));
const FrmComponentsSlider = Loadable(lazy(() => import('views/forms/components/Slider')));
const FrmComponentsDateTime = Loadable(lazy(() => import('views/forms/components/DateTime')));

// forms plugins layout
const FrmLayoutLayout = Loadable(lazy(() => import('views/forms/layouts/Layouts')));
const FrmLayoutMultiColumnForms = Loadable(lazy(() => import('views/forms/layouts/MultiColumnForms')));
const FrmLayoutActionBar = Loadable(lazy(() => import('views/forms/layouts/ActionBar')));
const FrmLayoutStickyActionBar = Loadable(lazy(() => import('views/forms/layouts/StickyActionBar')));

// forms plugins routing
const FrmAutocomplete = Loadable(lazy(() => import('views/forms/plugins/AutoComplete')));
const FrmMask = Loadable(lazy(() => import('views/forms/plugins/Mask')));
const FrmClipboard = Loadable(lazy(() => import('views/forms/plugins/Clipboard')));
const FrmRecaptcha = Loadable(lazy(() => import('views/forms/plugins/Recaptcha')));
const FrmWysiwugEditor = Loadable(lazy(() => import('views/forms/plugins/WysiwugEditor')));
const FrmModal = Loadable(lazy(() => import('views/forms/plugins/Modal')));
const FrmTooltip = Loadable(lazy(() => import('views/forms/plugins/Tooltip')));

// table routing
const TableBasic = Loadable(lazy(() => import('views/forms/tables/TableBasic')));
const TableDense = Loadable(lazy(() => import('views/forms/tables/TableDense')));
const TableEnhanced = Loadable(lazy(() => import('views/forms/tables/TableEnhanced')));
const TableData = Loadable(lazy(() => import('views/forms/tables/TableData')));
const TableCustomized = Loadable(lazy(() => import('views/forms/tables/TablesCustomized')));
const TableStickyHead = Loadable(lazy(() => import('views/forms/tables/TableStickyHead')));
const TableCollapsible = Loadable(lazy(() => import('views/forms/tables/TableCollapsible')));

// forms validation
const FrmFormsValidation = Loadable(lazy(() => import('views/forms/forms-validation')));
const FrmFormsWizard = Loadable(lazy(() => import('views/forms/forms-wizard')));

// chart routing
const ChartApexchart = Loadable(lazy(() => import('views/forms/chart/Apexchart')));
const OrgChartPage = Loadable(lazy(() => import('views/forms/chart/OrgChart')));

// basic ui-elements routing
const BasicUIAccordion = Loadable(lazy(() => import('views/ui-elements/basic/UIAccordion')));
const BasicUIAvatar = Loadable(lazy(() => import('views/ui-elements/basic/UIAvatar')));
const BasicUIBadges = Loadable(lazy(() => import('views/ui-elements/basic/UIBadges')));
const BasicUIBreadcrumb = Loadable(lazy(() => import('views/ui-elements/basic/UIBreadcrumb')));
const BasicUICards = Loadable(lazy(() => import('views/ui-elements/basic/UICards')));
const BasicUIChip = Loadable(lazy(() => import('views/ui-elements/basic/UIChip')));
const BasicUIList = Loadable(lazy(() => import('views/ui-elements/basic/UIList')));
const BasicUITabs = Loadable(lazy(() => import('views/ui-elements/basic/UITabs')));

// advance ui-elements routing
const AdvanceUIAlert = Loadable(lazy(() => import('views/ui-elements/advance/UIAlert')));
const AdvanceUIDialog = Loadable(lazy(() => import('views/ui-elements/advance/UIDialog')));
const AdvanceUIPagination = Loadable(lazy(() => import('views/ui-elements/advance/UIPagination')));
const AdvanceUIProgress = Loadable(lazy(() => import('views/ui-elements/advance/UIProgress')));
const AdvanceUIRating = Loadable(lazy(() => import('views/ui-elements/advance/UIRating')));
const AdvanceUISnackbar = Loadable(lazy(() => import('views/ui-elements/advance/UISnackbar')));
const AdvanceUISkeleton = Loadable(lazy(() => import('views/ui-elements/advance/UISkeleton')));
const AdvanceUISpeeddial = Loadable(lazy(() => import('views/ui-elements/advance/UISpeeddial')));
const AdvanceUITimeline = Loadable(lazy(() => import('views/ui-elements/advance/UITimeline')));
const AdvanceUIToggleButton = Loadable(lazy(() => import('views/ui-elements/advance/UIToggleButton')));
const AdvanceUITreeview = Loadable(lazy(() => import('views/ui-elements/advance/UITreeview')));

// pricing page routing
const PagesPrice1 = Loadable(lazy(() => import('views/pages/pricing/Price1')));
const PagesPrice2 = Loadable(lazy(() => import('views/pages/pricing/Price2')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsAnimation = Loadable(lazy(() => import('views/utilities/Animation')));
const UtilsGrid = Loadable(lazy(() => import('views/utilities/Grid')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

const AppProfileListStyle1 = Loadable(lazy(() => import('views/application/users/list/Style1')));
const Player = Loadable(lazy(() => import('views/player/')));
const UsersDetail = Loadable(lazy(() => import('views/player/PlayerDetail')));
const Transaction = Loadable(lazy(() => import('views/transaction-history')));
const Texas = Loadable(lazy(() => import('views/holdem-manage')));
const TexasCreate = Loadable(lazy(() => import('views/holdem-manage/HoldemCreat')));
const TexasDetail = Loadable(lazy(() => import('views/holdem-manage/HoldemDetail')));
const TexasCancel = Loadable(lazy(() => import('views/holdem-manage')));
const TournamentList = Loadable(lazy(() => import('views/tournament-manage')));
const TournamentCreate = Loadable(lazy(() => import('views/tournament-manage/TournamentCreat')));
const TournamentCancel = Loadable(lazy(() => import('views/tournament-manage')));
const TournamentDetail = Loadable(lazy(() => import('views/tournament-manage/TournamentDetail')));
const Default = Loadable(lazy(() => import('views/dashboard')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: (
        <AuthGuard>
            <MainLayout />
        </AuthGuard>
    ),
    children: [
        // {
        //     path: '/widget/statistics',
        //     element: <WidgetStatistics />
        // },
        // {
        //     path: '/widget/data',
        //     element: <WidgetData />
        // },
        // {
        //     path: '/widget/chart',
        //     element: <WidgetChart />
        // },

        // {
        //     path: '/user/social-profile/:tab',
        //     element: <AppUserSocialProfile />
        // },
        // {
        //     path: '/user/account-profile/profile1',
        //     element: <AppUserAccountProfile1 />
        // },
        // {
        //     path: '/user/account-profile/profile2',
        //     element: <AppUserAccountProfile2 />
        // },
        // {
        //     path: '/user/account-profile/profile3',
        //     element: <AppUserAccountProfile3 />
        // },

        // {
        //     path: '/user/card/card1',
        //     element: <AppProfileCardStyle1 />
        // },
        // {
        //     path: '/user/card/card2',
        //     element: <AppProfileCardStyle2 />
        // },
        // {
        //     path: '/user/card/card3',
        //     element: <AppProfileCardStyle3 />
        // },
        // {
        //     path: '/user/list/list1',
        //     element: <AppProfileListStyle1 />
        // },
        // {
        //     path: '/user/list/list2',
        //     element: <AppProfileListStyle2 />
        // },

        // {
        //     path: '/customer/customer-list',
        //     element: <AppCustomerList />
        // },
        // {
        //     path: '/customer/order-list',
        //     element: <AppCustomerOrderList />
        // },
        // {
        //     path: '/customer/create-invoice',
        //     element: <AppCustomerCreateInvoice />
        // },
        // {
        //     path: '/customer/order-details',
        //     element: <AppCustomerOrderDetails />
        // },
        // {
        //     path: '/customer/product',
        //     element: <AppCustomerProduct />
        // },
        // {
        //     path: '/customer/product-review',
        //     element: <AppCustomerProductReview />
        // },

        // {
        //     path: '/app/chat',
        //     element: <AppChat />
        // },
        // {
        //     path: '/app/mail',
        //     element: <AppMail />
        // },
        // {
        //     path: '/app/kanban',
        //     element: <AppKanban />,
        //     children: [
        //         {
        //             path: 'backlogs',
        //             element: <AppKanbanBacklogs />
        //         },
        //         {
        //             path: 'board',
        //             element: <AppKanbanBoard />
        //         }
        //     ]
        // },
        // {
        //     path: '/app/calendar',
        //     element: <AppCalendar />
        // },
        // {
        //     path: '/app/contact/c-card',
        //     element: <AppContactCard />
        // },
        // {
        //     path: '/app/contact/c-list',
        //     element: <AppContactList />
        // },

        // {
        //     path: '/e-commerce/products',
        //     element: <AppECommProducts />
        // },
        // {
        //     path: '/e-commerce/product-details/:id',
        //     element: <AppECommProductDetails />
        // },
        // {
        //     path: '/e-commerce/product-list',
        //     element: <AppECommProductList />
        // },
        // {
        //     path: '/e-commerce/checkout',
        //     element: <AppECommCheckout />
        // },

        // {
        //     path: '/components/text-field',
        //     element: <FrmComponentsTextfield />
        // },
        // {
        //     path: '/components/button',
        //     element: <FrmComponentsButton />
        // },
        // {
        //     path: '/components/checkbox',
        //     element: <FrmComponentsCheckbox />
        // },
        // {
        //     path: '/components/radio',
        //     element: <FrmComponentsRadio />
        // },
        // {
        //     path: '/components/autocomplete',
        //     element: <FrmComponentsAutoComplete />
        // },
        // {
        //     path: '/components/slider',
        //     element: <FrmComponentsSlider />
        // },
        // {
        //     path: '/components/switch',
        //     element: <FrmComponentsSwitch />
        // },
        // {
        //     path: '/components/date-time',
        //     element: <FrmComponentsDateTime />
        // },

        // {
        //     path: '/forms/layouts/layouts',
        //     element: <FrmLayoutLayout />
        // },
        // {
        //     path: '/forms/layouts/multi-column-forms',
        //     element: <FrmLayoutMultiColumnForms />
        // },
        // {
        //     path: '/forms/layouts/action-bar',
        //     element: <FrmLayoutActionBar />
        // },
        // {
        //     path: '/forms/layouts/sticky-action-bar',
        //     element: <FrmLayoutStickyActionBar />
        // },

        // {
        //     path: '/forms/frm-autocomplete',
        //     element: <FrmAutocomplete />
        // },
        // {
        //     path: '/forms/frm-mask',
        //     element: <FrmMask />
        // },
        // {
        //     path: '/forms/frm-clipboard',
        //     element: <FrmClipboard />
        // },
        // {
        //     path: '/forms/frm-recaptcha',
        //     element: <FrmRecaptcha />
        // },
        // {
        //     path: '/forms/frm-wysiwug',
        //     element: <FrmWysiwugEditor />
        // },
        // {
        //     path: '/forms/frm-modal',
        //     element: <FrmModal />
        // },
        // {
        //     path: '/forms/frm-tooltip',
        //     element: <FrmTooltip />
        // },

        // {
        //     path: '/tables/tbl-basic',
        //     element: <TableBasic />
        // },
        // {
        //     path: '/tables/tbl-dense',
        //     element: <TableDense />
        // },
        // {
        //     path: '/tables/tbl-enhanced',
        //     element: <TableEnhanced />
        // },
        // {
        //     path: '/tables/tbl-data',
        //     element: <TableData />
        // },
        // {
        //     path: '/tables/tbl-customized',
        //     element: <TableCustomized />
        // },
        // {
        //     path: '/tables/tbl-sticky-header',
        //     element: <TableStickyHead />
        // },
        // {
        //     path: '/tables/tbl-collapse',
        //     element: <TableCollapsible />
        // },

        // {
        //     path: 'forms/charts/apexchart',
        //     element: <ChartApexchart />
        // },
        // {
        //     path: '/forms/charts/orgchart',
        //     element: <OrgChartPage />
        // },
        // {
        //     path: '/forms/forms-validation',
        //     element: <FrmFormsValidation />
        // },
        // {
        //     path: '/forms/forms-wizard',
        //     element: <FrmFormsWizard />
        // },

        // {
        //     path: '/basic/accordion',
        //     element: <BasicUIAccordion />
        // },
        // {
        //     path: '/basic/avatar',
        //     element: <BasicUIAvatar />
        // },
        // {
        //     path: '/basic/badges',
        //     element: <BasicUIBadges />
        // },
        // {
        //     path: '/basic/breadcrumb',
        //     element: <BasicUIBreadcrumb />
        // },
        // {
        //     path: '/basic/cards',
        //     element: <BasicUICards />
        // },
        // {
        //     path: '/basic/chip',
        //     element: <BasicUIChip />
        // },
        // {
        //     path: '/basic/list',
        //     element: <BasicUIList />
        // },
        // {
        //     path: '/basic/tabs',
        //     element: <BasicUITabs />
        // },

        // {
        //     path: '/advance/alert',
        //     element: <AdvanceUIAlert />
        // },
        // {
        //     path: '/advance/dialog',
        //     element: <AdvanceUIDialog />
        // },
        // {
        //     path: '/advance/pagination',
        //     element: <AdvanceUIPagination />
        // },
        // {
        //     path: '/advance/progress',
        //     element: <AdvanceUIProgress />
        // },
        // {
        //     path: '/advance/rating',
        //     element: <AdvanceUIRating />
        // },
        // {
        //     path: '/advance/snackbar',
        //     element: <AdvanceUISnackbar />
        // },
        // {
        //     path: '/advance/skeleton',
        //     element: <AdvanceUISkeleton />
        // },
        // {
        //     path: '/advance/speeddial',
        //     element: <AdvanceUISpeeddial />
        // },
        // {
        //     path: '/advance/timeline',
        //     element: <AdvanceUITimeline />
        // },
        // {
        //     path: '/advance/toggle-button',
        //     element: <AdvanceUIToggleButton />
        // },
        // {
        //     path: '/advance/treeview',
        //     element: <AdvanceUITreeview />
        // },

        // {
        //     path: '/pages/price/price1',
        //     element: <PagesPrice1 />
        // },
        // {
        //     path: '/pages/price/price2',
        //     element: <PagesPrice2 />
        // },

        // {
        //     path: '/utils/util-typography',
        //     element: <UtilsTypography />
        // },
        // {
        //     path: '/utils/util-color',
        //     element: <UtilsColor />
        // },
        // {
        //     path: '/utils/util-shadow',
        //     element: <UtilsShadow />
        // },
        // {
        //     path: '/utils/util-animation',
        //     element: <UtilsAnimation />
        // },
        // {
        //     path: '/utils/util-grid',
        //     element: <UtilsGrid />
        // },
        // {
        //     path: '/sample-page',
        //     element: <SamplePage />
        // },

        // {
        //     path: '/build/list/list1',
        //     element: <AppProfileListStyle1 />
        // },
        {
            path: '/dashboard/default',
            element: <Default />
        },
        {
            path: '/dashboard/player',
            element: <Player />
        },
        {
            path: '/dashboard/player/transaction/:id',
            element: <Transaction />
        },
        {
            path: '/dashboard/player/detail/:id',
            element: <UsersDetail />
        },
        {
            path: 'dashboard/tournament',
            element: <TournamentList />
        },
        {
            path: 'tournament/create',
            element: <TournamentCreate />
        },
        {
            path: 'tournamentlist',
            element: <TournamentCancel />
        },
        {
            path: 'tournamentDetail',
            element: <TournamentDetail />
        },
        {
            path: 'dashboard/texas',
            element: <Texas />
        },
        {
            path: 'texas-holdem/create',
            element: <TexasCreate />
        },
        {
            path: 'holdemdetail/:id',
            element: <TexasDetail />
        },
        {
            path: 'holdemlist',
            element: <TexasCancel />
        },
        {
            path: '/dashboard/transaction',
            element: <Transaction />
        }
    ]
};

export default MainRoutes;
