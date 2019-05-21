# uniquevisitors

# About
An application which displays the number of total
unique visitors on the web page with backend as ruby and frontend as React.Added screenshot

# Setup

Install ruby and rails using the link:  https://gorails.com/setup/ubuntu/16.04



## Installation

```bash
bundle install #installs all the necessary depenencies
rake db:create #creates the database
rake db:migrate #migrations for the database

rails webpacker:install       # OR (on rails version < 5.0) rake webpacker:install
rails webpacker:install:react # OR (on rails version < 5.0) rake webpacker:install:react
rails generate react:install

rails s # to start the server





