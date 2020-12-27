# README

## Requirements
- ruby 2.7 or higher
- yarn
- sqlite3

## Installation

```
bin/setup
```

## Run

```
bin/rails s
bin/webpack-dev-server
```

## TODO
- [ ] host configuration

refs:
```
config/routes.rb:9:  Rails.application.routes.default_url_options[:host] = '172.16.2.16:3000'
config/webpacker.yml:59:    public: 172.16.2.16:3035
```
