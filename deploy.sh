#!/usr/bin/env bash
rsync -r -a -v -e ssh --exclude '.idea'  --exclude '.git' --exclude 'grav' --delete '/Users/sheriftariq/documents/workspace/projects/fluff and logic/fluffandlogic-design/dist/' root@167.99.148.209:/var/www/html/

