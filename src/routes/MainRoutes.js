import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import AuthGuard from 'utils/route-guard/AuthGuard';

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
