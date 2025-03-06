# **Spiritual Heaven Website** 🌿🏨

## **Overview**

Spiritual Heaven is a Next.js-based hotel reservation website with an admin panel for managing reservations and cabins. The website offers functionalities such as Google authentication, cabin listings with filtering, and a reservation system with an intuitive user experience.

## **Features**

### **User Side**

- **Google Authentication** – Users can sign in with their Google account.
- **Cabins Page** – Displays a list of available cabins, which can be added from the admin panel.
- **Filtering** – Users can filter cabins based on the number of guests.
- **Cabin Details** – Each cabin has a dedicated page showing detailed information.
- **Reservation System** –
  - Users who are signed in via Google can book a cabin.
  - **Date Picker** – Reservations are managed using `react-day-picker`, ensuring unavailable dates are disabled.
- **Guest Page** –
  - If not registered, users are prompted to sign up with Google.
  - Once logged in, users have access to a side navigation menu with links to Home, Reservations, and Profile.
- **Reservations Page** –
  - Displays past and upcoming reservations.
  - Users can **edit** or **delete** only upcoming reservations.
  - Editing redirects users to a dedicated edit page, where data is revalidated via Next.js actions.
  - Deletions use an **optimistic update** to instantly update the UI while the request is being processed.
- **Guest Profile** –
  - Displays the user's full name and email (fetched from Google authentication and non-editable).
  - Users can edit their **nationality** and **national ID number**.
  - When the nationality is changed, the respective flag is displayed using the [REST Countries API](https://restcountries.com).

### **Admin Side**

- Admins can **add, edit, and delete cabins**.
- A separate **admin panel** (built with React.js) is used to manage bookings.

## **Tech Stack**

- **Frontend:** Next.js, React, Tailwind CSS
- **Authentication:** Firebase (Google Auth)
- **Database:** Firebase Firestore
- **API:** REST Countries API
- **State Management:** React Context & React Query

## **Live Demo**

[Spiritual Heaven Website](https://spiritual-heaven.netlify.app/login)

## **Live Demo**

[admin panel](https://spiritual-heaven.netlify.app/)

## **Getting Started**

To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/spiritual-heaven.git
   cd spiritual-heaven
   ```
