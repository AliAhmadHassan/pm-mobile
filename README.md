# **PM Mobile (Sabesp)**

This project is a mission-critical Innowera-powered mobile suite that I architected and built while working for Sabesp’s Maintenance team. It lets field-based supply managers interact with SAP ECC from both Android and iOS devices through Innowera “process files” that act as JavaScript-native bridges into SAP BAPIs/RFMs.

## What it solves

- **Field SAP access** — replaces desktop-only IW32/IW33/ORDER apps with a responsive, touch-first experience so field crews can view and update maintenance orders, confirmations, components, and documents directly from mobile.
- **Managed supply flows** — provides focused apps (order details, confirmations, matchcodes, document handling, etc.) that guide supply managers through SAP master data and transactions, reducing SAP training and data entry errors.
- **Robust SAP integration** — every screen is backed by Innowera configuration files that call SAP BAPIs/RFMs, handle return tables, and map SAP fields to HTML controls for both push (save/send) and pull (read) use cases.

## Architecture at a glance

1. **Innowera process engine** – Central Innowera runtime renders HTML/CSS/JS “process files” (e.g., `PMMOBILESPRINT.html`) within both Android and iOS runners, injecting the right theme, scripts, and SAP mapping metadata before the WebView spins up.
2. **SAP BAPI layer** – XML configuration files in `MobileRunner/{Android,iOS}/Configuration/` declare each transaction (for example, `ACESSO_TRANSACAO.xml`), including ProcessFile metadata, field mappings, required tables, and cache settings for offline-friendly execution.
3. **Mobile UI shell** – Shared HTML templates (like `ORDER_GET_DETAIL.html`) wrap SAP field groups with Bootstrap/jQuery UI components, floating action buttons, mobile-friendly navigation, and staged data panels that match Sabesp’s maintenance process.
4. **Web runner toolbox** – A parallel web portal (under `WebRunner/`) reuses the same process definitions for supervisors who need browser-based access, sharing CSS/JS assets from the `BaseTemplate` and Innowera theme library.

## Technologies & methodologies

- **Innowera / Winshuttle Mobile** – used as the engine to define process files, translations, icons, and runtime behavior for Android/iOS WebViews and the administrative web runner.
- **SAP BAPIs & RFCs** – invoked throughout (e.g., maintenance order, notification, document handling, matchcode lookups, cost center queries), often orchestrated with commit/error handling screens and return tables.
- **Front-end stack** – HTML5/CSS3 (custom themes, `ProcessFile_New.css`, Bootstrap 4), jQuery 1.9, Knockout-style binding from Innowera’s JavaScript managers, and mobile-responsive layout patterns for floating action menus and card panels.
- **Design & UX** – separated header/body panels, accordion-style SAP return tables, and floating “Send to SAP / Save / Review” actions to keep commonly used commands within thumb reach.
- **Deployment discipline** – each release consisted of versioned process files and metadata (versioning, MD5 hashes) so mobile clients could detect updates, allowing the same package to support Android and iOS runners and a back-office web runner.

## Key modules and workflows

- **Order management** – screens like `ORDER_GET_DETAIL` request order headers, operations, and confirmations, enabling SAP lookup through `GET_ORDER_OPERATION`, `MODIFY_ORDER`, and `CONFIRM_ORDER_CANCEL` configurations. Floating action buttons call the same process file with different actions (send/save/review).
- **Item & component catalogs** – matchcode screens expose SAP lookup tables (`ZPMF_MATCHCODE_*`) so managers can search for equipment, cost centers, activities, causes, and measurement documents from the same UX layer.
- **Document handling** – innowera files such as `BAPI_DOCUMENT_CREATE2_V1_1_ORDEM` take attachments from the mobile camera and push them to SAP’s document service, matching the Sabesp asset management process.
- **Access control & shortcuts** – startup screens respect Innowera logon shortcuts and configurable access scripts (`ACESSO_TRANSACAO`), ensuring that only authorized SAP functions are exposed to each role.

## Personal contribution highlights

- Led the End-to-End Innowera build: configured process files, icons, and metadata for dozens of SAP transactions and worked with Sabesp’s SAP teams to scope the RFC parameter mapping.
- Designed and implemented the reusable mobile template/UX shell (floating menus, responsive panels, themed styles) so every process file felt like part of the same app.
- Instrumented safeguard handling (offline caching, cached boolean flags, MD5 hashes) so mobile clients could detect updates and keep working when radio coverage dropped.
- Coordinated Android, iOS, and WebRunner assets to reuse the same SAP integrations, minimizing duplicate SAP connections while still tailoring HTML/CSS per platform.

## Why recruiters should pay attention

- Delivered a **mission-critical SAP mobility solution** for Sabesp’s maintenance supply managers that replaced several cumbersome desktop flows with handheld automation.
- Demonstrated **cross-platform craftsmanship** (Android + iOS + web) while working within the constraints of Innowera’s process-file-first paradigm.
- Showcased **SAP integration expertise**—doing field-to-core orchestration, BAPI schema design, and error handling across dozens of configuration files.
- Practiced **design discipline** for mobile UX, floating/tooling buttons, and responsive layouts that keep field workers focused on outcomes rather than transaction headaches.

## What's next

1. Document the process file lifecycle and publish a change log so future maintainers understand how new SAP transactions get added.
2. Consider extracting reusable JSON metadata (field maps, action sets) so a CI pipeline could auto-generate the HTML shell per platform.

