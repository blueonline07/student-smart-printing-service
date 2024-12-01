#!/bin/zsh

curl -X POST -H "Content-Type: application/json"\
  -d '{"type":"instant", "student":"khang@gmail.com", "printer":1, "available_at":"2024-11-29 13:00:00"}'\
  http://localhost:8000/orders