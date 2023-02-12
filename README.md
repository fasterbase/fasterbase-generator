# Fasterbase-cli

`Fasterbase` is a IoT platfrom to help to the IoT companies to make their device faster, more reliable and more secure.

# Usage

## Generate a new project
To generate a new cloud function, run the following command

```
npx fasterbase-cli API-KEY
```

You are able to get the `API-KEY` from your main page in Fasterbase. `Profile->Setting->API key`.

## Modify

Before publishing the code, you should modify the `meta.json`
- name: Name of the clould function (should be unique)
- arguments
  - GET: Provide your queryString as an array. 
  - POST: Provide your body as an array. 
- response: Keys of the response objects.

### Note:
- Response can not be a nested object.
- Type of the arugments, can be any type

## Publish
To publish your Custom function, run the following code in your terminal:

```
./publish.sh
```

In less than 48 hours, your code will be reviewed by the Fasterbase team and will be published.