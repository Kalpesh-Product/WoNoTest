export const PERMISSIONS = {
  ASSETS_VIEW_ASSETS: { value: "view_assets", type: "read" },
  ASSETS_MANAGE_ASSETS: { value: "manage_assets", type: "read" },
  ASSETS_ASSIGNED_UNASSIGNED: { value: "assigned_unassigned", type: "read" },
  ASSETS_ASSIGNED_ASSETS: { value: "assigned_assets", type: "read" },

  // Tickets Module
  TICKETS_RAISE_TICKET: {
    value: "raise_ticket",
    type: "read",
    route: "/app/tickets/raise-ticket",
  },
  TICKETS_MANAGE_TICKETS: {
    value: "manage_tickets",
    type: "read",
    route: "/app/tickets/manage-tickets",
  },

  TICKETS_RECIEVED_TICKETS: {
    value: "recieved_tickets",
    type: "read",
    route: "/app/tickets/manage-tickets",
  },
  TICKETS_ACCEPTED_TICKETS: {
    value: "accepted_tickets",
    type: "read",
    route: "/app/tickets/manage-tickets",
  },
  TICKETS_ASSIGNED_TICKETS: {
    value: "assigned_tickets",
    type: "read",
    route: "/app/tickets/manage-tickets",
  },
  TICKETS_SUPPORT_TICKETS: {
    value: "support_tickets",
    type: "read",
    route: "/app/tickets/manage-tickets",
  },
  TICKETS_ESCALATED_TICKETS: {
    value: "escalated_tickets",
    type: "read",
    route: "/app/tickets/manage-tickets",
  },
  TICKETS_CLOSED_TICKETS: {
    value: "closed_tickets",
    type: "read",
    route: "/app/tickets/manage-tickets",
  },

  TICKETS_TICKET_SETTINGS: {
    value: "ticket_settings",
    type: "read",
    route: "/app/tickets/settings",
  },
  TICKETS_REPORTS: {
    value: "ticket_reports",
    type: "read",
    route: "/app/tickets/reports",
  },
  TICKETS_TEAM_MEMBERS: {
    value: "tickets_team_members",
    type: "read",
    route: "/app/tickets/team-members",
  },
  TICKETS_TOTAL_TICKETS_DONUT: {
    value: "total_tickets_donut",
    type: "read",
  },
  TICKETS_DEPARTMENT_TICKETS_DONUT: {
    value: "department_tickets_donut",
    type: "read",
  },
  TICKETS_PRIORITY_WISE_TICKETS_DATA_CARD: {
    value: "priority_wise_tickets_data_card",
    type: "read",
  },
  TICKETS_DEPARTMENT_TICKETS_DATA_CARD: {
    value: "department_tickets_data_card",
    type: "read",
  },
  TICKETS_PERSONAL_TICKETS_DATA_CARD: {
    value: "personal_tickets_data_card",
    type: "read",
  },
  TICKETS_OVERALL_DEPARTMENT_WISE_TICKETS: {
    value: "overall_department_wise_tickets",
    type: "read",
  },

  // Performance Module

  PERFORMANCE_DAILY_KRA: {
    value: "daily_kra",
    type: "read",
    route: "daily-KRA",
  },
  PERFORMANCE_MONTHLY_KPA: {
    value: "monthly_kpa",
    type: "read",
    route: "monthly-KPA",
  },

  TASKS_MY_TASKS: { value: "my_tasks", type: "read" },
  TASKS_DEPARTMENT_TASKS: { value: "department_tasks", type: "read" },
  TASKS_TEAM_MEMBERS: { value: "task_team_members", type: "read" },
  TASKS_REPORTS: { value: "task_reports", type: "read" },
  TASKS_SETTINGS: { value: "task_settings", type: "read" },

  // Visitors Module
  VISITORS_MONTHLY_TOTAL_VISITORS: {
    value: "visitors_monthly_total_visitors",
    type: "read",
  },
  VISITORS_ADD_VISITOR: {
    value: "add_visitor",
    type: "read",
    route: "/app/visitors/add-visitor",
  },
  VISITORS_ADD_CLIENT: {
    value: "add_client",
    type: "read",
    route: "/app/visitors/add-client",
  },
  VISITORS_MANAGE_VISITORS: {
    value: "manage_visitors",
    type: "read",
    route: "/app/visitors/manage-visitors",
  },
  VISITORS_TEAM_MEMBERS: {
    value: "visitor_team_members",
    type: "read",
    route: "/app/visitors/team-members",
  },
  VISITORS_REPORTS: {
    value: "visitor_reports",
    type: "read",
    route: "/app/visitors/reports",
  },

  VISITORS_VISITOR_CATEGORIES: {
    value: "visitor_categories",
    type: "read",
  },
  VISITORS_CHECKED_IN_VS_YET_TO_CHECK_OUT: {
    value: "visitor_checked_in_vs_yet_to_check_out",
    type: "read",
  },
  VISITORS_GENDER_DATA_PIE: {
    value: "visitor_gender_data_pie_chart",
    type: "read",
  },
  VISITORS_DEPARTMENT_WISE_VISITS_PIE: {
    value: "visitor_department_wise_visits_pie_chart",
    type: "read",
  },
  VISITORS_TODAY: {
    value: "visitor_today",
    type: "read",
  },

  //Visitors Data Cards
  VISITORS_CHECKED_IN_VISITORS_TODAY: {
    value: "checked_in_visitors_today",
    type: "read",
  },
  VISITORS_CHECKED_OUT_TODAY: {
    value: "checked_out_today",
    type: "read",
  },
  VISITORS_YET_TO_CHECK_OUT: {
    value: "yet_to_check_out",
    type: "read",
  },
  VISITORS_WALK_IN_VISITS_TODAY: {
    value: "walk_in_visits_today",
    type: "read",
  },
  VISITORS_SCHEDULED_VISITS_TODAY: {
    value: "scheduled_visits_today",
    type: "read",
  },
  VISITORS_MEETING_BOOKINGS_TODAY: {
    value: "meeting_bookings_today",
    type: "read",
  },
  //Visitors Tabs
  VISITORS_MANAGE_INTERNAL_VISITORS: {
    value: "visitors_manage_internal_visitors",
    type: "read",
    access: "page",
    route: "/app/visitors/manage-visitors/internal-visitors",
  },
  VISITORS_MANAGE_EXTERNAL_CLIENTS: {
    value: "visitors_manage_external_clients",
    type: "read",
    access: "page",
    route: "/app/visitors/manage-visitors/external-clients",
  },

  //Visitors table
  VISITORS_VISITORS_TODAY: {
    value: "visitors_visitors_today",
    type: "read",
  },

  // Meetings Module
  MEETINGS_BOOK_MEETING: {
    value: "book_meeting",
    type: "read",
    access: "page",
    route: "/app/meetings/book-meeting",
  },
  MEETINGS_MANAGE_MEETINGS: { value: "manage_meetings", type: "read" },
  MEETINGS_CALENDAR: { value: "meeting_calendar", type: "read" },
  MEETINGS_REPORTS: { value: "meeting_reports", type: "read" },
  MEETINGS_REVIEWS: { value: "meeting_reviews", type: "read" },
  MEETINGS_SETTINGS: { value: "meeting_settings", type: "read" },

  //Meetings Pie Charts
  MEETINGS_ROOM_STATUS: { value: "meeting_room_status", type: "read" },
  MEETINGS_HOUSEKEEPING_STATUS: {
    value: "meeting_housekeeping_status",
    type: "read",
  },

  // Meeting Tabs
  MEETINGS_MEETINGS_INTERNAL: {
    value: "manage_meetings_internal",
    type: "read",
    access: "page",
    route: "/app/meetings/manage-meetings/internal-meetings",
  },
  MEETINGS_MEETINGS_EXTERNAL: {
    value: "manage_meetings_external",
    type: "read",
    access: "page",
    route: "/app/meetings/manage-meetings/external-meetings",
  },

  // Finance Module
  FINANCE_CASHFLOW: { value: "cashflow", type: "read" },
  FINANCE_FINANCE: { value: "finance_finance", type: "read" },
  FINANCE_BILLING: { value: "billing", type: "read" },
  FINANCE_MIX_BAG: { value: "finance_mix_bag", type: "read" },
  FINANCE_DATA: { value: "finance_data", type: "read" },
  FINANCE_SETTINGS: { value: "finance_settings", type: "read" },

  FINANCE_PAYOUTS: { value: "finance_payouts_pie_chart", type: "read" },
  FINANCE_CUSTOMER_COLLECTIONS: {
    value: "finance_customer_collections_pie_chart",
    type: "read",
  },
  FINANCE_STATUTORY_PAYMENTS_DONUT: {
    value: "finance_statutory_payments_donut_chart",
    type: "read",
  },
  FINANCE_RENTAL_PAYMENTS_DONUT: {
    value: "finance_rental_payments_donut_chart",
    type: "read",
  },
  FINANCE_PAYOUTS_MUI_TABLE: {
    value: "finance_payouts_table",
    type: "read",
  },
  FINANCE_INCOME_EXPENSE_YEARLY_GRAPH: {
    value: "finance_income_expense_yearly_graph",
    type: "read",
  },
  FINANCE_INCOME_DATA_CARD: {
    value: "finance_income_data_card",
    type: "read",
  },
  FINANCE_EXPENSE_DATA_CARD: {
    value: "finance_expense_data_card",
    type: "read",
  },
  FINANCE_PL_DATA_CARD: {
    value: "finance_pl_data_card",
    type: "read",
  },

  // Finance Tabs
  FINANCE_CASHFLOW_PROJECTIONS: {
    value: "cashflow_projections",
    type: "read",
    access: "page",
    route: "/app/dashboard/finance-dashboard/cashflow/projections",
  },
  FINANCE_CASHFLOW_HISTORICAL: {
    value: "historical_pnl",
    type: "read",
    access: "page",
    route: "/app/dashboard/finance-dashboard/cashflow/historical-P&L",
  },

  FINANCE_BUDGET: {
    value: "finance_budget",
    type: "read",
    access: "page",
    route: "/app/dashboard/finance-dashboard/finance/budget",
  },
  FINANCE_PAYMENT_SCHEDULE: {
    value: "finance_payment_schedule",
    type: "read",
    access: "page",
    route: "/app/dashboard/finance-dashboard/finance/payment-schedule",
  },
  FINANCE_VOUCHER: {
    value: "finance_voucher",
    type: "read",
    access: "page",
    route: "/app/dashboard/finance-dashboard/finance/voucher",
  },
  FINANCE_DEPT_WISE_BUDGET: {
    value: "dept_wise_budget",
    type: "read",
    access: "page",
    route: "/app/dashboard/finance-dashboard/finance/dept-wise-budget",
  },
  FINANCE_COLLECTIONS: {
    value: "collections",
    type: "read",
    access: "page",
    route: "/app/dashboard/finance-dashboard/finance/collections",
  },
  FINANCE_STATUTORY_PAYMENTS: {
    value: "finance_statutory_payments",
    type: "read",
    access: "page",
    route: "/app/dashboard/finance-dashboard/finance/statutory-payments",
  },
  FINANCE_LANDLORD_PAYMENTS: {
    value: "finance_landlord_payments",
    type: "read",
    access: "page",
    route: "/app/dashboard/finance-dashboard/finance/landlord-payments",
  },

  FINANCE_BILLING_CLIENT_INVOICE: {
    value: "client_invoice",
    type: "read",
    access: "page",
    route: "/app/dashboard/finance-dashboard/billing/client-invoice",
  },
  FINANCE_BILLING_DEPARTMENT_INVOICE: {
    value: "department_invoice",
    type: "read",
    access: "page",
    route: "/app/dashboard/finance-dashboard/billing/department-invoice",
  },
  FINANCE_BILLING_PENDING_APPROVALS: {
    value: "finance_pending_approvals",
    type: "read",
    access: "page",
    route: "/app/dashboard/finance-dashboard/billing/pending-approvals",
  },
  FINANCE_BILLING_VOUCHER_HISTORY: {
    value: "finance_voucher_history",
    type: "read",
    access: "page",
    route: "/app/dashboard/finance-dashboard/billing/voucher-history",
  },

  FINANCE_DATA_ASSET_LIST: {
    value: "finance_asset_list",
    type: "read",
    access: "page",
    route: "/app/dashboard/finance-dashboard/data/asset-list",
  },
  FINANCE_DATA_MONTHLY_INVOICE_REPORTS: {
    value: "finance_monthly_invoice_reports",
    type: "read",
    access: "page",
    route: "/app/dashboard/finance-dashboard/data/monthly-invoice-reports",
  },
  FINANCE_DATA_VENDORS: {
    value: "finance_data_vendors",
    type: "read",
    access: "page",
    route: "/app/dashboard/finance-dashboard/data/vendor",
  },

  FINANCE_SETTINGS_BULK_UPLOAD: {
    value: "finance_bulk_upload",
    type: "read",
    access: "page",
    route: "/app/dashboard/finance-dashboard/settings/bulk-upload",
  },
  FINANCE_SETTINGS_SOPS: {
    value: "finance_sops",
    type: "read",
    access: "page",
    route: "/app/dashboard/finance-dashboard/settings/sops",
  },
  FINANCE_SETTINGS_POLICIES: {
    value: "finance_policies",
    type: "read",
    access: "page",
    route: "/app/dashboard/finance-dashboard/settings/policies",
  },

  // Sales Module

  SALES_TURNOVER: { value: "turnover", type: "read" },
  SALES_FINANCE: { value: "sales_finance", type: "read" },
  SALES_MIX_BAG: { value: "sales_mix_bag", type: "read" },
  SALES_DATA: { value: "sales_data", type: "read" },
  SALES_SETTINGS: { value: "sales_settings", type: "read" },

  // HR Module
  // cards
  HR_EMPLOYEE: { value: "employee", type: "read" },
  HR_COMPANY: { value: "company", type: "read" },
  HR_FINANCE: { value: "hr_finance", type: "read" },
  HR_MIX_BAG: { value: "hr_mix_bag", type: "read" },
  HR_DATA: { value: "hr_data", type: "read" },
  HR_SETTINGS: { value: "hr_settings", type: "read" },

  // edit button
  HR_EMPLOYEE_EDIT: {
    value: "hr_employee_edit",
    type: "write",
    access: "button",
  },

  // Pie charts
  HR_EMPLOYEE_GENDER_DISTRIBUTION_PIE: {
    value: "gender_distribution_pie_chart",
    type: "read",
  },
  HR_CITY_WISE_EMPLOYEES_PIE: {
    value: "city_wise_employees_pie_chart",
    type: "read",
  },

  ADMIN_ANNUAL_EXPENSES: { value: "admin_annual_expenses", type: "read" },
  ADMIN_INVENTORY: { value: "admin_inventory", type: "read" },
  ADMIN_FINANCE: { value: "admin_finance", type: "read" },
  ADMIN_MIX_BAG: { value: "admin_mix_bag", type: "read" },
  ADMIN_DATA: { value: "admin_data", type: "read" },
  ADMIN_SETTINGS: { value: "admin_settings", type: "read" },

  MAINTENANCE_ANNUAL_EXPENSES: {
    value: "maintenance_annual_expenses",
    type: "read",
  },
  MAINTENANCE_INVENTORY: { value: "maintenance_inventory", type: "read" },
  MAINTENANCE_FINANCE: { value: "maintenance_finance", type: "read" },
  MAINTENANCE_MIX_BAG: { value: "maintenance_mix_bag", type: "read" },
  MAINTENANCE_DATA: { value: "maintenance_data", type: "read" },
  MAINTENANCE_SETTINGS: { value: "maintenance_settings", type: "read" },

  IT_ANNUAL_EXPENSES: {
    value: "it_annual_expenses",

    type: "read",
    access: "page",
  },
  IT_INVENTORY: { value: "it_inventory", type: "read", access: "page" },
  IT_FINANCE: { value: "it_finance", type: "read", access: "page" },
  IT_MIX_BAG: { value: "it_mix_bag", type: "read", access: "page" },
  IT_DATA: { value: "it_data", type: "read", access: "page" },
  IT_SETTINGS: { value: "it_settings", type: "write", access: "page" },

  ACCESS_PERMISSIONS: {
    value: "access_permissions",
    access: "page",
    type: "write",
  },
};
