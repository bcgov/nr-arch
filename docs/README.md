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
