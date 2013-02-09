# Require any additional compass plugins here.

# Set this to the root of your project when deployed:



#http_path = "/"
css_dir = "temp/styles"
sass_dir = "app/styles"
images_dir = "app/images"
javascripts_dir = "temp/scripts"
# https://github.com/yeoman/yeoman/issues/419
http_generated_images_path = '/images'
generated_images_dir = '/images'
#http_images_path= '../images' 
#http_generated_images_path = "app/images"
#generated_images_path= "app/images"
#fonts_dir = "app/fonts"

environment = :development
# environment = :production
output_style = (environment == :production) ? :compressed : :expanded

relative_assets = false

# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass
preferred_syntax = :scss

require 'susy'
require 'best'
require 'compass-normalize'