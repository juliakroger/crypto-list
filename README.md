# Crypto List
This project is currently running at https://crypto-list.netlify.app/

## Available Scripts
To run the project localy you need to run:
### `npm i`

To setup and download dependencies.
### `npm run start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## About the code
The project is using [coingecko](https://www.coingecko.com/api/documentations/v3) API to get the list of crypto cards.

### Changing constants
The default number of items per page is 25, if you want to load more data per page, just add the value to the variable `ITEMS_PER_PAGE` at the constants file.

The project refresh all data every 60 seconds. If you want to change the time that the data is refresh just set the variable `REFRESH_INTERVAL_SECONDS` with the desired time.
