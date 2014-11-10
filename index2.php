<?php include('header.php'); ?>

<section class="container">
    <div class="row">
        <h1>SVBSTRATE</h1>
    </div>
</section>

<section id="intro" class="container">
        <div class="row">
            <div class="column lg_size1of2 size1of1 lg_suffix1of2 suffix0of0">
                <h2>THE GOODS:</h2>
                <ul class="h4">
                    <li><h4><a href="http://sass-lang.com/" target="_blank">SASS</a> (fuck yeah)</h4></li>
                    <li><h4>super-light <code>inline-block</code> based grid system</h4></li>
                    <li><h4>basic golden typographical hierarchy</h4></li>
                    <li><h4><a href="http://fortawesome.github.io/Font-Awesome/icons/" target="_blank">FontAwesome</a></h4></li>
                    <li><h4>7 included stock images from one of my side projects, <a href="http://startupstockphotos.com" target="_blank">Startup Stock Photos</a></h4></li>
                </ul>
            </div>
            <div class="column lg_size1of2 size1of1 lg_suffix1of2 suffix0of0">
                <h3>PLUS A COUPLE FAVS:</h3>
                <ul class="h4">
                    <li><h4><a href="https://github.com/Prinzhorn/skrollr" target="_blank">Skrollr</a> Parallax Library</h4></li>
                    <li><h4>the super-neat <a href="https://github.com/julianlloyd/scrollReveal.js" target="_blank">ScrollReveal</a> Library</h4></li>
                </ul>
            </div>
        </div>
    </section>
    <section class="container">
        <div class="row">
             <div class="column lg_size1of2 size1of1">
                <h2>GET SASSY</h2>
                 <h4>It's the best (imo). Be smart, use it for variables, <code>calc()</code>, etc, but keep the nesting and functions to a minimum. Ain't nobody got time for that.<br/>
                    <br/>
                     Also, SVBSTRATE is mobile first. Use the separate .scss files in <code>~/components/</code> for the different breakpoints. Yay minimal CSS.<br/>
                    <br/>
                     Run sass <code>--watch scss style.scss:style.css</code> to compile from terminal.</h4>
            </div>
        </div>
    </section>
    <section id="gridSection" class="container">
        <div class="row">
            <div class="column size1of1">
                <h2>INLINE-BLOCK GRID</h2>
                <h4 class="column lg_size1of2 size1of1">Floats are silly. Inline-block based grids keep it simple and use easy to understand syntax. That's smart. Adjust settings in <code>~/components/_grid--settings.scss</code>, including breakpoints.</h4>
            </div>
        </div>
        <div class="row">
            <div class="block column lg_size1of4 size1of2"><h4>lg_size1of4 size1of2</h4></div>
            <div class="block column lg_size1of4 size1of2"><h4>lg_size1of4 size1of2</h4></div>
            <div class="block column lg_size1of4 size1of2"><h4>lg_size1of4 size1of2</h4></div>
            <div class="block column lg_size1of4 size1of2">
                <h4>lg_size1of4 size1of2</h4>
                <div class="block--nested block column lg_size1of2 size1of1"><h5>lg_size1of2 size1of1</h5></div>
            </div>
        </div>
        <div class="row">
            <div class="column size1of1">
                <h3>VERTICAL ALIGNMENT</h3>
                <h4 class="column lg_size1of2 size1of1">The row container below has a class of <code>u-verticalAlign--middle</code>, forcing the child blocks to align vertically. Use <code>u-verticalAlign--top</code> <code>u-verticalAlign--bottom</code> for top and bottom alignment.</h4>
            </div>
        </div>
        <div id="verticalAlign" class="verticalAlign--middle row">
            <h4>u-verticalAlign--middle row</h4>
            <div class="block--nested block column size1of4"></div>
            <div class="block column size1of4"></div>
            <div class="block--nested block column size1of4"></div>
            <div class="block column size1of4"></div>
        </div>
    </section>
    
    <!-- outer slide container-->
    <section class="sliderContainer">
        
        <div class="js-slider">
            
            <div class="slide">
                <img src="resources/images/1.jpg" alt="" />
            </div>
            
            <div class="slide">
                <img src="resources/images/2.jpg" alt="" />
            </div>
            
        </div>
        
        <nav class="slider-navigation">
            <div class="next"><i class="fa fa-chevron-right fa-3x fa-fw"></i></div>
            <div class="prev"><i class="fa fa-chevron-left fa-3x fa-fw"></i></div>
        </nav>
        
    </section>
    <!-- end slide container-->



<?php include('footer.php'); ?>
