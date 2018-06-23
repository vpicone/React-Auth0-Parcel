# React-Auth0-Parcel
Authentication with React, Auth0 and Parcel Bundeler

## Weird unexplicable errors?
Delete .cache and restart

## Useage

### Auth0
1. Create an account at [Auth0](https://auth0.com/)
2. Create a [new application](https://manage.auth0.com/#/applications) with Auth0.
3. Under the application settings grab the domain and clientid
4. While you're there add http://localhost:3000/callback to the allowed callbacks and http://localhost:3000/ to the allowed web origins.
5. Replace the `example.env` with your data
6. Rename `example.env` to `.env`:

```
DOMAIN=*your domain here*
CLIENTID=*your client ID here*
REDIRECT=http://localhost:3000/callback
```

### Oauth integration
Follow Auth0's [instructions](https://auth0.com/docs/connections/social/) for integrating with your project

#### Google example
1. Create a google project
2. Follow Auth0's [instructions for integration](https://auth0.com/docs/connections/social/google)

### Development
1. npm install
2. npm start

### Deployment
1. Install [now.sh](https://now.sh) globally
<<<<<<< HEAD
2. Rename `example.now.json` to `now.json`
3. Replace the alias and name with whatever you want
  * Name will be the prefix for all your staging links
  * Alias will be the actual name of your site (i.e. mysite.now.sh)
4. `npm run deploy` in the root directory
||||||| merged common ancestors
2. Rename `example.now.json` to `now.json`
3. Replace the alias with whatever you want
4. `npm run deploy` in the root directory
=======
2. Replace the alias parameter under "now" in the package.json with whatever you want
3. `npm run deploy` in the root directory
>>>>>>> 3a4f5f730affdd3a0a9fcb8d458d9c27e863f1f8
