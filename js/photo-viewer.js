/* Adapted from book "JavaScript & jQuery" by Jon Duckett */
var request, // Latest image to be requested.
    latestTitle,
    $current, // Image currently being shown.
    cache = {}, // Cache object.
    $frame = $('#photo-viewer'), // Container for image
    $thumbs = $('.thumb'); // Container for image

function crossfade($img) {
    if ($current) {
        $current.stop().fadeOut('slow');
    }
    $img.stop().fadeTo('slow', 1);
    $current = $img;
}

$(document).on('click', '.thumb', function(e) {
    var $img,
        src = this.href;
        request = src,
        currentTitle = this.title,
        latestTitle = currentTitle;
    e.preventDefault();
    $thumbs.removeClass('active');
    $(this).addClass('active');

    if (cache.hasOwnProperty(src)) {
        if (cache[src].isLoading === false) {
            crossfade(cache[src].$img);
        }
    } else {
        $img = $('<img/>');
        cache[src] = {
            $img: $img,
            isLoading: true
        };

        // Next few lines will run when image has loaded but are prepared first
        $img.on('load', function() {
            $img.hide();
            // Remove is-loading class from frame & append new image to it
            $frame.removeClass('is-loading').append($img);
            cache[src].isLoading = false;
            if (request === src) {
                crossfade($img);
            }
        });

        $frame.addClass('is-loading');

        $img.attr({
            'src': src,
            'alt': this.title || ''
        });
    }
});

$('.thumb').eq(0).click(); // Simulate click on first thumbnail.