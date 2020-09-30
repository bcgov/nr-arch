# Natural Resource Ministries Architecture Team

## Architectural Records of Decision Index

https://bcgov.github.io/nr-arch/

## How To's 
[Architectural Decision Records (ADRs) for Natural Resource Ministries (NRM)](https://github.com/bcgov/nr-arch/blob/master/docs/index.md)


## NRM's Technology Radar
[Technology Radar details](docs/TechRadar/TechRadar.md)


## Prerequistes for making big updates on the Jekyll website and testing (small markdown edits don't require this)
Ruby version 2.5.0 or higher, including all development headers (check your Ruby version using ruby -v)<br>
RubyGems (check your Gems version using gem -v)<br>
GCC and Make (check versions using gcc -v,g++ -v, and make -v)<br>
see https://jekyllrb.com/docs/<br>


	
> gem uninstall eventmachine<br>
> ridk exec pacman -Sy openssl<br>
> gem install eventmachine --platform=ruby<br>

> bundle install<br>
> gem install jekyll bundler
> bundle exec jekyll serve --trace --livereload
