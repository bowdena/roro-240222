rails _7.1.3_ new stimulus_20240219 --css tailwind --javascript=esbuild --asset-pipeline=propshaft
rails g controller StaticPages roro
root 'static_pages#roro'

### Create the visibility stimulus controller
rails g stimulus Visibility
https://stimulus.hotwired.dev/reference/lifecycle-callbacks


https://stimulus.hotwired.dev/reference/outlets
> $ rails g stimulus outside