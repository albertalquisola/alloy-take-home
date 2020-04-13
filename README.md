# alloy-take-home

## Dependencies if running the app for the first time

1. npm install
2. create a local .env file to configure necessary env variables

Run the app locally via `npm run dev` or with docker-compose via `docker-compose up -d`

## Tradeoffs / Things to Improve

1. logging - right now it just logs to the console but in reality should use something like sumologic
2. error handling - would create better patterns around error handling and use a service like sentry to track/triage errors
3. fetching & storing access tokens - As the system is designed now, it would not scale. We would need mechanisms to fetch and/or persist users' access tokens so we can act on their behalf
4. making things configurable - right now, my slack channel is hardcoded to #alloy-test.
5. spans/tracing - add these so we can do performance monitoring
6. analytics - add something like mixpanel which will also log events such as when we get a new email from typeform
7. improve development environment - Things like nodemon would go a long way
8. configuring different development environments - right now, this is a prototype and only meant for development use
9. properly set the node path to use `/src` as the root dir. (Personal preference of mine to use absolute paths vs. relative paths)
