# Introduction

The [CBL](https://cbl.tools) API allows developers and community managers to spot known bad actors by including a global blacklist.

## Using the API

::: warning
This API is still under HEAVY development. Breaking changes may happen with little to no warning.
:::

All API request use the base URL `https://api.astronaut.gg:3000/api/{version}/`

|API version|Status|
|---|---|
|v1|Pre-release|

All 3rd-party applications using the API should set a user agent that identifies their application.   \
Example: `User-Agent: Cosmo (cosmo.bot, v1.0)`

## Authentication

Some requests require authentication. To authenticate with the API you must be an admin of the bot dev team.

API tokens should be sent in the `Authorization` header of requests.
