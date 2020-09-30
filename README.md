# Natural Resource Ministries Architecture Team

## Architectural Records of Decision Index

https://bcgov.github.io/nr-arch/

## How To's 
[Architectural Decision Records (ADRs) for Natural Resource Ministries (NRM)](https://github.com/bcgov/nr-arch/blob/master/docs/index.md)


## NRM's Technology Radar
[Technology Radar details](docs/TechRadar/TechRadar.md)

prerequistes for big updates and testing (smallmarkdown edits don't require this):
Ruby version 2.5.0 or higher, including all development headers (check your Ruby version using ruby -v)
RubyGems (check your Gems version using gem -v)
GCC and Make (check versions using gcc -v,g++ -v, and make -v)
see https://jekyllrb.com/docs/


gem uninstall eventmachine
ridk exec pacman -Sy openssl
gem install eventmachine --platform=ruby

bundle install
gem install jekyll bundler
bundle exec jekyll serve --trace --livereload