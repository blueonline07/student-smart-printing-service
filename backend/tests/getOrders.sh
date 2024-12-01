#!/bin/zsh

resp=$(curl -X GET http://localhost:8000/orders?status=cancelled)

echo $resp