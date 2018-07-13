
jQuery(document).ready( function() {
    jQuery("a.animated.prj_info").on("mousedown", function(){
        var project = jQuery(this).attr('href');
        project = domain_from_url(project);
        _gaq.push(['_trackEvent', 'Sutufive', 'Projects' , project]);
    });

    $("#slide-prev").on("click", function(){
        _gaq.push(['_trackEvent', 'Sutufive', 'Navigation arrow']);
    });

    $("#slide-next").on("click", function(){
        _gaq.push(['_trackEvent', 'Sutufive', 'Navigation arrow']);
    });

});

function domain_from_url(url) {
    var result
    var match
    if (match = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im)) {
        result = match[1]
        if (match = result.match(/^[^\.]+\.(.+\..+)$/)) {
            result = match[1]
        }
    }

    if(result == 'google.com'){
        result = 'Renault app';
    }
    return result
}