#!/bin/bash

curl -X POST -H "Content-Type: application/json"\
  -d '{"order_id":10,"id":1, "from_page":0, "to_page":10, "sides":2, "page_size":"A4", "quantity":1, "file_path":"repository/haha.pdf"}'\
  http://localhost:8000/printdetails