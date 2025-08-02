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

  //Tasks Module
  TASKS_OVERALL_AVERAGE_COMPLETION: {
    value: "overall_average_task_completion",
    type: "read",
  },
  TASKS_MY_TASKS: { value: "my_tasks", type: "read" },
  TASKS_DEPARTMENT_TASKS: { value: "department_tasks", type: "read" },
  TASKS_TEAM_MEMBERS: { value: "task_team_members", type: "read" },
  TASKS_REPORTS: { value: "task_reports", type: "read" },
  TASKS_SETTINGS: { value: "task_settings", type: "read" },
  // Data Cards
  TASKS_TOTAL_DEPARTMENT_TASKS: {
    value: "total_department_tasks",
    type: "read",
  },
  TASKS_TOTAL_DEPARTMENT_PENDING_TASKS: {
    value: "total_department_pending_tasks",
    type: "read",
  },
  TASKS_TOTAL_DEPARTMENT_COMPLETED_TASKS: {
    value: "total_department_completed_tasks",
    type: "read",
  },

  // Pie Charts
  TASKS_OVERALL_PENDING_VS_COMPLETED: {
    value: "overall_pending_vs_completed",
    type: "read",
  },
  TASKS_DEPARTMENT_WISE_PENDING: {
    value: "department_wise_pending",
    type: "read",
  },

  // Tables
  TASKS_HIGH_PRIORITY_DUE: {
    value: "high_priority_due",
    type: "read",
  },
  TASKS_MY_MEETINGS_TODAY: {
    value: "my_meetings_today",
    type: "read",
  },
  TASKS_RECENTLY_ADDED: {
    value: "recently_added",
    type: "read",
  },

  // Tabs
  TASKS_MY_TASK_REPORTS: {
    value: "my_task_reports",
    type: "read",
    route: "/app/tasks/reports/my-task-reports",
  },
  TASKS_ASSIGNED_TASKS_REPORTS: {
    value: "assigned_tasks_reports",
    type: "read",
    route: "/app/tasks/reports/assigned-task-reports",
  },

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

  //Meeting Graphs
  MEETINGS_AVERAGE_ROOM_UTILIZATION: {
    value: "average_room_utilization",
    type: "read",
  },
  MEETINGS_EXTERNAL_GUESTS_VISITED: {
    value: "external_guests_visited",
    type: "read",
  },
  MEETINGS_AVERAGE_OCCUPANCY: {
    value: "average_occupancy",
    type: "read",
  },
  MEETINGS_BUSY_TIME_WEEK: {
    value: "busy_time_week",
    type: "read",
  },

  // Cards
  MEETINGS_BOOK_MEETING: {
    value: "book_meeting",
    type: "read",
    access: "page",
    route: "/app/meetings/book-meeting",
  },
  MEETINGS_MANAGE_MEETINGS: {
    value: "manage_meetings",
    type: "read",
  },
  MEETINGS_CALENDAR: {
    value: "calendar",
    type: "read",
  },
  MEETINGS_REPORTS: {
    value: "reports",
    type: "read",
  },
  MEETINGS_REVIEWS: {
    value: "reviews",
    type: "read",
  },
  MEETINGS_SETTINGS: {
    value: "settings",
    type: "read",
  },

  // Pie Charts
  MEETINGS_ROOM_STATUS: {
    value: "room_status",
    type: "read",
  },
  MEETINGS_HOUSEKEEPING_STATUS: {
    value: "housekeeping_status",
    type: "read",
  },
  MEETINGS_DURATION_BREAKDOWN: {
    value: "duration_breakdown",
    type: "read",
  },

  // Tabs
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

  // Data Cards
  MEETINGS_HOURS_BOOKED: {
    value: "hours_booked",
    type: "read",
  },
  MEETINGS_UNIQUE_BOOKINGS: {
    value: "unique_bookings",
    type: "read",
  },
  MEETINGS_BIZ_NEST_BOOKINGS: {
    value: "biz_nest_bookings",
    type: "read",
  },
  MEETINGS_GUEST_BOOKINGS: {
    value: "guest_bookings",
    type: "read",
  },
  MEETINGS_AVERAGE_HOURS_BOOKED: {
    value: "average_hours_booked",
    type: "read",
  },
  MEETINGS_HOURS_CANCELLED: {
    value: "hours_cancelled",
    type: "read",
  },

  // Tables
  MEETINGS_INTERNAL_ONGOING_MEETINGS: {
    value: "internal_ongoing_meetings",
    type: "read",
  },
  MEETINGS_EXTERNAL_ONGOING_MEETINGS: {
    value: "external_ongoing_meetings",
    type: "read",
  },

  //Meeting buttons
  MEETINGS_ADD_ROOM: {
    value: "add_room",
    type: "write",
    access: "button",
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

  // 🔷 Sales Dashboard

  SALES_TURNOVER: { value: "turnover", type: "read" },
  SALES_FINANCE: { value: "sales_finance", type: "read" },
  SALES_MIX_BAG: { value: "sales_mix_bag", type: "read" },
  SALES_DATA: { value: "sales_data", type: "read" },
  SALES_SETTINGS: { value: "sales_settings", type: "read" },

  // 🔷 Sales Nav Cards
  SALES_REVENUE: { value: "sales_revenue", type: "read" },
  SALES_KEY_STATS: { value: "sales_key_stats", type: "read" },
  SALES_AVERAGE: { value: "sales_average", type: "read" },

  // 🔷 Sales graphs
  SALES_DEPARTMENT_REVENUES: {
    value: "sales_department_revenues",
    type: "read",
  },
  SALES_MONTHLY_UNIQUE_LEADS: {
    value: "sales_monthly_unique_leads",
    type: "read",
  },
  SALES_SOURCING_CHANNELS: { value: "sales_sourcing_channels", type: "read" },

  // 🔷 Sales Chart Permissions
  SALES_SECTOR_WISE_OCCUPANCY: {
    value: "sales_sector_wise_occupancy",
    type: "read",
  },
  SALES_CLIENT_WISE_OCCUPANCY: {
    value: "sales_client_wise_occupancy",
    type: "read",
  },
  SALES_CLIENT_GENDER_WISE_DATA: {
    value: "sales_client_gender_wise_data",
    type: "read",
  },
  SALES_INDIA_WISE_MEMBERS: { value: "sales_india_wise_members", type: "read" },
  SALES_CURRENT_MONTH_CLIENT_ANNIVERSARY: {
    value: "sales_current_month_client_anniversary",
    type: "read",
  },
  SALES_CLIENT_MEMBER_BIRTHDAY: {
    value: "sales_client_member_birthday",
    type: "read",
  },

  // HR Module

  //Graphs
  HR_DEPARTMENT_EXPENSE: { value: "hr_department_expense", type: "read" },
  // cards
  HR_EMPLOYEE: { value: "employee", type: "read" },
  HR_COMPANY: { value: "company", type: "read" },
  HR_FINANCE: { value: "hr_finance", type: "read" },
  HR_MIX_BAG: { value: "hr_mix_bag", type: "read" },
  HR_DATA: { value: "hr_data", type: "read" },
  HR_SETTINGS: { value: "hr_settings", type: "read" },

  //Data Card
  HR_EXPENSES: { value: "expenses", type: "read" },
  HR_AVERAGES: { value: "averages", type: "read" },

  //Tables
  HR_ANNUAL_KPA_VS_ACHIEVEMENTS: {
    value: "annual_kpa_vs_achievements",
    type: "read",
  },
  HR_ANNUAL_TASKS_VS_ACHIEVEMENTS: {
    value: "annual_tasks_vs_achievements",
    type: "read",
  },
  HR_CURRENT_MONTH_BIRTHDAY_LIST: {
    value: "current_month_birthday_list",
    type: "read",
  },
  HR_CURRENT_MONTH_HOLIDAY_LIST: {
    value: "current_month_holiday_list",
    type: "read",
  },

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

  //Employee
  HR_EMPLOYEE_LIST: {
    value: "employee_list",
    type: "read",
    route: "/app/dashboard/HR-dashboard/employee/employee-list",
  },

  HR_PAST_EMPLOYEES: {
    value: "past_employees",
    type: "read",
    route: "/app/dashboard/HR-dashboard/employees/past-employees",
  },

  HR_ATTENDANCE: {
    value: "attendance",
    type: "read",
    route: "/app/dashboard/HR-dashboard/attendance",
  },

  HR_LEAVES: {
    value: "leaves",
    type: "read",
    route: "/app/dashboard/HR-dashboard/leaves",
  },

  HR_EMPLOYEE_ONBOARDING: {
    value: "employee_onboarding",
    type: "read",
    route: "/app/dashboard/HR-dashboard/employees/employee-onboarding",
  },

  //Company
  HR_COMPANY_LOGO: {
    value: "company_logo",
    type: "read",
    // route: "/app/dashboard/HR-dashboard/company/company-logo",
  },
  HR_COMPANY_HANDBOOK: {
    value: "company_handbook",
    type: "read",
    // route: "/app/dashboard/HR-dashboard/company/company-handbook",
  },
  HR_DEPARTMENTS: {
    value: "departments",
    type: "read",
    route: "/app/dashboard/HR-dashboard/company/departments",
  },
  HR_WORK_LOCATIONS: {
    value: "work_locations",
    type: "read",
    route: "/app/dashboard/HR-dashboard/company/work-locations",
  },
  HR_HOLIDAYS: {
    value: "holidays",
    type: "read",
    route: "/app/dashboard/HR-dashboard/company/holidays",
  },
  HR_EVENTS: {
    value: "events",
    type: "read",
    route: "/app/dashboard/HR-dashboard/company/events",
  },
  HR_COMPANY_POLICIES: {
    value: "company_policies",
    type: "read",
    route: "/app/dashboard/HR-dashboard/company/policies",
  },
  HR_COMPANY_SOPS: {
    value: "company_sops",
    type: "read",
    route: "/app/dashboard/HR-dashboard/company/sops",
  },
  HR_EMPLOYEE_TYPES: {
    value: "employee_types",
    type: "read",
    route: "/app/dashboard/HR-dashboard/company/employee-type",
  },
  HR_SHIFTS: {
    value: "shifts",
    type: "read",
    route: "/app/dashboard/HR-dashboard/company/shifts",
  },
  HR_TEMPLATES: {
    value: "templates",
    type: "read",
    route: "/app/dashboard/HR-dashboard/company/templates",
  },

  //Finance
  HR_BUDGET: {
    value: "budget",
    type: "read",
    route: "/app/dashboard/HR-dashboard/finance/budget",
  },

  HR_PAYMENT_SCHEDULE: {
    value: "payment_schedule",
    type: "read",
    route: "/app/dashboard/HR-dashboard/finance/payment-schedule",
  },

  HR_VOUCHER: {
    value: "voucher",
    type: "read",
    route: "/app/dashboard/HR-dashboard/finance/voucher",
  },

  HR_PAYROLL: {
    value: "payroll",
    type: "read",
    route: "/app/dashboard/HR-dashboard/finance/payroll",
  },

  //Data
  HR_JOB_APPLICATION_LIST: {
    value: "job_application_list",
    type: "read",
    route: "/app/dashboard/HR-dashboard/data/job-application-list",
  },

  HR_PAYROLL_REPORTS: {
    value: "payroll_reports",
    type: "read",
    route: "/app/dashboard/HR-dashboard/data/payroll-reports",
  },

  HR_ASSET_LIST: {
    value: "asset_list",
    type: "read",
    route: "/app/dashboard/HR-dashboard/data/asset-list",
  },

  HR_MONTHLY_INVOICE_REPORTS: {
    value: "monthly_invoice_reports",
    type: "read",
    route: "/app/dashboard/HR-dashboard/data/monthly-invoice-reports",
  },

  HR_VENDOR: {
    value: "vendor",
    type: "read",
    route: "/app/dashboard/HR-dashboard/data/vendor",
  },

  // 🟡 Admin Dashboard
  ADMIN_ANNUAL_EXPENSES: { value: "admin_annual_expenses", type: "read" },
  ADMIN_INVENTORY: { value: "admin_inventory", type: "read" },
  ADMIN_FINANCE: { value: "admin_finance", type: "read" },
  ADMIN_MIX_BAG: { value: "admin_mix_bag", type: "read" },
  ADMIN_DATA: { value: "admin_data", type: "read" },
  ADMIN_SETTINGS: { value: "admin_settings", type: "read" },
  // 🟡 Admin Graphs
  ADMIN_DEPARTMENT_EXPENSE: { value: "admin_department_expense", type: "read" },
  // 🟡 Admin Data Cards
  ADMIN_TOTAL_ADMIN_OFFICES: {
    value: "admin_total_admin_offices",
    type: "read",
  },
  ADMIN_MONTHLY_DUE_TASKS: { value: "admin_monthly_due_tasks", type: "read" },
  ADMIN_MONTHLY_EXPENSE: { value: "admin_monthly_expense", type: "read" },
  ADMIN_TOP_EXECUTIVE: { value: "admin_top_executive", type: "read" },
  ADMIN_EXPENSE_PER_SQFT: { value: "admin_expense_per_sqft", type: "read" },
  ADMIN_ELECTRICITY_EXPENSE_PER_SQFT: {
    value: "admin_electricity_expense_per_sqft",
    type: "read",
  },
  // 🟡 Admin Tables
  ADMIN_WEEKLY_EXECUTIVE_SHIFT_TIMING: {
    value: "admin_weekly_executive_shift_timing",
    type: "read",
  },
  ADMIN_UPCOMING_EVENTS_LIST: {
    value: "admin_upcoming_events_list",
    type: "read",
  },
  ADMIN_UPCOMING_CLIENT_MEMBER_BIRTHDAYS: {
    value: "admin_upcoming_client_member_birthdays",
    type: "read",
  },
  ADMIN_UPCOMING_CLIENT_ANNIVERSARIES: {
    value: "admin_upcoming_client_anniversaries",
    type: "read",
  },
  ADMIN_NEWLY_JOINED_HOUSE_KEEPING_MEMBERS: {
    value: "admin_newly_joined_house_keeping_members",
    type: "read",
  },
  // 🟡 Admin Pie Charts
  ADMIN_UNIT_WISE_DUE_TASKS: {
    value: "admin_unit_wise_due_tasks",
    type: "read",
  },
  ADMIN_EXECUTIVE_WISE_DUE_TASKS: {
    value: "admin_executive_wise_due_tasks",
    type: "read",
  },
  ADMIN_TOTAL_DESKS_COMPANY_WISE: {
    value: "admin_total_desks_company_wise",
    type: "read",
  },
  ADMIN_BIOMETRICS_GENDER_DATA: {
    value: "admin_biometrics_gender_data",
    type: "read",
  },

  // 🟢 Maintenance Dashboard

  // 🟢 Maintenance Graphs
  MAINTENANCE_DEPARTMENT_EXPENSES: {
    value: "maintenance_department_expenses",
    type: "read",
  },

  // 🟢 Maintenance Nav Cards
  MAINTENANCE_ANNUAL_EXPENSES: {
    value: "maintenance_annual_expenses",
    type: "read",
  },
  MAINTENANCE_INVENTORY: { value: "maintenance_inventory", type: "read" },
  MAINTENANCE_FINANCE: { value: "maintenance_finance", type: "read" },
  MAINTENANCE_MIX_BAG: { value: "maintenance_mix_bag", type: "read" },
  MAINTENANCE_DATA: { value: "maintenance_data", type: "read" },
  MAINTENANCE_SETTINGS: { value: "maintenance_settings", type: "read" },
  // 🟢 Maintenance Data Cards
  MAINTENANCE_OFFICES_UNDER_MANAGEMENT: {
    value: "maintenance_offices_under_management",
    type: "read",
  },
  MAINTENANCE_MONTHLY_DUE_TASKS: {
    value: "maintenance_monthly_due_tasks",
    type: "read",
  },
  MAINTENANCE_MONTHLY_EXPENSE: {
    value: "maintenance_monthly_expense",
    type: "read",
  },
  MAINTENANCE_EXPENSE_PER_SQFT: {
    value: "maintenance_expense_per_sqft",
    type: "read",
  },
  MAINTENANCE_ASSETS_UNDER_MANAGEMENT: {
    value: "maintenance_assets_under_management",
    type: "read",
  },
  MAINTENANCE_MONTHLY_KPA: {
    value: "maintenance_monthly_kpa",
    type: "read",
  },

  //Tables
  MAINTENANCE_TOP_HIGH_PRIORITY_TASKS: {
    value: "maintenance_top_high_priority_tasks",
    type: "read",
  },
  MAINTENANCE_WEEKLY_EXECUTIVE_SHIFT_TIMING: {
    value: "maintenance_weekly_executive_shift_timing",
    type: "read",
  },

  //Pie Charts
  MAINTENANCE_CATEGORY_WISE_MAINTENANCE: {
    value: "maintenance_category_wise_maintenance",
    type: "read",
  },
  MAINTENANCE_DUE_MAINTENANCE: {
    value: "maintenance_due_maintenance",
    type: "read",
  },
  MAINTENANCE_UNIT_WISE_MAINTENANCE: {
    value: "maintenance_unit_wise_maintenance",
    type: "read",
  },
  MAINTENANCE_EXECUTION_CHANNEL: {
    value: "maintenance_execution_channel",
    type: "read",
  },
  MAINTENANCE_AVERAGE_MONTHLY_DUE: {
    value: "maintenance_average_monthly_due",
    type: "read",
  },
  MAINTENANCE_AVERAGE_YEARLY_DUE: {
    value: "maintenance_average_yearly_due",
    type: "read",
  },

  // 🔵 IT Dashboard

  // 🔵 IT Graphs
  IT_DEPARTMENT_EXPENSES: {
    value: "it_department_expenses",

    type: "read",
    access: "page",
  },

  // 🔵 IT Nav Cards
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

  // 🔵 IT Data Cards
  IT_OFFICES_UNDER_MANAGEMENT: {
    value: "offices_under_management",
    type: "read",
  },
  IT_DUE_TASKS_THIS_MONTH: { value: "due_tasks_this_month", type: "read" },
  IT_INTERNET_EXPENSE_PER_SQFT: {
    value: "internet_expense_per_sqft",
    type: "read",
  },
  IT_EXPENSE_PER_SQFT: { value: "expense_per_sqft", type: "read" },
  IT_MONTHLY_EXPENSE: { value: "monthly_expense", type: "read" },
  IT_MONTHLY_KPA: { value: "monthly_kpa", type: "read" },

  // 🔵 IT Tables
  IT_TOP_10_HIGH_PRIORITY_DUE_TASKS: {
    value: "top_10_high_priority_due_tasks",
    type: "read",
  },
  IT_WEEKLY_EXECUTIVE_SHIFT_TIMING: {
    value: "weekly_executive_shift_timing",
    type: "read",
  },

  // 🔵 IT Pie Charts

  IT_UNIT_WISE_DUE_TASKS: { value: "unit_wise_due_tasks", type: "read" },
  IT_EXECUTIVE_WISE_DUE_TASKS: {
    value: "executive_wise_due_tasks",
    type: "read",
  },
  IT_UNIT_WISE_IT_EXPENSES: { value: "unit_wise_it_expenses", type: "read" },
  IT_BIOMETRICS_GENDER_DATA: { value: "biometrics_gender_data", type: "read" },
  IT_CLIENT_WISE_COMPLAINTS: { value: "client_wise_complaints", type: "read" },
  IT_TYPE_OF_IT_COMPLAINTS: { value: "type_of_it_complaints", type: "read" },

  ACCESS_PERMISSIONS: {
    value: "access_permissions",
    access: "page",
    type: "write",
  },
};
