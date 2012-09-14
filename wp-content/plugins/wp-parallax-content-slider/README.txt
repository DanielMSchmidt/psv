=== WP Parallax Content Slider ===
Plugin Author: wp-maverick
Donate link: http://jltweb.info/realisations/wp-parallax-content-plugin/#contribute
Contributors: wp-maverick
Tags: slider, parallax, animation 
Requires at least: 3.0
Tested up to: 3.4.1
Stable tag: 0.7

A customizable JQuery content slider with CSS3 animations and parallax effects.

== Description ==

WP Parallax Content Slider is a plugin which adds automatically a content slider of your last posts where you want on your Wordpress blog or website.

This plugin is written upon the code of [Manoella Ilic](http://tympanus.net/codrops/author/crnacura/), you can see the simple JQuery and CSS version [here](http://tympanus.net/codrops/2012/03/15/parallax-content-slider-with-css3-and-jquery/).

Transitions between slides are made using a powerfull combination of CSS3 and JQuery to display a beautiful parallax effect.

It is very easy to configure the plugin as it adds automatically an admin page in Wordpress administration section. You will be able to configure :

* The number of posts to display ;
* The auto-switch mode ;
* The time between each slide ;
* The sort order of the posts to display ;
* The graphic theme ;
* and many more...

It's also possible to choose to display a static HTML content instead of displaying last posts in the slider.

New in v0.7: Choose between 4 CSS color themes!

= Plugin's Official Site =

You'll find more informations on the WP Parallax Content Slider plugin page [here](http://jltweb.info/realisations/wp-parallax-content-plugin/).

== Installation ==

To install the plugin you must follow these 4 simple steps:

1. Upload the `wp-parallax-content-slider` folder to the `/wp-content/plugins/` directory
1. Activate the plugin through the 'Plugins' menu in WordPress
1. Place the following code in your templates :`<?php if ( function_exists( 'get_wp_parallax_content_slider' ) ) { get_wp_parallax_content_slider(); } ?>`
1. Customize your slider with the option panel in Wordpress

== Frequently Asked Questions ==

= How do I add/edit slides in static mode? =

In static display mode, the plugin simply use the 4 slides which are in the file `static-slides-sample.php`. So if you want to add/edit slides, you’ll have to edit manually this file! (I recommand to copy the sample file and rename it, then change the inclusion in `wp-parallax-content-slider.php`:
`include('static-slides-sample.php');`
to
`include('static-slides-customized.php');`

= Why can I see the parallax effect in Internet Explorer? =

Unfortunately for IE users, this slider use CSS3 transitions & animations which are not yet supported by IE :(

[http://caniuse.com/#feat=css-transitions](http://caniuse.com/#feat=css-transitions)
[http://caniuse.com/#feat=css-animation](http://caniuse.com/#feat=css-animation)

So the slider will works, but without the parallax effect!

== Screenshots ==

1. The slider displayed after the header 
2. The admin panel 

== Changelog ==

= 0.7 =
* User can now choose between 4 CSS Themes
* Add swipe support for touch screens

= 0.6 =
* User can now apply a filter on post categories
* New parameters for the dynamic mode: Post ordering and sorting
* Add a bit of responsive design

= 0.5.1 =
* Fix the slider Opera bug 

= 0.5 =
* Thumbnails are now displayed in the dynamic mode (medium size) for posts which have one
* Add a new parameter to choose the default image to display for posts without thumbnail in the dynamic mode
* French translation files have been completed and corrected

= 0.4 =
* Add parameters for better configuration and clearly separate the admin panel between dynamic mode and static mode parameters
* French translation files have been completed and corrected

= 0.3 =
* Add selection of last articles to display in a dynamic slider instead of static content

= 0.2 =
* Use admin parameters to customize the CSS Style and JQuery script
* Add french translation (.po files)

= 0.1 =
* Slider content and number of slides are static 
* admin page is developped but parameters are not used

== Upgrade Notice ==

Be careful, if you decide to upgrade automatically the plugin, be sure to backup your customized files, especially 'style.css' and 'static-slides-sample.php'. Automatic update will replace these files and you might lose your stuff!
