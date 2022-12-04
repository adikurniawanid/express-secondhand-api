# Second Hand

Platform ini merupakan tempat jual-beli barang secara online, khususnya barang bekas. Platform ini membuka dan menyediakan berbagai jenis
kategori kebutuhan. User yang mendaftarkan diri pada aplikasi ini dapat berperan sebagai seller dan buyer dengan menggunakan 1 (satu) akun
yang sama. Platform ini akan mempertemukan seller dan buyer untuk dapat melakukan negosiasi barang dan melakukan transaksi langsung di luar
platform.

[Demo Website](https://react-secondhand-web.vercel.app/)

## Run Locally

Clone the project

```bash
  git clone https://github.com/adikurniawanid/express-secondhand-api.git
```

Go to the project directory

```bash
  cd express-secondhand-api
```

Install dependencies

```bash
  npm install
```

Create the database

```bash
  sequelize db:create
```

Migration the database

```bash
  sequelize db:migrate
```

Start the server

```bash
  npm start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`DEV_DB_USERNAME`
`DEV_DB_PASSWORD`
`DEV_DB_NAME`
`DEV_DB_HOST`

`TEST_DB_USERNAME`
`TEST_DB_PASSWORD`
`TEST_DB_NAME`
`TEST_DB_HOST`

`DATABASE_URL`

`BCRYPT_SALT`

`JWT_SECRET_KEY`
`JWT_ACCESS_EXPIRATION_MINUTES`
`JWT_REFRESH_EXPIRATION_DAYS`
`JWT_RESET_PASSWORD_EXPIRATION_MINUTES`
`JWT_VERIFY_EMAIL_EXPIRATION_MINUTES`

`CLOUDINARY_CLOUD_NAME`
`CLOUDINARY_API_KEY`
`CLOUDINARY_API_SECRET`

## Documentation

[![Run in Postman](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/13454122/2s83zmKgoR)

## Tech Stack

**Server:** Node, Express, PostgreSQL
