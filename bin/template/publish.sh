#!/bin/bash
zip -r publish.zip ./src
curl --location --request POST 'fasterbase.com/api/function/publish' --header 'Authorization: Berear TOKEN' --form '=@"publish.zip"'