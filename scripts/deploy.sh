#!/usr/bin/env bash
ssh root@37.139.19.129 rm -rf /var/www/html/*
scp ./dist/* root@37.139.19.129:/var/www/html
