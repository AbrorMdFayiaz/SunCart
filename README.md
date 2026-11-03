# ☀️ SunCart – Summer Essentials Store

A modern and responsive summer eCommerce platform where users can explore and purchase summer essentials, including sunglasses, outfits, skincare products, and beach accessories.

SunCart provides a smooth shopping experience with product browsing, detailed product information, and secure authentication powered by Better Auth.

## 🌐 Live Website

**Live URL:** [https://sun-cart-omega.vercel.app]

**GitHub Repository:** [https://github.com/AbrorMdFayiaz/SunCart]

---

## 🎯 Project Purpose

The purpose of SunCart is to make shopping for summer essentials simple and convenient. Users can explore seasonal products, discover popular brands, view product details, and manage their profiles through an easy-to-use interface.

## ✨ Key Features

- **Responsive Design:** Optimized for mobile, tablet, and desktop devices.
- **Modern Homepage:** Includes a summer-themed hero section, promotional offers, and featured products.
- **Product Collection:** Browse summer essentials with product images, prices, ratings, and other information.
- **Product Details:** View detailed product information. Authentication is required to access protected product details.
- **User Authentication:** Register and log in using email and password with Better Auth.
- **Google Authentication:** Sign in or register using a Google account.
- **User Profile:** View personal information, including name, email, and profile image.
- **Profile Update:** Update profile information, including name and profile image.
- **Summer Care Tips:** Explore useful tips for staying comfortable and protected during summer.
- **Top Brands:** Discover selected brands featured in the store.
- **Persistent Layout:** Shared navigation bar and footer across the application.

## 🛠️ Technologies Used

- **Next.js** – React framework and application routing.
- **React** – Building interactive user interfaces.
- **Tailwind CSS** – Utility-first styling.
- **HeroUI , DaisyUI** – UI components.
- **Better Auth** – Authentication and session management.
- **MongoDB** – Database for authentication-related user data.

## 📦 NPM Packages

The project uses the following packages:

- `next`
- `react`
- `react-dom`
- `better-auth`
- `@heroui/react`
- `react-hook-form`
- `react-toastify`
- `react-icons`
- `tailwindcss`
- `mongodb`

*Note: Make sure this list matches the dependencies actually installed in your project's `package.json`. Add or remove packages as needed.*

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project Directory

```bash
cd your-project-folder
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the root directory of the project.

Add the environment variables required by your application:

```env
BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=http://localhost:3000

MONGODB_URI=your_mongodb_connection_string

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

Replace the example values with your actual configuration. The variable names must match the ones used in your application.

**Important:** Never commit your `.env.local` file or expose secret keys in your source code.

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 📁 Product Data

SunCart uses static JSON data to manage its summer product collection.

Each product contains information such as:

- Product ID
- Product name
- Brand
- Price
- Rating
- Stock availability
- Description
- Product image
- Category

## 🔐 Authentication

SunCart uses Better Auth to provide authentication functionality.

Users can:

- Create an account using their name, email, profile image URL, and password.
- Log in using email and password.
- Authenticate using Google.
- Access protected product details after logging in.
- View and update their profile information.

## 🚀 Deployment

The application is deployed using **Vercel**.

For deployment, configure the required environment variables in your hosting platform and make sure the authentication and Google OAuth callback URLs are configured for your deployed domain.

---

**Made with ☀️ for a better summer shopping experience!**