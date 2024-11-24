#!/bin/zsh

curl -X POST -H "Content-Type: application/json"\
 -d '{"role":"student", "email":"khang@gmail.com", "name":"LEDUYKHANG"}'\
  http://localhost:8000/users
