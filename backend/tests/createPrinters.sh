#!/bin/zsh

curl -X POST -H "Content-Type: application/json"\
  -d '{"brand":"HP", "model":"HP LaserJet Pro M15w",
   "room":"103", "building":"H6", "campus":"BK2", "printables":["pdf", "doc"]}'\
  http://localhost:8000/printers