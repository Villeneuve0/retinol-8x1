var vTurbOriginalPlayer={"id":"65de00fe1aa1e80007825b16","org_id":"7ccc1362-2860-4371-917c-92ecfbec948a","name":"criativo_ment01","device_type":"desktop","video_aspect_ratio":"100.0","thumbnail_key":"7ccc1362-2860-4371-917c-92ecfbec948a/players/65de00fe1aa1e80007825b16/thumbnail.jpg","cover_key":"7ccc1362-2860-4371-917c-92ecfbec948a/players/65de00fe1aa1e80007825b16/cover.jpg","version":"v1","video_id":"65de00d51aa1e80007825b01","options":{"autoplay":!1,"smart_autoplay_template":"","theme":"#DF0F00","foreground_color":"#FFFFFF","video":{"width":720,"height":720,"pic":"https://images.converteai.net/7ccc1362-2860-4371-917c-92ecfbec948a/players/65de00fe1aa1e80007825b16/cover.jpg"},"cdn":"cdn.converteai.net","displays":{"big_play":!0,"play_pause":!0,"backward":!1,"forward":!1,"volume":!0,"volume_bar":!0,"time":!1,"fullscreen":!1,"seekbar":!1,"seekbar_time":!0,"speed_control":!1},"callAction":[],"pixels":[],"thumbs":[],"headlines":[],"turbos":[],"smart_autoplay_elements":[],"mini_hooks":!1,"mini_hooks_elements":[],"resume":!1,"fake_bar":!1,"headline":!1,"turbo":!1,"turbo_speed":1,"turbo_auto_test":!1}},vTurbSrcId="65de00fe1aa1e80007825b16",vTurbPlayer=vTurbOriginalPlayer;"1.7.9"===vTurbPlayer.version?document.getElementById(`vid_${vTurbPlayer.id}`)||function(e,t,r,a){r=t.getElementById(`scr_${vTurbSrcId}`),(a=t.createElement("DIV")).id=`vid_${vTurbPlayer.id}`,r.parentElement.insertBefore(a,r)}(window,document):(document.getElementById(`vid_${vTurbPlayer.id}`)||function(e,t,r){t=e.getElementById(`scr_${vTurbSrcId}`),(r=e.createElement("DIV")).id=`vid_${vTurbPlayer.id}`,r.style.position="relative",r.style.width="100%",r.style.padding=`${vTurbPlayer.video_aspect_ratio}% 0 0`,t.parentElement.insertBefore(r,t)}(document),document.getElementById(`thumb_${vTurbPlayer.id}`)||function(e,t,r){t=e.getElementById(`vid_${vTurbPlayer.id}`),(r=e.createElement("IMG")).id=`thumb_${vTurbPlayer.id}`,r.style.top="0",r.style.left="0",r.style.width="100%",r.style.height="100%",r.style.position="absolute",r.style.objectFit="cover",r.src=`https://images.converteai.net/${vTurbPlayer.thumbnail_key}`,t.appendChild(r)}(document),document.getElementById(`backdrop_${vTurbPlayer.id}`)||function(e,t,r){t=e.getElementById(`vid_${vTurbPlayer.id}`),(r=e.createElement("DIV")).id=`backdrop_${vTurbPlayer.id}`,r.style.top="0",r.style.left="0",r.style.width="100%",r.style.height="100%",r.style.position="absolute",r.style.backdropFilter="blur(5px)",r.style.webkitBackdropFilter="blur(5px)",t.appendChild(r)}(document)),function(e,t,r,a,i,l){e.smrtvds||(i=e.smrtvds=function(){i.callMethod?i.callMethod.apply(i,arguments):i.queue.push(arguments)},e._smrtvds||(e._smrtvds=i),i.push=i,i.loaded=!0,i.version="1.1",i.queue=[],(l=t.createElement("script")).async=!0,l.src=`https://cdn.converteai.net/lib/js/smartplayer/${vTurbPlayer.version}/smartplayer.min.js`,t.getElementsByTagName("head")[0].appendChild(l))}(window,document),window.smrtvds(`vid_${vTurbPlayer.id}`,vTurbPlayer.org_id,vTurbPlayer.video_id,vTurbPlayer.options);