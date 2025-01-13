# Social Behavior Change Repository (SBC)


A Vite + React project for The United Republic of Tanzania, Ministry of Health (MoH) Social Behavior Change Repository.

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

Make sure you have Node.js and Yarn installed on your machine.

- Node.js: [Download here](https://nodejs.org/)
- Yarn: [Installation instructions](https://classic.yarnpkg.com/en/docs/install/)

### Installing

1. Clone the repository:

```bash
git clone https://github.com/quanalytics-inc/comms-web-app.git
```

2. Change into the project directory::

```bash
cd your-project
```

3. Install dependencies:
```bash
yarn install
```

## Running the Development Server
Start the development server:
```bash
yarn dev
```
Visit http://localhost:5173 in your browser to see the app.

## Building for Production
To build the project for production, run:
```bash
yarn build
```
The optimized build will be available in the dist directory.

## Built With
Vite - Next Generation Frontend Tooling

React - A JavaScript library for building user interfaces

## The project structure
This project structure organizes a React application into different directories based on their functionality. 

```bash
.
├── App.tsx
├── assets
│   ├── comms
│   │   └── coat_of_arms.svg
│   ├── Gradient-01.jpg
│   ├── Gradient.svg
│   ├── img
│   │   ├── Drug Abuse.svg
│   │   └── ...
│   ├── vaccine.png
│   └── xlsx
│       └── chart_data_format_sample_file.xlsx
├── common
│   ├── components
│   │   ├── app_link.tsx
│   │   ├── color_scheme_toggle.tsx
│   │   └── language_menu.tsx
│   ├── layouts
│   │   ├── auth_layout.tsx
│   │   ├── dasboard_layout.tsx
│   │   └── public_layout.tsx
│   ├── navs
│   │   ├── auth
│   │   │   └── auth_header.tsx
│   │   ├── dashboard
│   │   │   ├── footer.tsx
│   │   │   ├── header
│   │   │   │   ├── header_nav.tsx
│   │   │   │   └── ui
│   │   │   │       ├── account_menu.tsx
│   │   │   │       ├── language_picker.tsx
│   │   │   │       ├── notification_menu.tsx
│   │   │   │       └── notification_menu_wiget.tsx
│   │   │   └── sidebar
│   │   │       ├── sidenav.tsx
│   │   │       └── ui
│   │   │           ├── nav_link_group.tsx
│   │   │           └── nav_link.tsx
│   │   └── public
│   │       └── public_header.tsx
│   └── theme.ts
├── config
│   └── env.ts
├── features
│   ├── auth
│   │   ├── auth_permission.tsx
│   │   └── login
│   │       ├── hooks.ts
│   │       ├── services.ts
│   │       ├── stores.ts
│   │       ├── types.ts
│   │       └── ui
│   │           ├── forgot_password_form.tsx
│   │           ├── login_form.tsx
│   │           └── signup_form.tsx
│   ├── dashboard
│   │   ├── account
│   │   │   ├── hooks.ts
│   │   │   ├── services.ts
│   │   │   ├── stores.ts
│   │   │   ├── types.ts
│   │   │   └── ui
│   │   │       ├── change_password_modal.tsx
│   │   │       └── user_info.tsx
│   │   ├── material
│   │   │   ├── components
│   │   │   │   ├── add_checklist_form.tsx
│   │   │   │   ├── add_material_form.tsx
│   │   │   │   ├── checklist_history_modal.tsx
│   │   │   │   ├── cover_image_preview_modal.tsx
│   │   │   │   ├── delete_file_modal.tsx
│   │   │   │   ├── material_history_modal.tsx
│   │   │   │   ├── material_preview_modal.tsx
│   │   │   │   ├── publish_modal.tsx
│   │   │   │   └── status_bage.tsx
│   │   │   ├── hooks
│   │   │   │   ├── hooks.ts
│   │   │   │   └── upload_hooks.ts
│   │   │   ├── services.ts
│   │   │   ├── stores.ts
│   │   │   ├── types.ts
│   │   │   └── ui
│   │   │       ├── edit_material_form.tsx
│   │   │       ├── material_filter_form.tsx
│   │   │       ├── material_search_form.tsx
│   │   │       ├── material_table.tsx
│   │   │       ├── material_upload_form.tsx
│   │   │       └── resource_details.tsx
│   │   ├── ... other features
│   │   └── utils.ts
│   └── public
│       ├── foorter
│       │   ├── footer_heading.tsx
│       │   ├── footer_text.tsx
│       │   └── footer.tsx
│       ├── repository
│       │   ├── components
│       │   │   ├── material_card_skeleton.tsx
│       │   │   └── material_card.tsx
│       │   ├── services.ts
│       │   ├── stores.ts
│       │   ├── types.ts
│       │   └── ui
│       │       ├── all_events.tsx
│       │       ├── all_materials.tsx
│       │       ├── calendar_section.tsx
│       │       ├── event_section.tsx
│       │       ├── material_details.tsx
│       │       ├── material_filter_form.tsx
│       │       ├── material_search_form.tsx
│       │       ├── public_material_upload_form.tsx
│       │       └── trending_materials.tsx
│       └── subscriber
│           ├── hooks.ts
│           ├── services.ts
│           ├── types.ts
│           └── ui
│               └── subscriber_form.tsx
├── hooks
│   └── tostify_hook.ts
├── i18n
│   ├── i18n.ts
│   └── locales
│       ├── en
│       │   └── translations.json
│       └── sw
│           └── translations.json
├── index.css
├── main.tsx
├── pages
│   ├── auth
│   │   └── login.tsx
│   ├── dashboard
│   │   ├── account.tsx
│   │   ├── audit_trail.tsx
│   │   ├── clients.tsx
│   │   ├── components
│   │   │   └── page_header.tsx
│   │   ├── configurations
│   │   │   ├── behaviours.tsx
│   │   │   └── ...
│   │   ├── content_review
│   │   │   ├── content_review_details.tsx
│   │   │   └── content_review.tsx
│   │   ├── dashboard.tsx
│   │   ├── manage_user.tsx
│   │   ├── material
│   │   │   ├── edit_material.tsx
│   │   │   ├── material_details.tsx
│   │   │   ├── material.tsx
│   │   │   └── material_upload.tsx
│   │   ├── notifications.tsx
│   │   ├── roles.tsx
│   │   ├── social_listening.tsx
│   │   └── subscribers.tsx
│   ├── error.tsx
│   ├── not_found.tsx
│   └── public
│       ├── components
│       │   ├── image_carousel.tsx
│       │   └── image_vector.tsx
│       ├── help_faq.tsx
│       ├── home.tsx
│       ├── material_details_page.tsx
│       └── public_material_upload_page.tsx
├── routes
│   ├── auth_role.tsx
│   └── Router.tsx
└── ...

```
Here's a summary of the directories and their contents:

- **src:** This is the main directory containing all source code files.
   - **App.tsx:** The main component of the application.
   - **assets:** Directory for storing static assets like images, SVGs, and other files.
   - **common:** Contains reusable components, layouts, and theme configurations.
   - **components:** Reusable UI components like buttons, inputs, etc.
   - **layouts:** Layout components for different pages or sections of the application.
   - **navs:** Navigation components like headers, footers, and sidebars.
   - **theme.ts:** Theme configuration file.
- **config:** Configuration files for environment variables, API endpoints, etc.
- **features:** Contains modules or features of the application.
   - **<feature-name>:** Directories for individual features.
      - **hooks.ts:** Custom hooks specific to the feature.
      - **services.ts**: Service functions for interacting with APIs or handling business logic.
      - **stores.ts:** Store files for managing state using libraries like Redux.
      - **types.ts:** Type definitions related to the feature.
      - **ui:** UI components specific to the feature.
- **hooks:** Custom hooks that can be reused across features.
- **i18n:** Internationalization configuration files.
- **pages:** React components representing different pages of the application.
- **routes:** Route components for defining application routes and routing logic.


## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
