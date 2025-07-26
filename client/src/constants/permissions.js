export const PERMISSIONS = {
  ASSETS_VIEW_ASSETS: { value: "view_assets", type: "read" },
  ASSETS_MANAGE_ASSETS: { value: "manage_assets", type: "read" },
  ASSETS_ASSIGNED_UNASSIGNED: { value: "assigned_unassigned", type: "read" },
  ASSETS_ASSIGNED_ASSETS: { value: "assigned_assets", type: "read" },

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

  MEETINGS_MEETINGS_INTERNAL : {
    value: "manage_meetings_internal",
    type : 'read',
    access : "page",
    route : "/app/meetings/manage-meetings/internal-meetings"
  },
  MEETINGS_MEETINGS_EXTERNAL : {
    value: "manage_meetings_external",
    type : 'read',
    access : "page",
    route : "/app/meetings/manage-meetings/external-meetings"
  },

  TASKS_MY_TASKS: {
    value: "my_tasks",
    type: "read",
    route: "/app/tasks/my-tasks",
  },
  TASKS_DEPARTMENT_TASKS: {
    value: "department_tasks",
    type: "read",
    route: "/app/tasks/department-tasks",
  },
  TASKS_TEAM_MEMBERS: {
    value: "task_team_members",
    type: "read",
    route: "/app/tasks/team-members",
  },
  TASKS_REPORTS: {
    value: "task_reports",
    type: "read",
    route: "/app/tasks/reports",
  },
  TASKS_SETTINGS: {
    value: "task_settings",
    type: "read",
    route: "/app/tasks/settings",
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

  // Meetings Module
  MEETINGS_BOOK_MEETING: { value: "book_meeting", type: "read" },
  MEETINGS_MANAGE_MEETINGS: { value: "manage_meetings", type: "read" },
  MEETINGS_CALENDAR: { value: "meeting_calendar", type: "read" },
  MEETINGS_REPORTS: { value: "meeting_reports", type: "read" },
  MEETINGS_REVIEWS: { value: "meeting_reviews", type: "read" },
  MEETINGS_SETTINGS: { value: "meeting_settings", type: "read" },

  FINANCE_CASHFLOW: { value: "cashflow", type: "read" },
  FINANCE_FINANCE: { value: "finance_finance", type: "read" },
  FINANCE_BILLING: { value: "billing", type: "read" },
  FINANCE_MIX_BAG: { value: "finance_mix_bag", type: "read" },
  FINANCE_DATA: { value: "finance_data", type: "read" },
  FINANCE_SETTINGS: { value: "finance_settings", type: "read" },
  FINANCE_PAYOUTS: { value: "finance_payouts", type: "read" },
  FINANCE_CUSTOMER_COLLECTIONS: {
    value: "finance_customer_collections",
    type: "read",
  },

  SALES_TURNOVER: { value: "turnover", type: "read" },
  SALES_FINANCE: { value: "sales_finance", type: "read" },
  SALES_MIX_BAG: { value: "sales_mix_bag", type: "read" },
  SALES_DATA: { value: "sales_data", type: "read" },
  SALES_SETTINGS: { value: "sales_settings", type: "read" },

  HR_EMPLOYEE: { value: "employee", type: "read" },
  HR_COMPANY: { value: "company", type: "read" },
  HR_FINANCE: { value: "hr_finance", type: "read" },
  HR_MIX_BAG: { value: "hr_mix_bag", type: "read" },
  HR_DATA: { value: "hr_data", type: "read" },
  HR_SETTINGS: { value: "hr_settings", type: "read" },

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
  MAINTENANCE_DATA: {
    value: "maintenance_data",
    type: "read",
    route: "/app/dashboard/maintenance-dashboard/data",
  },
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
