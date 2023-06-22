# PrivatBank Exchange Rate Management SPA

This is a Single Page Application (SPA) designed to provide a user-friendly interface for managing exchange rates. The application allows users to perform currency conversions and view current exchange rates against a base currency. It is built using React, Redux for state management, and Webpack for module bundling.

## Features

The PrivatBank Exchange Rate Management SPA consists of the following features:

1. **Currency Converter**: This page provides a text box where users can enter a currency conversion query, such as "15 USD in UAH." The application will process the query and display the corresponding result.

2. **Exchange Rates**: On this page, users can view the latest exchange rates against the base currency. The base currency is set by default (e.g., ruble), and the user can see the exchange rate values for different currencies, such as 1 USD = 26.80 UAH and 1 EUR = 31.20 UAH.

3. **Navigation Bar**: The application includes a navigation bar that allows users to switch between the Currency Converter and Exchange Rates pages. The navigation bar is conveniently placed to ensure easy access and seamless navigation throughout the application.

4. **Manual Currency Selection**: Upon the first opening of the application, users will be prompted to choose an exchange rate manually. Additionally, users have the option to change their current exchange rate within the application.

## Technical Implementation

The PrivatBank Exchange Rate Management SPA has been developed using the following technical stack and implementation guidelines:

- **React**: The application is built using React, a popular JavaScript library for building user interfaces. React allows for efficient rendering and updating of components, providing a responsive user experience.

- **Lazy Loading**: To enhance performance, lazy loading has been implemented. This ensures that each page (Currency Converter and Exchange Rates) is loaded separately based on the user's interaction, reducing the initial loading time and improving overall performance.

- **State Management (Redux)**: The application incorporates state management using either Redux. This allows for centralized and predictable handling of the application's state, including the currently chosen exchange rate.

- **Webpack**: Webpack is utilized as the module bundler for the application. It compiles JavaScript (or TypeScript) modules, optimizes the build process, and enables code splitting. Code splitting enhances performance by loading only the required modules for each page, reducing the initial bundle size and improving loading times.

## Getting Started

To run the PrivatBank Exchange Rate Management SPA locally, follow these steps:

1. Ensure that you have Node.js and npm (Node Package Manager) installed on your machine.

2. Clone the repository:

   ```shell
   git clone https://github.com/your-repo-url.git
   ```

3. Install the project dependencies:

   ```shell
   cd privatbank-exchange-rate-spa
   npm install
   ```

4. Start the development server:

   ```shell
   npm start
   ```

   This command will compile the application and start a local development server. The application will be accessible at `http://localhost:3000`.

## Conclusion

The PrivatBank Exchange Rate Management SPA provides users with a convenient and efficient way to manage exchange rates. With features such as the Currency Converter, Exchange Rates page, navigation bar, and automatic/manual currency selection, users can easily perform conversions and stay updated on the latest exchange rates. The application's use of React, lazy loading, and state management ensures a smooth and responsive user experience.
