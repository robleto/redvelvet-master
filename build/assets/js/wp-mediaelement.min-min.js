!function(e,t){function i(){function e(){"undefined"!=typeof _wpmejsSettings&&(i=t.extend(!0,{},_wpmejsSettings)),i.success=i.success||function(e){var t,i;"flash"===e.pluginType&&(t=e.attributes.autoplay&&"false"!==e.attributes.autoplay,i=e.attributes.loop&&"false"!==e.attributes.loop,t&&e.addEventListener("canplay",function(){e.play()},!1),i&&e.addEventListener("ended",function(){e.play()},!1))},t(".wp-audio-shortcode, .wp-video-shortcode").not(".mejs-container").filter(function(){return!t(this).parent().hasClass(".mejs-mediaelement")}).mediaelementplayer(i)}var i={};return{initialize:e}}e.wp=e.wp||{},mejs.plugins.silverlight[0].types.push("video/x-ms-wmv"),mejs.plugins.silverlight[0].types.push("audio/x-ms-wma"),e.wp.mediaelement=new i,t(e.wp.mediaelement.initialize)}(window,jQuery);